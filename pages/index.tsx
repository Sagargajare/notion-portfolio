import React from "react";
import dynamic from "next/dynamic";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";
import Navbar from "../components/Navbar";
import { PageBlock } from "notion-types";
import { getPageTableOfContents } from "notion-utils";
import PageHead from "../components/PagrHead";
const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
);

const Modal = dynamic(
  () => import("react-notion-x/build/third-party/modal").then((m) => m.Modal),
  {
    ssr: false,
  }
);

type Props = {
  recordMap: any;
};

const Index = ({ recordMap }: Props) => {
  const keys = Object.keys(recordMap?.block || {});
  const block = recordMap?.block?.[keys[0]]?.value;
  const tableOfContain = getPageTableOfContents(block as PageBlock, recordMap);
  return (
    <>
      <PageHead />
      <Navbar
        navItems={[...tableOfContain.filter((dt) => dt.indentLevel === 0)]}
      />
      <NotionRenderer
        recordMap={recordMap}
        disableHeader
        fullPage={true}
        components={{
          Collection,
          Modal,
        }}
      />
    </>
  );
};

export async function getServerSideProps() {
  const notion = new NotionAPI();

  const recordMap = await notion.getPage(`${process.env.NOTION_PAGE_ID}`);
  return {
    props: {
      recordMap,
    }, // will be passed to the page component as props
  };
}

export default Index;
