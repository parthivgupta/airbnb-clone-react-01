import React from 'react'
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
        <div className="home">
            <Banner />
            <div className="home__section">
                <Card 
                    src="https://cdn.pixabay.com/photo/2020/06/15/02/03/leaves-5300030__340.jpg"
                    title="Room Rental"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                    price="$ 123"/>
                <Card 
                    src="https://cdn.pixabay.com/photo/2020/06/26/17/16/daisies-5343423__340.jpg"
                    title="Room Rental"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                    price="$ 123"/>
                <Card 
                    src="https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988__340.jpg"
                    title="Room Rental"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                    price="$ 123"/>

            </div>
            <div className="home__section">
                <Card 
                    src="https://cdn.pixabay.com/photo/2020/08/25/00/48/mountains-5515324__340.jpg"
                    title="Room Rental"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                    price="$ 123"/>
                <Card 
                    src="https://cdn.pixabay.com/photo/2017/12/08/12/25/berlin-3005717__340.jpg"
                    title="Room Rental"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                    price="$ 123"/>
                <Card 
                    src="https://cdn.pixabay.com/photo/2020/08/22/21/58/boat-5509457__340.jpg"
                    title="Room Rental"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                    price="$ 123"/>
                
            </div>
        </div>
    )
}

export default Home
