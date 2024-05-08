import React from 'react';
import image1 from './assets/images/image1.jpg';
import './App.css';


export default function App() {
    return (
        <div className='container'>
            <h2>Hello world</h2>
            <img
                alt='Container image'
                src={image1}
                className='image' />
        </div>
    )
}