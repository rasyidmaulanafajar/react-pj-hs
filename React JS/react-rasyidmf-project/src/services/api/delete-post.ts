import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useDeletePost = (
	onSuccess?: (data: any, variables: any, context: any) => void
) => {
	return useMutation({
		mutationFn: async (id: number) => {
			return await axios.delete(`/posts/${id}`).then((res) => res.data);
		},
		onSuccess: onSuccess,
	});
};
