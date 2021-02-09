
export interface BlogPost {
  slug: string,
  title: string,
  content: string,
}

export const ALL_BLOG_POSTS: BlogPost[] = [
  {slug: 'foo', title: 'Test post', content: `
  #foo
  - bar
  - baz
  `}
];