import React from "react";
import Image from "next/image";
import Link from "next/link";
import Styles from "../styles/Footer.module.scss";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className={Styles.footercontainer}>
      <div className={Styles.footerbody}>
        <div className={Styles.footerimg}>
          <Image
            src="/programmingster-logo.png"
            alt="programmingster logo"
            width="360"
            height="120"
          />
        </div>
        <div className={Styles.footernavigation}>
        {/* <h6>Overview</h6> */}
          <ul>
            <li>
              <Link href="/">
                <a>Home </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact </a>
              </Link>
            </li>
            <li>
              <Link href="/privacypolicy">
                <a>Privacy Policy </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={Styles.footercontact}>
            <h6>Connect With Me</h6>
            <ul>
                <li><a href="https://www.linkedin.com/in/wanujaranasinghe/"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                <li><a href="https://github.com/Wanuja97"><ion-icon name="logo-github"></ion-icon></a></li>
                <li><a href="https://wanuja18.medium.com/"><ion-icon name="logo-medium"></ion-icon></a></li>
                <li><a href="https://www.behance.net/wanujaranasinghe"><ion-icon name="logo-behance"></ion-icon></a></li>
            
            </ul>
        </div>
      </div>
      <div className={Styles.copyrights}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <hr style={{ width: "70vw" }} />
        </div>
        <p>
          © {year} Programmingster. All rights reserved. <br />
          🎨 Designed & Developed By{"❤️"}
          <a href="https://www.wanujaranasinghe.me/">
            <span style={{ color: "#2EE48D" }}>Wanuja Ranasinghe</span>
          </a>
        </p>
      </div>
    </div>
  );
}
