import { createPost, deletePost, getAllPosts } from "./services/post";

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
  },
  //@ts-ignore
  deletePost: async (_, args) => {
    return await deletePost(args.id);
  }
};
