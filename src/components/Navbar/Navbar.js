import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../Button/Button";
import { IconContext } from "react-icons/lib";
import "./styles.css";

function Navbar() {
	const [click, setClick] = useState(false);

	const [button, setButton] = useState(true);

	const closeMobileMenu = () => setClick(false);

	const handleClick = () => setClick(!click);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener("resize", showButton);
	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<div className="navbar">
					<div className="navbar__container container">
						<Link
							className="navbar__logo"
							to="/"
							onClick={closeMobileMenu}
						>
							<MdFingerprint className="navbar__icon" />
							LAVISH
						</Link>
						<div className="menu__icon" onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</div>
						<ul
							className={
								click ? "navbar__menu active" : "navbar__menu"
							}
						>
							<li className="navbar__item">
								<Link
									className="navbar__links"
									to="/"
									onClick={closeMobileMenu}
								>
									Home
								</Link>
							</li>
							<li className="navbar__item">
								<Link
									className="navbar__links"
									to="/services"
									onClick={closeMobileMenu}
								>
									Services
								</Link>
							</li>
							<li className="navbar__item">
								<Link
									className="navbar__links"
									to="/products"
									onClick={closeMobileMenu}
								>
									Products
								</Link>
							</li>
							<li className="navbar__btn">
								{button ? (
									<Link
										className="btn__link"
										to="/sign-up"
										onClick={closeMobileMenu}
									>
										<Button buttonStyle="btn__outline">
											SIGN UP
										</Button>
									</Link>
								) : (
									<Link
										className="btn__link"
										to="/sign-up"
										onClick={closeMobileMenu}
									>
										<Button
											buttonStyle="btn__outline"
											buttonSize="btn__mobile"
										>
											SIGN UP
										</Button>
									</Link>
								)}
							</li>
						</ul>
					</div>
				</div>
			</IconContext.Provider>
		</>
	);
}

export default Navbar;
