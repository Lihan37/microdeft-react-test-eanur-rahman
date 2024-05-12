import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-700 p-4">
            <ul className="flex justify-center gap-5">
                <li>
                    <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                </li>
                <li>
                    <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
                </li>
                <li>
                    <Link to="/register" className="text-white hover:text-gray-300">Register</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
