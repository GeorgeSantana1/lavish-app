import React from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import "./styles.css";

function HeroSection({
	lightBg,
	topLine,
	lightText,
	lightTextDesc,
	headline,
	description,
	buttonLabel,
	img,
	alt,
	imgStart,
}) {
	return (
		<>
			<div
				className={
					lightBg ? "home__heroSection" : "home__heroSection darkBg"
				}
			>
				<div className="container">
					<div
						className="row home__heroRow"
						style={{
							display: "flex",
							flexDirection:
								imgStart === "start" ? "row-reverse" : "row",
						}}
					>
						<div className="col">
							<div className="home__heroTextWrapper">
								<div className="top__line">{topLine}</div>
								<h1
									className={
										lightText ? "heading" : "heading dark"
									}
								>
									{headline}
								</h1>
								<p
									className={
										lightTextDesc
											? "home__heroSubtitle"
											: "home__heroSubtitle dark"
									}
								>
									{description}
								</p>

								<Link to="/sign-up">
									<Button
										buttonSize="btn__wide"
										buttonColor="blue"
									>
										{buttonLabel}
									</Button>
								</Link>
							</div>
						</div>
						<div className="col">
							<div className="home__heroImgWrapper">
								<img
									src={img}
									alt={alt}
									className="home__heroImg"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default HeroSection;
