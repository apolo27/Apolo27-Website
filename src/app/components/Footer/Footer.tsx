import React from "react";
import Link from "next/link";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer z-10">
    <div className="container">
      <div className="row">
        <div className="footer-col">
          <h4>Apolo 27</h4>
          <ul className="">
                  <li><Link href="/#timeline">Our Shrefry</Link></li>
                  <li><Link href="/#Members">Members</Link></li>
                  <li><Link href="Telemetry">Telemetry</Link></li>
                  <li><Link href="STEM">STEM</Link></li>
                  <li><Link href="Manufacturing">Manufacturing</Link></li>
                  <li><Link href="Simulation">HERC Simulation</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Data Dashboard</h4>
          <ul>
                   <li><Link href="DataDashboard#overview">Overview</Link></li>
                   <li><Link href="DataDashboard#rover">Rover</Link></li>
                   <li><Link href="DataDashboard#crewmembers">Crewmembers</Link></li>
                   {/* <li><Link href="DataDashboard#environment">Environment</Link></li> */}
                   <li><Link href="DataDashboard#sensors">Sensors</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Stem With Us</h4>
          <ul>
            <li><Link href="StemWithUs#blogs">Blog</Link></li>
            <li><Link href="StemWithUs#events">Events Calendar</Link></li>
            <li><Link href="ContactUs">Book a School Visit</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>follow us</h4>
          <div className="social-links">
                   <a href="https://www.instagram.com/apolo27_rd/" target="_blank"><i className="fab fa-instagram"></i></a>
                   <a href="https://www.youtube.com/@apolo2730" target="_blank"><i className="fab fa-youtube"></i></a>
                   <a href="https://www.linkedin.com/company/apolo27/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                   <a href="https://www.tiktok.com/@apolo27rd" target="_blank"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>
      </div>
    </div>
 </footer>
  );
}
