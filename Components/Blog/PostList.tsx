import Card from "Components/Card";

type Props = {
  posts: TPost[];
};
const PostList = ({ posts }: Props) => {
  return (
    <div>
      {posts.map((post) => (
        <Card key={post.tag} card={getCardFromPost(post)} />
      ))}
    </div>
  );
};

const getCardFromPost = (post: TPost): TCard => ({
  title: post.title,
  date: post.date,
  url: `/blog/post/${post.tag}`,
});

export default PostList;
