export const GET_BLOGS_QUERY = `
{
  blogCollection {
    items {
      slug
      headImg {
        url
      }
      authorName
      authorImage {
        url
      }
      title
      date
      genre
      smallDescription
    }
  }
}
`;

export const GET_BLOG_BY_SlUG_QUERY = `
{
  blogCollection(where: { slug: $slug }) {
    items {
      headImg {
        url
      }
      authorName
      authorImage {
        url
      }
      title
      date
      blogContent {
        json
      }
    }
  }
}
`;
