export interface Post {
  id: string;
  content: string;
}

export interface GetPostsResult {
  getPosts: Post[];
}

export interface GetPostByIdResult {
  getPostById: Post
}

export interface GetPostByIdVariables {
  getPostId: string;
}

export interface CreatePostVariables {
  content: string;
}
