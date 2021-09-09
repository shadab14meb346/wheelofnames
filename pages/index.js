import React from "react";
import Head from "next/head";

import NavBar from "../src/components/NavBar";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Wheels of Names</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />
		</div>
	);
}
