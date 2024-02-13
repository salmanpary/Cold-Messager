export async function getBlogs() {
	const res = await fetch(
		`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
			},
			body: JSON.stringify({
				query: `
			{
				blogCollection(order: date_DESC) {
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
			`,
			}),
			next: { tags: ["blog"], revalidate: 3600 },
		}
	);

	const { data } = await res.json();

	return data.blogCollection.items;
}

export async function getBlog(slug: string) {
	const res = await fetch(
		`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
		{
			next: { tags: ["blog"], revalidate: 30 },
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
			},
			body: JSON.stringify({
				query: `
        {
          blogCollection(where: { slug: "${slug}" }) {
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
							metaTags {
                metaTitle
                metaDescription
                canonicalTag
                metaKeywords
                metaRobots
                metaAuthor
                metaTheme
                metaRefresh
              }
            }
          }
        }
      `,
			}),
		}
	);

	const { data } = await res.json();

	return data.blogCollection.items[0];
}
