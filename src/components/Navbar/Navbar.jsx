import React from 'react';
import BrankLink from '../Brand/BrandLink';
import CartIcon from '../Icons/CartIcon';
import HeartIcon from '../Icons/HeartIcon';
import NavLinks from '../NavLinks/NavLinks';
import './Navbar.css';

const Navbar = () => (
    <nav className="container mx-auto font-krona flex justify-between py-3">
        <BrankLink />

        <div className="flex items-end">
            <NavLinks />

            <div className="flex">
                <HeartIcon />
                <CartIcon />
            </div>
        </div>
    </nav>
);

export default Navbar;
