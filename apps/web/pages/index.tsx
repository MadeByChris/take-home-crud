import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";

import Table from "../components/posts/table";
import { CreatePostVariables, GetPostsResult, Post } from "../interface/post";
import Spinner from "../components/Spinner";
import CreatePostForm from "../components/posts/create";
import { CREATE_POST, GET_POSTS } from "../components/queries";


const Home = () => {
  const { data, loading: getPostsLoading } = useQuery<GetPostsResult>(GET_POSTS);
  const [createPost, { loading: createPostLoading }] = useMutation<Post, CreatePostVariables>(CREATE_POST, {
    refetchQueries: [GET_POSTS]
  });

  const [displayForm, setDisplayForm] = useState(false);

  if (getPostsLoading || createPostLoading) {
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
              setDisplayForm(!displayForm);
            }}
          >
            Create Post
          </button>
        </div>
      </div>
      {data.getPosts && <Table posts={data.getPosts} />}
      {displayForm && <CreatePostForm createPost={createPost} setDisplayForm={setDisplayForm}/>}
    </div>
  );
};

export default Home;
