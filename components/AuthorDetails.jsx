import React from "react";
import Image from "next/image";
import Styles from "../styles/AboutAuthor.module.scss";
export default function AuthorDetails() {
  return (
    <div>
      <p className={Styles.headingauthor}>About the Author</p>
      <div className={Styles.authordetails}>
        <div>
          <Image
            src="/author.png"
            width={250}
            height={250}
            priority={true}
            alt="Wanuja Ranasinghe - Author &amp; Owner of Programmingster"
          />
        </div>

        <p>
          <b>
            <a href="https://www.wanujaranasinghe.me/">Wanuja Ranasinghe</a>
          </b>{" "}
          is a developer, lifelong learner, and a passionate person who is
          always willing to learn and explore technologiess. He currently
          reading B.Sc.(Hons.) degree in Information Technology at university of
          Moratuwa, Sri Lanka.
        </p>
      </div>
    </div>
  );
}
