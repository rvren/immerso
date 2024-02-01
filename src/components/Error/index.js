import { useRouteError } from "react-router-dom";
import React from "react";
import Section from "../Section";

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);
	return (
		<Section>
			<h1 className='text-7xl font-semibold leading-snug font-manropebold tracking-tight hero-title'>
				Oops!
			</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error?.statusText ?? error?.message}</i>
			</p>
		</Section>
	);
}
