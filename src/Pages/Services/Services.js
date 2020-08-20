import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import { homeObjTwo, homeObjThree } from "./Data";
import Pricing from "../../components/Pricing/Pricing";

function Services() {
	return (
		<>
			<Pricing />
			<HeroSection {...homeObjTwo} />
			<HeroSection {...homeObjThree} />
		</>
	);
}

export default Services;
