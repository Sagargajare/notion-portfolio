import Head from "next/head";
import React from "react";

const PageHead = () => {
  const description =
    "Sagar Gajare: Fullstack Developer | Expert in Frontend Development with Proficiency in ReactJS, Next.js, TypeScript, JavaScript, CSS, Tailwind, and Chakra UI. Skilled in Backend Development using Django, Python, Express.js, and More.";
  const imageUrl =
    "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F47f2ec9b-50aa-4bae-921b-d277a0fc9bbb%2F17a713b0-b708-4b80-90fd-9a4023875183%2FDP.jpeg?table=block&id=c928c412-e7c7-4524-909a-2e30de8124c5&cache=v2";
  const title = "Sagar Gajare | Fullstack Developer Portfolio";
  return (
    <Head>
      {/* common tags */}
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="robots" content="index,follow" />
      <meta property="og:type" content="website" />

      {/* title */}
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />

      {/* description */}
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />

      {/* Image */}
      <>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={imageUrl} />
        <meta property="og:image" content={imageUrl} />
      </>
    </Head>
  );
};

export default PageHead;
