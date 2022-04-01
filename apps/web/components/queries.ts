import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GetPosts {
    getPosts {
      id
      content
    }
  }
`;

export const CREATE_POST = gql`
  mutation CreatePost($content: String!) {
    createPost(content: $content) {
      id
      content
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($deletePostId: ID!) {
    deletePost(id: $deletePostId) {
      id
      content
    }
  }
`;

export const GET_POST_BY_ID = gql`
  query GetPostById($getPostId: ID!) {
    getPostById(id: $getPostId) {
      id
      content
    }
  }
`;