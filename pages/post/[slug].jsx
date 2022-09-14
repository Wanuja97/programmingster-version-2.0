import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import Styles from "../../styles/SinglePost.module.scss";
import DisqusCommentBox from "../../components/DisqusCommentBox";
import { useRouter } from "next/router";
import AuthorDetails from "../../components/AuthorDetails";

import client from "../../client";
import groq from "groq";
import imageUrlBuilder from '@sanity/image-url'

import moment from "moment";
export default function SinglePost({ post }) {
  const {
    title,
    imageUrl,
    publishedAt,
    description,
    topics,
    rescources,
    sourcecode
    
  } = post;
  const router = useRouter();
  // const { slug } = router.query;
  // alert(JSON.stringify(post.imageUrl))

  const builder = imageUrlBuilder(client)
  function urlFor(source) {
    return builder.image(source)
  }
  return (
    <div>
      <Head>
        {/* <title>{slug}</title> */}
        <meta
          name="description"
          content="Welcome to programmingster.Sharing the knowledge is the best thing to learn"
        />
      </Head>
      <main className="commonpagestyles">
        <div className={Styles.singlepostcontainer}>
          <div className={Styles.heading}>
            <h1>{title}</h1>
            <p>
              BY{" "}
              <span className={Styles.headingauthorname}>
                WANUJA RANASINGHE
              </span>{" "}
              <br />
              <span className={Styles.postdate}>Posted on  {moment({ publishedAt }).format("MMMM Do YYYY")}{" "}</span>
            </p>

            <div className={Styles.headingdivider}></div>
          </div>
          <div className={Styles.content}>
            <div className={Styles.uppercontent}>
              <div className={Styles.coverimage}>
                <Image
                  src={urlFor(imageUrl).url()}
                  layout="fill"
                  // alt={slug}
                  priority={true}
                />
              </div>
              <div className={Styles.postmetadata}>
                {/* mapped */}
                <div>
                  <p className={Styles.subheading}>OVERVIEW</p>
                  <p className={Styles.subcontent}>{description}</p>

                  <div className={Styles.subcontentdivider}></div>
                </div>

                <div>
                {/* mapped */}
                  <p className={Styles.subheading}>TOPICS</p>
                  {topics && (
                    <ul className={Styles.subcontentlist}
                    style={{ color: "#555" }}>
                     
                      {topics.map((topics) => (
                        <li key={topics}>{topics}</li>
                      ))}
                    </ul>
                  )}

                  <div className={Styles.subcontentdivider}></div>
                </div>
                <div>
                  {/* mapped */}
                  <p className={Styles.subheading}>RESOURCES &amp; LINKS</p>

                  {rescources && (
                    <ul className={Styles.subcontentlist}
                    style={{ color: "#555" }}>
                     
                      {rescources.map((rescources) => (
                        <li key={rescources}><a href={rescources}>{rescources}</a> </li>
                      ))}
                    </ul>
                  )}

                  <div className={Styles.subcontentdivider}></div>
                </div>
                <div>
                  {/* mapped */}
                  <p className={Styles.subheading}>GITHUB SOURCE CODE</p>
                  <p>
                    <a href={sourcecode}>{sourcecode}</a>
                  </p>
                  <div className={Styles.subcontentdivider}></div>
                </div>
              </div>
            </div>
            <div className={Styles.postcontent}>Post body</div>
            <div className={Styles.aboutauthor}>
              <AuthorDetails />
            </div>
            <div className={Styles.commentsection}>
              <DisqusCommentBox />
            </div>
            <div className={Styles.recommendpost}>
              <p className={Styles.headingr}>Related Articles</p>
              <Card>
                <Card.Body>
                  <div>
                    <span className={Styles.date}>May 21,2022</span>
                  </div>
                  {/* SSR check */}
                  <div>
                    <span className={Styles.topic}>
                      <Link href="/">
                        <a>Manage Azure Blob Storage Using NestJS</a>
                      </Link>
                    </span>
                  </div>
                  <div className={Styles.rpostcontent}>
                    <div className={Styles.rpostimage}>
                      <Image
                        src="/image.jpg"
                        layout="fill"
                        priority={true}
                        objectFit="contain"
                        alt="recommended-post"
                      />
                    </div>
                    <div className={Styles.rpostcontentbody}>
                      is a developer, lifelong learner, and a passionate person
                      who is always willing to learn and explore technologiess.
                      He currently reading B.Sc.(Hons.) degree in Information
                      Technology at university of Moratuwa, Sri Lanka.
                      <div>
                        <a href="">Read More</a>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "imageUrl": mainImage.asset->url,
  description,
  "name": author->name,
  "topics": topics[],
  "rescources": rescources[],
  sourcecode,
  publishedAt
  
}`;

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post,
    },
  };
}
