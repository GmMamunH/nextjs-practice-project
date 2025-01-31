import { Metadata } from "next";

const getPost = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
};
// Dynamic Metadata
export async function generateMetadata({ params }: { params: { postId: string } }): Promise<Metadata> {
  const post = await getPost(params.postId);
  return {
    title: `${post.title} - My Blog`,
    description: post.body.slice(0, 150) + "...", // Short preview
  };
}

const PostDetailsPage = async ({ params }: { params: { postId: string } }) => {
  const post = await getPost(params.postId);
  return (
    <>
    
      <div className="p-6 text-lg">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="mt-4">{post.body}</p>
      </div>
    </>
  );
};

export default PostDetailsPage;
