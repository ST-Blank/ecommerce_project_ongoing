import React from 'react'
import './Home.css'
import banner_image from './banner_images/image_1.jpg';
import watch from './product_images/watch.jpg';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src={banner_image} alt="banner"/>

<div className="home_row">
    {/*product */}
    <Product
    id="333"
    title="watch 1"
    price={3000}
    image={watch}
    rating={5}
    />
    {/*product */}
    {/*product */}
    <Product
    title="watch 2"
    id="444"
    price={3500}
    image={watch}
    rating={4}
    />
</div>

<div className="home_row">
    {/*product */}
    {/*product */}
    <Product
    id="444"
    title="watch 3"
    price={4000}
    image={watch}
    rating={1}
    />
    {/*product */}
    {/*product */}
    <Product
    id="555"
    title="watch 4"
    price={2500}
    image={watch}
    rating={2}
    />
    {/*product */}
    {/*product */}
    <Product
    id="666"
    title="watch 5"
    price={1000}
    image={watch}
    rating={3}
    />
</div>

<div className="home_row">
    {/*product */}
    {/*product */}
    <Product
    title="watch 6"
    price={5000}
    image={watch}
    rating={4}
    />
</div>

        </div>
</div>
    )
}

export default Home
