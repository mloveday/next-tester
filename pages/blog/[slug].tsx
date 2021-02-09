import {Page} from "../../components/furniture/Page";
import {BlogPost, ALL_BLOG_POSTS} from "../../static/BlogPosts.static";
import {GetStaticPaths, GetStaticProps} from "next";
import ReactMarkdown from 'react-markdown';

type Props = {post: BlogPost};
type Params = {slug: string};

const Blog: React.FC<Props> = props => (<Page><>
  <h2>{props.post.title}</h2>
  <ReactMarkdown>{props.post.content}</ReactMarkdown>
</></Page>)

export const getStaticPaths: GetStaticPaths<Params> = async () => ({
  paths: ALL_BLOG_POSTS.map(post => ({params: {slug: post.slug}})),
  fallback: false,
})

export const getStaticProps: GetStaticProps<Props, Params> = async context => {
  const post = ALL_BLOG_POSTS.find(p => p.slug === context.params.slug);
  if (post === undefined) return {notFound: true};
  return ({props: {post}});
};

export default Blog;