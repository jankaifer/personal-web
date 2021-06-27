import CardList from "Components/CardList";

type Props = {
  posts: TPost[];
};

const PostList = ({ posts }: Props) => (
  <CardList cards={posts.map(getCardFromPost)} />
);

const getCardFromPost = (post: TPost): TCard => ({
  title: post.title,
  markdownDescription: post.description,
  date: post.date,
  url: `/blog/post/${post.tag}`,
});

export default PostList;
