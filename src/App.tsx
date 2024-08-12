import PostListCreate from "@/views/Posts/PostListCreate"
import { Stack, Typography } from "@mui/material"
import { Toaster } from "sonner"

const App = () => {
  return (
    <Stack
      sx={{
        width: '100%',
        height: '100vh',
        overflowX: 'hidden',
        overflowY: 'auto',
        padding: t => t.spacing(2, 0)
      }}
    >
      <Toaster />
      <Typography variant="h5" textAlign='center'>The Daily</Typography>
      <PostListCreate />
    </Stack>
  )
}

export default App