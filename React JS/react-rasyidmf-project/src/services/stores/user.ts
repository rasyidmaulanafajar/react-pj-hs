import { create } from "zustand";
import { User, UserStore } from "../constans";

export const useUserStore = create<UserStore>((set) => ({
	users: [],
	setUsers: (payload: User[]) => set({ users: payload }),
}));
