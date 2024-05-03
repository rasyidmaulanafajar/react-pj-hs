import { Button, Form, Input, Select } from "antd";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../services/stores/user";
import { useGetUsers } from "../../services/api/get-users";

const { Option } = Select;

export interface FormDataInterface {
	id?: number;
	userId: number;
	title: string;
	body: string;
}

export interface FormInterface {
	onSubmit?: (values: FormDataInterface) => any;
	initialValues?: object;
}

const FormComponent: FC<FormInterface> = ({ onSubmit, initialValues }) => {
	useGetUsers();
	const navigate = useNavigate();
	const onFinish = async (values: FormDataInterface) => {
		if (onSubmit) await onSubmit(values);
		navigate("/");
	};

	return (
		<Form onFinish={onFinish} initialValues={initialValues}>
			<Form.Item label='User' name='userId'>
				<Select>
					{useUserStore.getState().users.map((user) => (
						<Option key={user.id} value={user.id}>
							{user.name}
						</Option>
					))}
				</Select>
			</Form.Item>
			<Form.Item label='Title' name='title'>
				<Input />
			</Form.Item>
			<Form.Item label='Body' name='body'>
				<Input />
			</Form.Item>

			<Button htmlType='submit'>Submit</Button>
		</Form>
	);
};

export default FormComponent;
