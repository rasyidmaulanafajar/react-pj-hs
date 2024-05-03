import React, { ComponentProps, ComponentType } from "react";
import { FormDataInterface, FormInterface } from "../form";
import { usePostStore } from "../../services/stores/post";
import { useLocation } from "react-router-dom";
import { PostDataType } from "../../services/constans";
import { useEditPost } from "../../services/api/edit-post";

const withEditPost = (WrappedComponent: ComponentType<FormInterface>) => {
	const NewComponent = (props: ComponentProps<typeof WrappedComponent>) => {
		const { setPosts, posts } = usePostStore();
		const location = useLocation();
		let state = location.state as PostDataType;

		const { mutateAsync } = useEditPost();
		const onSubmit = async (values: FormDataInterface) => {
			await mutateAsync(
				{
					...values,
					id: state.id,
				},
				{
					onSuccess: (_, variables) => {
						setPosts([
							...posts.map((post) =>
								post.id == state.id
									? {
											userId: variables.userId,
											id: state.id,
											title: variables.title,
											body: variables.body,
									  }
									: post
							),
						]);
					},
				}
			);
		};

		return (
			<WrappedComponent {...props} initialValues={state} onSubmit={onSubmit} />
		);
	};

	return NewComponent;
};

export default withEditPost;
