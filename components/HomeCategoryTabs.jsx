import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Styles from "../styles/HomeCategoryTabs.module.scss";
import Link from "next/link";
import client from "./../client";
import groq from "groq";
export default function HomeCategoryTabs({ posts }) {
  const [key, setKey] = useState("all");
  console.log(JSON.stringify(posts));
  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="all" title="All Posts">
          <div className={Styles.cardgroup}>
            {/* {posts.length > 0 &&
              posts.map(
                ({ _id, title = "", slug = "", publishedAt = "" }) =>
                  slug && (
                    <li key={_id}>
                      <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                        <a>{title}</a>
                      </Link>{" "}
                      ({new Date(publishedAt).toDateString()})
                    </li>
                  )
              )} */}
            <Card className={Styles.card}>
              <Card.Img variant="top" src="/image.jpg" alt="test" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </div>
        </Tab>
        <Tab eventKey="htmlcss" title="HTML &amp; CSS">
          <div className={Styles.cardgroup}>
            <Card className={Styles.card}>
              <Card.Img variant="top" src="/image.jpg" alt="test" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </div>
        </Tab>
        <Tab eventKey="reactjs" title="ReactJS">
          ReactJS
        </Tab>
        {/* <Tab eventKey="backend" title="Backend Technologies">
          Backend
        </Tab> */}
        <Tab eventKey="other" title="Other">
          ReactJS
        </Tab>
      </Tabs>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  `)
  return {
    props: {
      posts
    }
  }
}
