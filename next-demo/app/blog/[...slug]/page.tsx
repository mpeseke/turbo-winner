export default function BlogPostsPage({ params }: any) {
  console.log(params);
  const renderSlugList = (slug: any) => {
    return slug.map((item: any, index: string) => {
      return <li key={index}>{item}</li>;
    });
  };
  return (
    <div>
      <h1>The Blog Posts Page</h1>
      <ul>{renderSlugList(params.slug)}</ul>
    </div>
  );
}
