import { createPost, deletePost, getAllPosts, getPostById } from "./services/post";

interface CreatePostArgs {
  content: string;
}

interface GetPostByIdArgs {
  id: string;
}

interface DeletePostArgs {
  id: string;
}

export const Query = {
  getPosts: async () => {
    return await getAllPosts();
  },
  getPostById: async (_: undefined, { id }: GetPostByIdArgs) => {
    return await getPostById(Number(id));
  }
};

export const Mutation = {
  createPost: async (_: undefined, { content }: CreatePostArgs) => {
    return await createPost(content);
  },
  deletePost: async (_: undefined, { id }: DeletePostArgs) => {
    return await deletePost(Number(id));
  }
};
