import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import HomeImage from "../public/homeimage-min.png";
import Styles from "../styles/HomePage.module.scss";
import Button from "react-bootstrap/Button";
import TabStyles from "../styles/HomeCategoryTabs.module.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import moment from "moment";
import Maintainenace from "../components/Maintainenace";
import Animation from "../components/Animation";
export default function Home({ posts }) {
  const [key, setKey] = useState("all");
  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }

  return (
    <div>
      <Head>
        <title>Programmingster</title>
        <meta
          name="description"
          content="Welcome to programmingster.Sharing knowledge is the best thing to learn"
        />
        <meta name="title" content="Programmingster" />
        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://programmingster.com/" />
        <meta property="og:title" content="Programmingster" />
        <meta
          property="og:description"
          content="Welcome to Programmingster. Sharing knowledge is the best thing to learn."
        />
        {/* Twitter  */}
        <meta property="twitter:url" content="https://programmingster.com/" />
        <meta property="twitter:title" content="Programmingster" />
        <meta
          property="twitter:description"
          content="Welcome to Programmingster. Sharing knowledge is the best thing to learn."
        />
        <link rel="canonical" href="https://programmingster.com/" />
      </Head>

      <main className={`${Styles.main} commonpagestyles`}>
      <Maintainenace/>
      <Animation/>
        <div className={Styles.uppercontent}>
          
          <div className={Styles.content}>
          
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
          
          <div className={Styles.homeimage}>
            
            <Image
              src={HomeImage}
              alt="Home Image"
              priority={true}
              width={933}
              height={700}
            />
          </div>
        </div>

        <div className={Styles.bottomcontent} id="categories">
          <div className={Styles.posts}>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="all" title="All Posts">
                <div className={TabStyles.cardgroup}>
                  {posts?.length > 0 &&
                    posts.map(
                      ({
                        _id,
                        title = "",
                        slug = "",
                        publishedAt = "",
                        description = "",
                        mainImage = "",
                        category = "",
                      }) => {
                        return (
                          slug && (
                            <a href={`/post/${slug.current}`} key={_id}>
                              <Card className={TabStyles.card}>
                                <Card.Img
                                  variant="top"
                                  src={urlFor(mainImage).url()}
                                  alt={slug}
                                />
                                <Card.Body>
                                  <Card.Title>{title}</Card.Title>
                                  <Card.Text>{description}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                  <small className="text-muted">
                                    Posted on{" "}
                                    {moment({ publishedAt }).format(
                                      "MMMM Do YYYY"
                                    )}{" "}
                                  </small>
                                </Card.Footer>
                              </Card>
                            </a>
                          )
                        );
                      }
                    )}
                </div>
              </Tab>
              <Tab eventKey="htmlcss" title="HTML &amp; CSS">
                <div className={TabStyles.cardgroup}>Test</div>
              </Tab>
              <Tab eventKey="reactjs" title="ReactJS">
                ReactJS
              </Tab>
              <Tab eventKey="other" title="Other">
                ReactJS
              </Tab>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  `);
  return {
    props: {
      posts,
    },
  };
}
