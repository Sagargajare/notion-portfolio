import React from "react";
import dynamic from "next/dynamic";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";

const DotRing = dynamic(
  () => import("../src/components/customCursor/DotRing"),
  { ssr: false }
);

type Props = {
  recordMap: any;
};


const Index = ({ recordMap }: Props) => {
  return (
    <>
      <DotRing />
      <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={true} />
    </>
  );
};

export async function getServerSideProps() {
  const notion = new NotionAPI();

  const recordMap = await notion.getPage("b29098a2e49048e781ae0b2f3c92bb75");
  return {
    props: {
      recordMap,
    }, // will be passed to the page component as props
  };
}

export default Index;
