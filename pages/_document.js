import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        {/* 1. Preconnect para acelerar a resolução DNS do Fontshare */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />

        {/* 2. Fontes do Fontshare (General Sans) */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />

        {/* 3. Script do FontAwesome */}
        <script
          src="https://kit.fontawesome.com/4862f6187b.js"
          crossOrigin="anonymous"
          async
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
