import { defineCollection, defineConfig, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypeAutolink from "rehype-autolink-headings";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const docs = defineCollection({
  name: "docs",
  pattern: "content/**/**/*.mdx",
  schema: s.object({
    title: s.string(),
    description: s.string().optional(),
    order: s.number().default(0),
    version: s.string().optional(),
    toc: s.boolean().default(true),
    locale: s.string(),
    slug: s.string(),
    body: s.mdx(),
  }),

  mdx: {
    remarkPlugins: [remarkMdxFrontmatter],
    rehypePlugins: [rehypeSlug, [rehypeAutolink, { behavior: "wrap" }]],
  },
});

export default defineConfig({
  root: process.cwd(),
  collections: { docs },
});
