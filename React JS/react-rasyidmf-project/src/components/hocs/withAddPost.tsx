import React, { ComponentProps, ComponentType } from "react";
import { FormDataInterface, FormInterface } from "../form";
import { useAddPost } from "../../services/api/add-post";
import { usePostStore } from "../../services/stores/post";

const withAddPost = (WrappedComponent: ComponentType<FormInterface>) => {
	const NewComponent = (props: ComponentProps<typeof WrappedComponent>) => {
		const { setPosts, posts } = usePostStore();
		const { mutateAsync } = useAddPost((_, variables) => {
			setPosts([
				...posts,
				{
					userId: variables.userId,
					id: posts.length + 1,
					title: variables.title,
					body: variables.body,
				},
			]);
		});
		const onSubmit = async (values: FormDataInterface) => {
			await mutateAsync(values);
		};

		return <WrappedComponent {...props} onSubmit={onSubmit} />;
	};

	return NewComponent;
};

export default withAddPost;
