import React from "react";

//include images into your bundle
import { Container } from "./container/container";
import { Nav } from "./nav/nav"

//create your first component
const Home = () => {
	return (
		<div>
			<Nav />
			<Container />
		</div>
	);
};

export default Home;