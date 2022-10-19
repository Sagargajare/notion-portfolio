import { Client } from "@notionhq/client";
import { NotionAPI } from "notion-client";

const NOTION_API_KEY = process.env.NOTION_API_KEY ?? "";

// Instantiate notion clients.
export const notionApi = new NotionAPI();
export const notion = new Client({ auth: NOTION_API_KEY });
