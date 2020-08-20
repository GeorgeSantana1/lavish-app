import React from "react";
import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import { Button } from "../Button/Button";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import "./styles.css";

function Pricing() {
	return (
		<>
			<IconContext.Provider value={{ color: "#fff", size: 64 }}>
				<div className="pricing">
					<div className="pricing__wrapper">
						<h1 className="pricing__heading">Pricing</h1>
						<div className="pricing__container">
							<Link
								to="/sign-up"
								className="pricing__containerCard"
							>
								<div className="pricing__containerCardInfo">
									<div className="icon">
										<FaFire />
									</div>
									<h3>Starter</h3>
									<h4>$8.99</h4>
									<p>per month</p>
									<ul className="pricing__containerFeatures">
										<li>100 Transactions</li>
										<li>2% Cash Back</li>
										<li>$10,000 Limit</li>
									</ul>
									<Button
										buttonSize="btn__wide"
										buttonColor="primary"
									>
										Choose Plan
									</Button>
								</div>
							</Link>
							<Link
								to="/sign-up"
								className="pricing__containerCard"
							>
								<div className="pricing__containerCardInfo">
									<div className="icon">
										<BsXDiamondFill />
									</div>
									<h3>Gold</h3>
									<h4>$29.99</h4>
									<p>per month</p>
									<ul className="pricing__containerFeatures">
										<li>1000 Transactions</li>
										<li>3.5% Cash Back</li>
										<li>$100,000 Limit</li>
									</ul>
									<Button
										buttonSize="btn__wide"
										buttonColor="blue"
									>
										Choose Plan
									</Button>
								</div>
							</Link>
							<Link
								to="/sign-up"
								className="pricing__containerCard"
							>
								<div className="pricing__containerCardInfo">
									<div className="icon">
										<GiCrystalize />
									</div>
									<h3>Diamong</h3>
									<h4>$99.99</h4>
									<p>per month</p>
									<ul className="pricing__containerFeatures">
										<li>Unlimited Transactions</li>
										<li>5% Cash Back</li>
										<li>Unlimited Spending</li>
									</ul>
									<Button
										buttonSize="btn__wide"
										buttonColor="primary"
									>
										Choose Plan
									</Button>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</IconContext.Provider>
		</>
	);
}

export default Pricing;
