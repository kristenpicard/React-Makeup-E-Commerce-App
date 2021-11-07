import React from 'react';
// import './BrankLink.css';
import { Link } from 'react-router-dom';

const BrankLink = ({ classes }) => (
    <>
        <Link className={`text-2xl font-krona ${classes}`} to="/">
            Welly
        </Link>
    </>
);

export default BrankLink;
