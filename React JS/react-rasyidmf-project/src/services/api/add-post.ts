import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { FormDataInterface } from "../../components/form";

export const useAddPost = (
	onSuccess?: (data: any, variables: FormDataInterface, context: any) => void
) => {
	return useMutation({
		mutationFn: async (payload: FormDataInterface) => {
			return await axios.post("/posts", payload).then((res) => res.data);
		},
		onSuccess: onSuccess,
	});
};
