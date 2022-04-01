import { QueryInfo } from "@apollo/client/core/QueryInfo";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

const Post = () => {
  const router = useRouter();
  const [content, setContent] = useState("");

  const getPost = (postId: string) => {
    console.log("IN GET POST")
    let query = `query GetPostById($getPostById: ID!) {
      getPostById(id: $getPostById) {
        id
        content
      }
    }`;
    let getPostById = postId;
    fetch('http://localhost:4001/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: {
          getPostById,
        }
      })
    })
      .then(r => r.json()) // Interpret as JSON
      .then(returnData => {
        console.log(returnData);
        setContent(returnData.data.getPostById.content);
    });
  }
  useEffect(() => {
    if(router.query.id) {
      getPost(router.query.id.toString());
    } else {
      const id = window.location.pathname.replace("/post/", "");
      getPost(id)
    }
  }, []);

  return (
    <div className="mx-4 sm:mx-6 lg:mx-8 my-4">
      <h1 className="text-2xl font-bold my-4">{router.query.id}</h1>
      <p className="mb-4">{content}</p>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
        onClick={() => router.back()}
      >
        Back
      </button>
    </div>
  );
};

export default Post;
