import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GetPostsResult, Post } from "../../interface/post";

interface TableProps {
  posts: Post[];
  gql
}

const Table = ({ posts, gql }: TableProps) => {
  const { push } = useRouter();
  const [load, { data, loading }] = useLazyQuery<GetPostsResult>(gql);

  const deletePost = (id: string) => {
    let query = `mutation Mutation($deletePostId: ID!) {
      deletePost(id: $deletePostId)
    }`;
    let deletePostId = id;
    fetch('http://localhost:4001/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: {
          deletePostId,
        }
      })
    }).then(() => {
      load();
    });
  }



  return (
    <div className="mt-8 flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Id
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Content
                  </th>

                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {posts.map((post) => (
                  <tr
                    key={post.id.toString()}
                    className="cursor-pointer"
                  >
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {post.id}
                    </td>
                    <td
                      className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      onClick={() => {
                        push({ pathname: "post/[id]", query: { id: post.id.toString(), content: post.content.toString() } });
                      }}
                    >
                      {post.content}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <button className="text-red-600 hover:text-indigo-900" onClick={() => { deletePost(post.id.toString()) }}>
                        Delete<span className="sr-only">, {post.id}</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
