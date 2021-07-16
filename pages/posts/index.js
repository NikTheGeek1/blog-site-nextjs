import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/posts-util";
import Head from 'next/head';

function AllPostsPage({ posts }) {
  return (
    <>
      <Head>
        <title>All posts</title>
        <meta name="description" contet="A list of all programming tutorials and courses" />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts },
    revalidate: 600,
  };
}

export default AllPostsPage;
