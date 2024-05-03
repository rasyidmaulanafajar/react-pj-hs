import { useMutation } from "@tanstack/react-query";
import { PostDataType } from "../constans";
import axios from "axios";

export const useEditPost = () => {
	return useMutation({
		mutationFn: async (payload: PostDataType) => {
			try {
				return await axios
					.put(`/posts/${payload.id}`, payload)
					.then((res) => res.data);
			} catch {
				return {};
			}
		},
	});
};
