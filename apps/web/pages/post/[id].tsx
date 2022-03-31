import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

import { GetPostByIdResult, GetPostByIdVariables } from "../../interface/post";
import Spinner from "../../components/Spinner";
import { GET_POST_BY_ID } from "../../components/queries";

const Post = () => {
  const { query, push } = useRouter();
  const postId = String(query.id);

  const { data, loading } = useQuery<GetPostByIdResult, GetPostByIdVariables>(GET_POST_BY_ID, {
    variables: {
      getPostId: postId
    }
  });

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="mx-4 sm:mx-6 lg:mx-8 my-4">
      <h1 className="text-2xl font-bold my-4">{postId}</h1>
      <p className="mb-4">{data.getPostById.content}</p>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
        onClick={() => push('/')}
      >
        Back
      </button>
    </div>
  );
};

export default Post;
