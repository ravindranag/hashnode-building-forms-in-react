import queryClient from "@/config/queryClient";
import { PostDto } from "@/dtos/posts";
import { createNewPost } from "@/utils/mutations/posts";
import { getAllPosts } from "@/utils/query/posts";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const validationSchema = z.object({
  title: z.string().min(1, "Title is required"),
  body: z.string().min(1, "Body is required"),
});

type FormData = z.infer<typeof validationSchema>;

const CreatePostForm = () => {
  const { register, handleSubmit, formState, reset } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
  });
  const { mutateAsync } = useMutation({
    mutationFn: createNewPost,
  });

  const onSubmit = (data: FormData) => {
    const payload = {
      ...data,
      userId: "1",
    };

    toast.promise(
      mutateAsync(payload).then((res) => {
        // reset the form to accept new submissions
        reset();

        // After a successful response, you can just refresh the getAllPosts query to update the list
        // But this does not work in case of JSONPlaceholder
        // queryClient.invalidateQueries({
        //   queryKey: getAllPosts.getQueryKey()
        // })

        // Adding the newly created post to the post list manually to simulate a refresh
        const prevData: AxiosResponse<PostDto[]> = queryClient.getQueryData(
          getAllPosts.getQueryKey(),
        )!;
        const newData = {
          ...prevData,
          data: [res.data, ...prevData.data],
        };
        queryClient.setQueryData(getAllPosts.getQueryKey(), newData);
        return res;
      }),
      {
        loading: "Creating your post...",
        success: "Post created",
        error: (err) => {
          console.error("error: ", err);
          return err.message;
        },
      },
    );
  };

  return (
    <Stack component="form" gap={2} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register("title")}
        label="Title"
        error={Boolean(formState.errors.title)}
        helperText={formState.errors.title?.message}
      />
      <TextField
        {...register("body")}
        label="Body"
        error={Boolean(formState.errors.body)}
        helperText={formState.errors.body?.message}
        multiline
        minRows={5}
      />
      <Button variant="contained" type="submit" sx={{ alignSelf: "end" }}>
        Post
      </Button>
    </Stack>
  );
};

export default CreatePostForm;
