import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Pricing from "../../components/Pricing/Pricing";

function HomePage() {
	return (
		<>
			<HeroSection {...homeObjOne} />
			<HeroSection {...homeObjThree} />
			<HeroSection {...homeObjTwo} />
			<Pricing />
			<HeroSection {...homeObjFour} />
		</>
	);
}

export default HomePage;
