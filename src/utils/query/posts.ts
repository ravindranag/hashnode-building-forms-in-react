import api from "@/config/axios";
import { PostDto } from "@/dtos/posts";

export const getAllPosts = () => api.get<PostDto[]>("/posts");
getAllPosts.getQueryKey = () => ["posts", "all"];

export const getSinglePost = (id: string) => api.get<PostDto>(`/posts/${id}`);
getSinglePost.getQueryKey = (id: string) => ["posts", id];
