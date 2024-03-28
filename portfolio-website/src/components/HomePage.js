import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import HomeMainSection from './HomeMainSection';
import ContactPage from './ContactPage';
// import Footer from './Footer';


const Homepage=()=>{
	return (
		<div className="homepage">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route exact path="/" element={<HomeMainSection />} />
                    <Route path="/contact" element={<ContactPage />} />
				</Routes>
				{/* <Footer /> */}
			</BrowserRouter>
		</div>
	);
};
export default Homepage;