import React from 'react';
import BrankLink from '../Brand/BrandLink';
import './Footer.css';

const Footer = () => {
    const links = ['about', 'skincare', 'makeup', 'supplements', 'contact'];

    return (
        <footer className="bg-dark text-light flex justify-between px-4 py-4">
            <BrankLink classes="text-yellow" />

            <div className="flex items-center">
                {links.map(link => (
                    <a href="/" className="ml-4">
                        {link}
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
