import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/HomePage/HomePage";
import Footer from "./Pages/Footer/Footer";
import Services from "./Pages/Services/Services";
import Products from "./Pages/Products/Products";
import SignUp from "./Pages/SignUp/SignUp";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/services" component={Services} />
				<Route path="/products" component={Products} />
				<Route path="/sign-up" component={SignUp} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
