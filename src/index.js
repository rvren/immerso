import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes as AppRoutes } from "./utils/Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter(AppRoutes);

let updatedCount = JSON.parse(localStorage.getItem("refreshCount"));
localStorage.setItem("refreshCount", updatedCount === 2 ? 1 : 2);

root.render(
	<React.StrictMode>
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
