import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="Programmingster" />
        <meta
          name="description"
          content="Welcome to Programmingster. Sharing knowledge is the best thing to learn."
        />
        <meta
          name="keywords"
          content="HTML, Python, SQL, JavaScript, How to, PHP, Java, Bootstrap, CSS, MySQL, Software Engineering methods, React, Angular, Git, Data Science, Code Game, Tutorials, Programming, Web Development, Flutter, Learning, Lessons, Source code, Demos, Tips"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Wanuja Ranasinghe" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Animate css */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
