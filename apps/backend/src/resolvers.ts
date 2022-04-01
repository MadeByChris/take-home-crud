import { createPost, deletePost, getAllPosts, getPostById } from "./services/post";

export const Query = {
  getPosts: async () => {
    return await getAllPosts();
  },
  //@ts-ignore
  getPostById: async (_, args) => {
    console.log("getting by ID from resovler");
    return await getPostById(args.id);
  }
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
