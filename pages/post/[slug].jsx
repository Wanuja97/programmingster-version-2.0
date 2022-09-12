import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import Styles from "../../styles/SinglePost.module.scss";
import DisqusCommentBox from "../../components/DisqusCommentBox";
import { useRouter } from "next/router";
export default function SinglePost() {
  const router = useRouter();
  const { slug } = router.query;
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
            <h1>{slug}</h1>
            <p>
              BY{" "}
              <span className={Styles.headingauthorname}>
                WANUJA RANASINGHE
              </span>
            </p>
            <div className={Styles.headingdivider}></div>
          </div>
          <div className={Styles.content}>
            <div className={Styles.uppercontent}>
              <div className={Styles.coverimage}>
                <Image
                  src="/image.jpg"
                  layout="fill"
                  alt={slug}
                  priority={true}
                />
              </div>
              <div className={Styles.postmetadata}>
                <div>
                  <p className={Styles.subheading}>OVERVIEW</p>
                  <p className={Styles.subcontent}>
                   This is OVERVIEW
                  </p>
                  <p className={Styles.subcontent}>
                    Overview
                  </p>
                  <div className={Styles.subcontentdivider}></div>
                </div>

                <div>
                  <p className={Styles.subheading}>TOPICS</p>

                  <ul
                    className={Styles.subcontentlist}
                    style={{ color: "#555" }}
                  >
                    <li>ReactJS</li>
                    <li>AOS</li>
                    <li>Scrolling Animations</li>
                    <li>npm</li>
                  </ul>

                  <div className={Styles.subcontentdivider}></div>
                </div>
                <div>
                  <p className={Styles.subheading}>RESOURCES &amp; LINKS</p>

                  <ul className={Styles.subcontentlist}>
                    <li>
                      <a href="">https://michalsnik.github.io/aos/</a>
                    </li>
                    <li>
                      <a href="">
                        https://nextjs.org/docs/api-reference/next/image
                      </a>
                    </li>
                  </ul>

                  <div className={Styles.subcontentdivider}></div>
                </div>
                <div>
                  <p className={Styles.subheading}>GITHUB SOURCE CODE</p>
                  <p>
                    <a href="">
                      https://github.com/Wanuja97/azure-blob-storage-integration-nestjs
                    </a>
                  </p>
                  <div className={Styles.subcontentdivider}></div>
                </div>
              </div>
            </div>
            <div className={Styles.postcontent}>
              Post body
            </div>
            <div className={Styles.aboutauthor}>
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
                    <a href="https://www.wanujaranasinghe.me/">
                      Wanuja Ranasinghe
                    </a>
                  </b>{" "}
                  is a developer, lifelong learner, and a passionate person who
                  is always willing to learn and explore technologiess. He
                  currently reading B.Sc.(Hons.) degree in Information
                  Technology at university of Moratuwa, Sri Lanka.
                </p>
              </div>
            </div>
            <div className={Styles.commentsection}>
              <DisqusCommentBox/>
            </div>
            <div className={Styles.recommendpost}>
              <p className={Styles.headingr}>Related Artcles</p>
              <Card>
                <Card.Body>
                  <div>
                    <span className={Styles.date}>May 21,2022</span>
                  </div>
                  {/* SSR check */}
                  <div>
                    <span className={Styles.topic}>
                      <Link href="/">
                        <a>Azure</a>
                      </Link>
                    </span>
                  </div>
                  <div className={Styles.rpostcontent}>
                    <div>
                      <Image
                        src="/image.jpg"
                        width={150}
                        height={100}
                        priority={true}
                        alt="Wanuja Ranasinghe - Author &amp; Owner of Programmingster"
                      />
                    </div>
                    <div className={Styles.rpostcontentbody}>
                      Post description
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
