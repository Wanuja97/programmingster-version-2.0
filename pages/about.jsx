import React from 'react'
import Head from 'next/head'
import Styles from '../styles/AboutPage.module.scss'
export default function About() {
  return (
    <div>
        <Head>
        <title>About</title>
        <meta name="description" content="Welcome to programmingster.Sharing the knowledge is the best thing to learn" />
        
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
            <br /> Thanks For Visiting Programmingster. <br /><br />
            <a href="https://www.wanujaranasinghe.me/">Wanuja Ranasinghe</a> <br />
            - Author of Programmingster
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
