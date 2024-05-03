import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import axios from "axios";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Set axios settings
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>
);
