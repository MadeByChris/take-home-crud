const Post = () => {
  return (
    <div className="mx-4 sm:mx-6 lg:mx-8 my-4">
      <h1 className="text-2xl font-bold my-4">ID goes here!</h1>
      <p className="mb-4">Content goes here!</p>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
      >
        Back
      </button>
    </div>
  );
};

export default Post;
