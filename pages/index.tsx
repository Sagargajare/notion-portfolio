import React from "react";
import dynamic from "next/dynamic";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";
const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
);


type Props = {
  recordMap: any;
};

const Index = ({ recordMap }: Props) => {
  return (
    <>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        components={{
          Collection,
        }}
      />
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
