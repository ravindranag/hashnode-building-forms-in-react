import PostCard from "@/components/posts/PostCard";
import { PostDto } from "@/dtos/posts";
import { Grid } from "@mui/material";

type PostGridProps = {
  posts: PostDto[];
};

const PostGrid = ({ posts }: PostGridProps) => {
  return (
    <Grid container spacing={2}>
      {posts.map((post) => (
        <Grid item xs={12} md={6}>
          <PostCard key={post.id} post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PostGrid;
