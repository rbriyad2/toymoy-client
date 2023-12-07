import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            <Header></Header>
                <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;