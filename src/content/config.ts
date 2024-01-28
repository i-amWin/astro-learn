import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: z.string(),
      // categories: z.array(z.string()),
      date: z.string(),
      // featured: z.boolean(),
      image: image(),
      title: z.string(),
    }),
});

export const collections = {
  posts: postsCollection,
};
