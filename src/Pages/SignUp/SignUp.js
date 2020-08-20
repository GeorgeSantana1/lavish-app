import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import { homeObjOne, homeObjTwo } from "./Data";
import Pricing from "../../components/Pricing/Pricing";

function SignUp() {
	return (
		<>
			<HeroSection {...homeObjOne} />
			<HeroSection {...homeObjTwo} />
		</>
	);
}

export default SignUp;
