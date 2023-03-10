import React from 'react';
import Header from '../compoents/shared/Header/Header';
import Footer from '../compoents/shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
	return (
		<div>
			<Header></Header>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Main;