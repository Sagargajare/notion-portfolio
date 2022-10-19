import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

export type BlogPages = {
  title: string;
  pageId: string;
  icon: string;
  category: string;
  url: string;
};

const getPageId = (url: string): string => {
  const urlParts = url.split("-");
  return urlParts[urlParts.length - 1];
};

