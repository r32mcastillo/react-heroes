import { createBrowserRouter, Navigate } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { ErrorPage } from "../ErrorPage";
import { HeroesPage, DcPage, MarvelPage, HeroPage, SearchPage } from "../heroes";
import { HomePage } from "../heroes/pages/HomePage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <HeroesPage />,
		errorElement: <ErrorPage />,
		children: [
			{index:true,element:<HomePage/>},
			{
				path: "marvel",
				element: <MarvelPage />,
			},
			{
				path: "dc",
				element: <DcPage />,
			},
			{
				path: "search",
				element: <SearchPage />,
			},
			{
				path: "hero/:heroId",
				element: <HeroPage />,
			}
		]
	},
	{
		path: "login",
		element: <LoginPage />,
		errorElement: <ErrorPage />
	}

]
	,{basename:'https://r32mcastillo.github.io/react-heroes/'}
);