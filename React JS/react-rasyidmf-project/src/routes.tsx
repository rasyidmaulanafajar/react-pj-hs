import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FormComponent from "./components/form";
import withAddPost from "./components/hocs/withAddPost";
import withEditPost from "./components/hocs/withEditPost";

const AddPostPage = withAddPost(FormComponent);
const EditPostPage = withEditPost(FormComponent);

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/add",
		element: <AddPostPage />,
	},
	{
		path: "/edit/:id",
		element: <EditPostPage />,
	},
]);
