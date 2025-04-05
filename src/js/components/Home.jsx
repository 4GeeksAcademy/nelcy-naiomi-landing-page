import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Container } from "./container/container";
import { Nav } from "./nav/nav"
import { Footer } from "./footer/footer"

//create your first component
const Home = () => {
	return (
		<div>
			<Nav />
			<Container />
			<Footer />
		</div>
	);
};

export default Home;