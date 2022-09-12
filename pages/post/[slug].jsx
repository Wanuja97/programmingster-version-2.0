import React from "react";
import Head from "next/head";
import Image from "next/image";
import Styles from "../../styles/SinglePost.module.scss";
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <div className={Styles.subcontentdivider}></div>
                </div>
                             
                <div>
                  <p className={Styles.subheading}>TOPICS</p>
                  
                    <ul className={Styles.subcontentlist} style={{color:"#555"}}>
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
                      <li><a href="">https://michalsnik.github.io/aos/</a></li>
                      <li><a href="">https://nextjs.org/docs/api-reference/next/image</a></li>
                    </ul>
                  
                  <div className={Styles.subcontentdivider}></div>
                </div>
                <div>
                  <p className={Styles.subheading}>GITHUB SOURCE CODE</p>
                  <p>
                    <a href="">https://github.com/Wanuja97/azure-blob-storage-integration-nestjs</a>
                  </p>
                  <div className={Styles.subcontentdivider}></div>
                </div>
                

                
              </div>
            </div>
            <div className={Styles.postcontent}>
              The standard Lorem Ipsum passage, used since the 1500s "Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
              Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error
              sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
              quia consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
              sit amet, consectetur, adipisci velit, sed quia non numquam eius
              modi tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur?" 1914
              translation by H. Rackham "But I must explain to you how all this
              mistaken idea of denouncing pleasure and praising pain was born
              and I will give you a complete account of the system, and expound
              the actual teachings of the great explorer of the truth, the
              master-builder of human happiness. No one rejects, dislikes, or
              avoids pleasure itself, because it is pleasure, but because those
              who do not know how to pursue pleasure rationally encounter
              consequences that are extremely painful. Nor again is there anyone
              who loves or pursues or desires to obtain pain of itself, because
              it is pain, but because occasionally circumstances occur in which
              toil and pain can procure him some great pleasure. To take a
              trivial example, which of us ever undertakes laborious physical
              exercise, except to obtain some advantage from it? But who has any
              right to find fault with a man who chooses to enjoy a pleasure
              that has no annoying consequences, or one who avoids a pain that
              produces no resultant pleasure?" Section 1.10.33 of "de Finibus
              Bonorum et Malorum", written by Cicero in 45 BC "At vero eos et
              accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti quos dolores et
              quas molestias excepturi sint occaecati cupiditate non provident,
              similique sunt in culpa qui officia deserunt mollitia animi, id
              est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio cumque nihil impedit quo minus id quod maxime
              placeat facere possimus, omnis voluptas assumenda est, omnis dolor
              repellendus. Temporibus autem quibusdam et aut officiis debitis
              aut rerum necessitatibus saepe eveniet ut et voluptates
              repudiandae sint et molestiae non recusandae. Itaque earum rerum
              hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
              maiores alias consequatur aut perferendis doloribus asperiores
              repellat."
            </div>
            <div className={Styles.aboutauthor}>
              <p className={Styles.headingauthor}>About the Author</p>
              <div className={Styles.authordetails}>
                <div >
                <Image
                src="/author.png"
                width={250}
                height={250}
                priority={true} 
                alt="Wanuja Ranasinghe - Author &amp; Owner of Programmingster"
                />
                </div>
                
                <p><b><a href="https://www.wanujaranasinghe.me/">Wanuja Ranasinghe</a></b> is a developer, lifelong learner, and a passionate person who is always willing to learn and explore technologiess. He currently reading B.Sc.(Hons.) degree in Information Technology at university of Moratuwa, Sri Lanka.</p>
              </div>
            </div>
            <div className={Styles.commentsection}>comment section</div>
            <div className={Styles.recommendpost}>recommend post</div>
          </div>
        </div>
      </main>
    </div>
  );
}
