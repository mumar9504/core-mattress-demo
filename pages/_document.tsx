import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Core Mattress Demo" />
        <meta name="robots" content="index,follow" />
        <link rel="icon" type="image/png" href="/img/logo/coreMattress_favicon.svg" />

        {/* SEO */}
        <meta
          name="keyword"
          content={"core mattress, core mattress.uz, mern nestjs fullstack"}
        />
        <meta
          name="description"
          content={
            "Buy and sell properties anywhere anytime in South Korea. | " +
            "Покупайте и продавайте недвижимость в любом месте и в любое время в Южной Корее. | " +
            "대한민국 어디서나 언제든지 메트리스를 사고 팔 수 있습니다."
          }
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
