import React from 'react';
import { Button } from "@material-ui/core";
import './SearchPage.css';
import SearchResult from './SearchResult';
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 Stays : 26 august to 30 august : 2 guest</p>
                <h1>Stays Nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
                img="https://cdn.pixabay.com/photo/2020/06/26/17/16/daisies-5343423__340.jpg"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.73}
                price="£30 / night"
                total="£117 total"
            />

            <SearchResult
                img="https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988__340.jpg"
                location="Private room in center of London"
                title="Independant luxury studio apartment"
                description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
                star={4.3}
                price="£40 / night"
                total="£157 total"
            />

            <SearchResult
                img="https://cdn.pixabay.com/photo/2020/04/20/09/42/seagulls-5067489__340.jpg"
                location="Private room in center of London"
                title="London Studio Apartments"
                description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
                star={3.8}
                price="£35 / night"
                total="£207 total"
            />
            <SearchResult
                img="https://cdn.pixabay.com/photo/2020/08/22/21/58/boat-5509457__340.jpg"
                location="Private room in center of London"
                title="30 mins to Oxford Street, Excel London"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.1}
                price="£55 / night"
                total="£320 total"
            />
            <SearchResult
                img="https://cdn.pixabay.com/photo/2017/12/08/12/25/berlin-3005717__340.jpg"
                location="Private room in center of London"
                title="Spacious Peaceful Modern Bedroom"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
                star={5.0}
                price="£60 / night"
                total="£450 total"
            />
            <SearchResult
                img="https://cdn.pixabay.com/photo/2020/08/27/14/55/adler-5522202__340.jpg"
                location="Private room in center of London"
                title="The Blue Room In London"
                description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
                star={4.23}
                price="£65 / night"
                total="£480 total"
            />
            <SearchResult
                img="https://cdn.pixabay.com/photo/2019/07/14/08/08/night-4336403__340.jpg"
                location="Private room in center of London"
                title="5 Star Luxury Apartment"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={3.85}
                price="£90 / night"
                total="£650 total"
            />
        </div>
    )
}

export default SearchPage;
