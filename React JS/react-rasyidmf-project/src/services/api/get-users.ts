import { useQuery } from "@tanstack/react-query";
import { useUserStore } from "../stores/user";
import { User } from "../constans";
import axios from "axios";
import { useEffect } from "react";

export const useGetUsers = () => {
	const { setUsers, users } = useUserStore();

	const result = useQuery<User[]>({
		queryKey: ["user-list"],
		queryFn: async () => {
			if (users.length > 0) return users;
			return await axios.get("/users").then((res) => res.data);
		},
	});

	useEffect(() => {
		if (result.data) setUsers(result.data);
	}, [result.data]);

	return { ...result, userList: users };
};
