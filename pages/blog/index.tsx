import {Page} from "../../components/furniture/Page";
import {ALL_BLOG_POSTS} from "../../static/BlogPosts.static";

const Index: React.FC = () => {
  return (<Page><>
    <h2>Some recent blog posts</h2>
    <ul>
      {ALL_BLOG_POSTS.map(blogPost => <li key={blogPost.slug}><a href={`/blog/${blogPost.slug}`}>{blogPost.title}</a>
      </li>)}
    </ul>
  </>
  </Page>)
}

export default Index;