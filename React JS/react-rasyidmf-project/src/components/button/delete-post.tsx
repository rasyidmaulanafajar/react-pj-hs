import React, { FC } from "react";
import { useDeletePost } from "../../services/api/delete-post";
import { usePostStore } from "../../services/stores/post";
import { Button, Modal } from "antd";

const DeletePost: FC<{ id: number }> = ({ id }) => {
	const { mutateAsync } = useDeletePost();
	const { setPosts, posts } = usePostStore();

	return (
		<Button
			onClick={() => {
				Modal.confirm({
					title: "Delete Post",
					content: "Are you sure you want to delete this post?",
					onOk: async () => {
						await mutateAsync(id, {
							onSuccess: () => {
								setPosts(posts.filter((post) => post.id !== id));
							},
						});
					},
				});
			}}
		>
			Delete
		</Button>
	);
};

export default DeletePost;
