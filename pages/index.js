import FeaturedPosts from "../components/hope-page/FeaturedPosts";
import Hero from "../components/hope-page/Hero";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>Welcome to my blog</title>
        <meta
          name="description"
          contet="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getFeaturedPosts();
  return {
    props: { posts },
    revalidate: 600,
  };
}

export default HomePage;
