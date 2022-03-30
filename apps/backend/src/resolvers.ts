import { getAllPosts } from "./services/post";

export const Query = {
  getPosts: async () => {
    return await getAllPosts();
  },
};

export const Mutation = {};
