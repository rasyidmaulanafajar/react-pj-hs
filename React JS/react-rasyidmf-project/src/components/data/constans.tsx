import { TableProps } from "antd";
import { Post, PostDataType } from "../../services/constans";
import { useUserStore } from "../../services/stores/user";
import DeletePost from "../button/delete-post";
import EditPost from "../button/edit-post";

export const columns: TableProps<PostDataType>["columns"] = [
	{
		title: <th>User Name</th>,
		dataIndex: "userId",
		key: "userId",
		render: (value: number) => {
			return (
				<div>
					{
						useUserStore.getState().users.find((user) => user.id === value)
							?.name
					}
				</div>
			);
		},
	},
	{
		title: <th>Title</th>,
		dataIndex: "title",
		key: "title",
	},
	{
		title: <th>Body</th>,
		dataIndex: "body",
		key: "body",
	},
	{
		title: <th>Action</th>,
		key: "action",
		render: (value: PostDataType) => {
			return (
				<div
					style={{
						display: "flex",
						gap: "8px",
					}}
				>
					<DeletePost id={value.id} />
					<EditPost {...value} />
				</div>
			);
		},
	},
];
