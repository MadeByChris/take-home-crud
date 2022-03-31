import { createPost, getAllPosts } from "./services/post";

export const Query = {
  getPosts: async () => {
    return await getAllPosts();
  },
};

export const Mutation = {
  // TODO: remove ts-ignore
  //@ts-ignore
  createPost: async (_, args) => {
    return await createPost(args.content);
  }
};
