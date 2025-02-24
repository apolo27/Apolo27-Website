import puppeteer from "puppeteer";
import { NextResponse } from "next/server";

export async function GET() {
  let browser = null;

  try {
    browser = await puppeteer.launch({
      headless: "new",
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-accelerated-2d-canvas",
        "--disable-gpu",
      ],
      defaultViewport: { width: 1920, height: 1080 },
    });

    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    );

    // Aumentar timeout
    await page.setDefaultNavigationTimeout(30000);

    // Interceptar y rechazar recursos innecesarios
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      if (["image", "stylesheet", "font"].includes(req.resourceType())) {
        req.abort();
      } else {
        req.continue();
      }
    });

    await page.goto("https://www.tiktok.com/@apolo27rd", {
      waitUntil: "networkidle0",
      timeout: 5000,
    });

    // Esperar a que cargue el contenido
    await page.waitForSelector('div[data-e2e="user-post-item"]', {
      timeout: 5000,
    });

    // Scroll para cargar más contenido
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });

    await new Promise((r) => setTimeout(r, 2000)); // Esperar que cargue el contenido

    const videos = await page.evaluate(() => {
      const videoElements = document.querySelectorAll(
        'div[data-e2e="user-post-item"]',
      );
      return Array.from(videoElements)
        .slice(0, 3)
        .map((element) => {
          const videoLink = element.querySelector("a")?.href;
          const videoId = videoLink?.split("/video/")[1]?.split("?")[0];
          return {
            videoId,
            videoUrl: videoLink,
            description:
              element.querySelector('div[data-e2e="user-post-item-desc"]')
                ?.textContent || "",
          };
        })
        .filter((video) => video.videoId);
    });

    if (!videos.length) {
      throw new Error("No videos found");
    }

    return NextResponse.json(
      { videos },
      {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=300",
        },
      },
    );
  } catch (error) {
    console.error("Error scraping TikTok:", error);
    return NextResponse.json(
      { error: "Failed to scrape TikTok videos", details: error.message },
      { status: 500 },
    );
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
