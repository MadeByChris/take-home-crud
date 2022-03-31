import { createPost, getAllPosts } from "./services/post";

interface CreatePostArgs {
  content: string;
}

export const Query = {
  getPosts: async () => {
    return await getAllPosts();
  },
};

export const Mutation = {
  createPost: async (_: undefined, { content }: CreatePostArgs) => {
    return await createPost(content);
  }
};
