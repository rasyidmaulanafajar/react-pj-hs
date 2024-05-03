import React, { FC } from "react";
import { useGetPosts } from "../../services/api/get-posts";
import { Button, Table } from "antd";
import { columns } from "./constans";
import { useNavigate } from "react-router-dom";

const DataList: FC = () => {
	const { postList } = useGetPosts();
	const navigate = useNavigate();

	return (
		<>
			<Button onClick={() => navigate("/add")}>Add Post</Button>
			<br />
			<Table
				columns={columns}
				dataSource={postList?.map((post) => ({
					title: post.title,
					body: post.body,
					userId: post.userId,
					id: post.id,
					action: post,
				}))}
			/>
		</>
	);
};

export default DataList;
