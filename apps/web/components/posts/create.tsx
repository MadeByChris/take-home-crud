import { Dispatch, SetStateAction, useState } from "react";

interface CreatePostFormProps {
  createPost: any
  setDisplayForm: Dispatch<SetStateAction<boolean>>
}

const CreatePostForm = ({ createPost, setDisplayForm }: CreatePostFormProps) => {
  const [newPostContent, setNewPostContent] = useState('');

  return (
    <form onSubmit={ () => {
      createPost({ variables: { content: newPostContent } });
      setDisplayForm(false);
    }}>
      <div className="mx-4 sm:mx-6 lg:mx-8 my-4">
        <h1 className="text-2xl font-bold my-4">Create a Post</h1>
        <label className="mb-4" htmlFor="new-post-content"/>
        <textarea
          className="bg-indigo-50 rounded-md p-2 w-1/2"
          name="new-post-content"
          id="new-post-content"
          placeholder="What's on your mind?"
          value={newPostContent}
          onChange={(e) => {
            setNewPostContent(e.target.value);
          }}
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default CreatePostForm;
