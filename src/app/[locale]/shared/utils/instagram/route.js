import puppeteer from "puppeteer";
import { NextResponse } from "next/server";

const USER_AGENTS = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
];

export async function GET() {
  let browser = null;

  try {
    browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    // Usar un User-Agent aleatorio
    await page.setUserAgent(
      USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)],
    );

    // Navegar a la página de Instagram
    await page.goto("https://www.instagram.com/apolo27_rd/reels/");

    // Esperar a que carguen los Reels
    await page.waitForSelector("article");

    // Extraer información de los Reels
    const reels = await page.evaluate(() => {
      const reelElements = document.querySelectorAll("article");
      const reelData = [];

      reelElements.forEach((element, index) => {
        if (index < 3) {
          const link = element.querySelector("a")?.href;
          const thumbnail = element.querySelector("img")?.src;
          const description = element.querySelector("img")?.alt || "";

          if (link) {
            const reelId = link.split("/reel/")[1]?.split("/")[0];
            reelData.push({
              reelId,
              reelUrl: link,
              thumbnail,
              description,
            });
          }
        }
      });

      return reelData;
    });

    if (!reels.length) {
      throw new Error("No reels found");
    }

    return NextResponse.json({ reels });
  } catch (error) {
    console.error("Error scraping Instagram:", error);
    return NextResponse.json(
      { error: "Failed to scrape Instagram reels" },
      { status: 500 },
    );
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
