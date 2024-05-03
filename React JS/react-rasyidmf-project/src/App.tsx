import { FC } from "react";
import "./App.css";
import DataList from "./components/data";
import { useGetUsers } from "./services/api/get-users";

const App: FC = () => {
	useGetUsers();

	return (
		<div
			style={{
				maxWidth: "75vw",
				height: "100vh",
				margin: "auto",
				display: "grid",
				placeItems: "center",
			}}
		>
			<DataList />
		</div>
	);
};

export default App;
