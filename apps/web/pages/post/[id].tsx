import { QueryInfo } from "@apollo/client/core/QueryInfo";
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter();

  return (
    <div className="mx-4 sm:mx-6 lg:mx-8 my-4">
      <h1 className="text-2xl font-bold my-4">{router.query.id}</h1>
      <p className="mb-4">{router.query.content}</p>
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
