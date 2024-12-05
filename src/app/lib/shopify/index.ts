import { Menu } from "./types";

async function shopifyFetch<T>({
  cache = "force-cache",
  header,
  query,
  tags,
  variables,

}:
{
  cache?: RequestCache;
  header?: HeadersInit;
  query: string;
  tags?: string[];
  variables?: ExtractVariables<T>;

}): Promise<{status: number; }> {
  
}

export async function getMenu(handle: string): Promise<Menu[]> {
  const res = await shopifyFetch<ShopifyMenuOperation>({
    query: getMenusQuery,
    tags: [TAGS.collection],
    variables: { handle },
  });
  return res.body?.data?.menu?.items.map(
    (item: { title: string; url: string }) => ({
      title: item.title,
      path: item.url.replace(domain, "").replace("/collections", "/search").replace("/pages", "")
    })
  );
}
