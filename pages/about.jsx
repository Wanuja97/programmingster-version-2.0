import React from 'react'
import Head from 'next/head'
import Styles from '../styles/AboutPage.module.scss'
export default function About() {
  return (
    <div>
        <Head>
        <title>About - Programmingster</title>
        <meta name="description" content="Welcome to programmingster.Sharing the knowledge is the best thing to learn" />
        <meta name="title" content="About - Programmingster"/>
         {/* Open Graph / Facebook  */}
         <meta property="og:type" content="website" />
        <meta property="og:url" content="https://programmingster.com/about/" />
        <meta property="og:title" content="About - Programmingster" />
        <meta
          property="og:description"
          content="Welcome to Programmingster. Sharing knowledge is the best thing to learn."
        />
        {/* Twitter  */}
        <meta property="twitter:url" content="https://programmingster.com/about" />
        <meta property="twitter:title" content="About - Programmingster" />
        <meta
          property="twitter:description"
          content="Welcome to Programmingster. Sharing knowledge is the best thing to learn."
        />
        <link rel="canonical" href="https://programmingster.com/about/" />
      </Head>
      <main className='commonpagestyles'>
      <div className={Styles.aboutcontainer}>
          <div className={Styles.heading}>
            <h1 className="gradientcolor">About Programmingster</h1>
          </div>
          <div className={Styles.content}>
            <p>
            Welcome To Programmingster!!! <br /><br /> Programmingster is a Professional Blog Platform.
            The purpose of creating this website was my passion for programming and, sharing my knowledge about information technology with people who are interested in and searching for it all over the world. I hope you enjoy Programmingster as much as I enjoy offering them to you. <br />
            I will keep posting more important things on the Programmingster for all of you. Please give your support and love. <br />
            <br /> Thanks for visiting Programmingster. <br /><br />
            <a href="https://www.wanujaranasinghe.me/">Wanuja Ranasinghe</a> <br />
            - Author of Programmingster
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
