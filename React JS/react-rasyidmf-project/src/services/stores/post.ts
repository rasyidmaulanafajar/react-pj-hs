import { create } from "zustand";
import { PostStore, Post } from "../constans";

export const usePostStore = create<PostStore>((set) => ({
	posts: [],
	setPosts: (payload: Post[]) => set({ posts: payload }),
}));
