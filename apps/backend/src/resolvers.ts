import { createPost, deletePost, getAllPosts, getPostById } from "./services/post";

export const Query = {
  getPosts: async () => {
    return await getAllPosts();
  },
  getPostById: async (_ : any, args : any) => {
    return await getPostById(args.id);
  }
};

export const Mutation = {
  createPost: async (_ : any, args : any) => {
    return await createPost(args.content);
  },
  deletePost: async (_ : any, args : any) => {
    return await deletePost(args.id);
  }
};
