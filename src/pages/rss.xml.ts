import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../config';

export async function GET(context: APIContext) {
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site?.toString() ?? SITE.url,
    items: await pagesGlobToRssItems(import.meta.glob('./blog/**/*.{md,mdx}')),
    customData: `<language>en-us</language>`,
  });
}
