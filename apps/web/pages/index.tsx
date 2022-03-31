import { useState } from "react";
import { gql, useQuery } from "@apollo/client";

import Table from "../components/posts/table";
import { GetPostsResult } from "../interface/post";
import Spinner from "../components/Spinner";
import { connect } from "http2";

const GET_POSTS = gql`
  query Query {
    getPosts {
      id
      content
    }
  }
`;

// Get post contents and send as a Post request to GraphQL endpoint
const sendPost = () => {
  let content = (document.getElementById("post-content") as HTMLInputElement).value;
  let query = `mutation CreatePost($content: String!) {
    createPost(content: $content) {
      content
    }
  }`;

  // Ensure post contains a value
  if (content === null || content === undefined || content.trim() === "") return;
  fetch('http://localhost:4001/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: {
        content,
      }
    })
  })
    .then(r => r.json()) // Interpret as JSON
    .then(data => {
      console.log('data returned:', data) // Log response for now
    });
}
const Home = () => {
  const { data, loading } = useQuery<GetPostsResult>(GET_POSTS);
  const [displayForm, setForm] = useState(false);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="mx-4 sm:mx-6 lg:mx-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="my-4 text-bold text-2xl">Welcome to Otto! 👋</h1>
          <h1 className="text-xl font-semibold text-gray-900">Posts</h1>
          <p className="mt-2 text-sm text-gray-700">A list of all the posts</p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            onClick={() => {
              setForm(!displayForm);
            }}
          >
            Create Post
          </button>
        </div>
      </div>
      {(data && data.getPosts && <Table posts={data.getPosts} />) || <></>}
      {displayForm &&
        <div id="post-form-container">
          <textarea id="post-content" className="rounded-md border" ></textarea>
          <button onClick={sendPost} className="rounded-md border">Post</button>
        </div>
      }
    </div>
  );
};

export default Home;
