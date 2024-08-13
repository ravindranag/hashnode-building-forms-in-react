import api from "@/config/axios";
import { CreatePostDto, PostDto } from "@/dtos/posts";

export const createNewPost = (body: CreatePostDto) =>
  api.post<PostDto>("/posts", body);
