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
  getPostById: async (parent: undefined, { id }: GetPostByIdArgs) => {
    return await getPostById(Number(id));
  }
};

export const Mutation = {
  createPost: async (parent: undefined, { content }: CreatePostArgs) => {
    return await createPost(content);
  },
  deletePost: async (parent: undefined, { id }: DeletePostArgs) => {
    return await deletePost(Number(id));
  }
};
