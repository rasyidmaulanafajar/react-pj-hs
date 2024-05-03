export interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

// The post interface will be appear in data list
export interface PostDataType {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}

// Store list

export type PostStore = {
	posts: Post[];
	setPosts: (payload: Post[]) => void;
};

export type UserStore = {
	users: User[];
	setUsers: (payload: User[]) => void;
};
