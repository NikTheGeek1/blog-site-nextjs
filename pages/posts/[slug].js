import PostContent from "../../components/posts/post-detail/PostContent";
import { getAllPosts, getPostsData } from "../../lib/posts-util";
import Head from 'next/head';

function PostDetailPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta
          name="description"
          contet={post.excerpt}
        />
      </Head>
      <PostContent post={post} />
    </>
  );
}

export function getStaticProps({ params }) {
  const { slug } = params;
  const postData = getPostsData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const allData = getAllPosts();
  const allPaths = allData.map((post) => ({ params: { slug: post.slug } }));

  return {
    paths: allPaths,
    fallback: false,
  };
}

export default PostDetailPage;
