import { PostDto } from "@/dtos/posts";
import { Stack, styled, Typography } from "@mui/material";

type PostCardProps = {
  post: PostDto;
};

const PostCardRoot = styled(Stack)(({ theme }) => ({
  border: "1px solid",
  borderColor: theme.palette.grey[300],
  padding: theme.spacing(2),
  gap: theme.spacing(1),
  height: "100%",
  ":hover": {
    borderColor: theme.palette.primary.main,
  },
}));

const PostCard = ({ post }: PostCardProps) => {
  return (
    <PostCardRoot>
      <Typography variant="h6">{post.title}</Typography>
      <Typography>{post.body}</Typography>
    </PostCardRoot>
  );
};

export default PostCard;
