import { useQuery } from "@tanstack/react-query";
import { usePostStore } from "../stores/post";
import { Post } from "../constans";
import axios from "axios";
import { useEffect } from "react";

export const useGetPosts = () => {
	const { setPosts, posts } = usePostStore();
	const result = useQuery<Post[]>({
		queryKey: ["post-list"],
		queryFn: async () => {
			if (posts.length == 0)
				return await axios.get("/posts").then((res) => res.data);
			else return posts;
		},
	});

	useEffect(() => {
		if (result.data) setPosts(result.data);
	}, [result.data]);

	return {
		...result,
		postList: posts,
	};
};
