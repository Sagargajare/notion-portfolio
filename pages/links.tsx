import Image from "next/image";
import Link from "next/link";
import { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";
import { getRecordDataForPage, queryDatabase } from "../src/api/query-database";

const Home = ({ recordMap }: { recordMap: ExtendedRecordMap }) => {
  // TODO: Show an error comopnent or link to a error page.
  if (recordMap === null) {
    return "Oh shit, record map is undefined";
  }

  return (
    <div>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={true}
        // showTableOfContents={true}
        components={{
          nextImage: Image,
          nextLink: Link,
        }}
        disableHeader={true}
      />
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const rootPageId = `${process.env.NOTION_PAGE_ID}`;
  const recordMap = await getRecordDataForPage(rootPageId);

  return {
    props: {
      recordMap: recordMap ? recordMap : null,
    },
  };
}
