export interface Post {
  id: String;
  content: String;
}

export interface GetPostsResult {
  getPosts: Post[];
}

// export interface DeletePost {
//   id: number;
// }