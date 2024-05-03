import React, { FC } from "react";
import { PostDataType } from "../../services/constans";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const EditPost: FC<PostDataType> = (props) => {
	const navigate = useNavigate();
	return (
		<Button
			onClick={() =>
				navigate(`/edit/${props.id}`, {
					state: props,
				})
			}
		>
			Edit
		</Button>
	);
};

export default EditPost;
