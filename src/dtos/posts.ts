export type PostDto = {
  id: string
  userId: string
  title: string
  body: string
}

export type CreatePostDto = {
  userId: string
  title: string
  body: string
}