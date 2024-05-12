import React from 'react';
import Navbar from '../Navbar';
import BlogForm from '../BlogForm';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-center text-2xl mt-5'>Blog Form</h2>
            <BlogForm></BlogForm>
        </div>
    );
};

export default Home;