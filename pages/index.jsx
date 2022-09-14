import Head from "next/head";
import Image from "next/image";
import HomeImage from "../public/homeimage-min.png";
import Styles from "../styles/HomePage.module.scss";
import Button from "react-bootstrap/Button";
import HomeCategoryTabs from "../components/HomeCategoryTabs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Programmingster</title>
        <meta
          name="description"
          content="Welcome to programmingster.Sharing knowledge is the best thing to learn"
        />
      </Head>

      <main className={`${Styles.main} commonpagestyles`}>
        <div className={Styles.uppercontent}>
          <div
            className={Styles.content}
          >
            <p className={`${Styles.welcome} gradientcolor`}>
              Welcome to Programmingster.
            </p>
            <h1>Sharing knowledge is the best thing to learn.</h1>
            <div className={Styles.btncontainer}>
              <a href="#categories">
                <Button className={Styles.startbtn}>Get Started</Button>
              </a>
            </div>
          </div>
          <div
            className={Styles.homeimage}
          >
            <Image
              src={HomeImage}
              alt="Home Image"
              priority={true}
              width={933}
              height={700}
            />
          </div>
        </div>

        <div className={Styles.bottomcontent}>
          <div className={Styles.posts} id="categories">
            <HomeCategoryTabs />
          </div>
        </div>
      </main>
    </div>
  );
}
