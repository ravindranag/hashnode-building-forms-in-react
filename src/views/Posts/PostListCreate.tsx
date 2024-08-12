import PageContainer from "@/components/common/PageContainer"
import CreatePostForm from "@/components/posts/CreatePostForm"
import PostGrid from "@/components/posts/PostGrid"
import { getAllPosts } from "@/utils/query/posts"
import { Divider, Typography } from "@mui/material"
import { useQuery } from "@tanstack/react-query"

const PostListCreate = () => {
  const { data } = useQuery({
    queryFn: getAllPosts,
    queryKey: getAllPosts.getQueryKey()
  })

  console.log('all: ', data)

  return (
    <PageContainer padding={4} gap={2}>
      <CreatePostForm />
      <Typography variant="overline" color='grey.900'>Latest Posts</Typography>
      <Divider />
      {data && <PostGrid posts={data.data} />}
    </PageContainer>
  )
}

export default PostListCreate
