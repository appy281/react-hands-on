import React from "react";
import ReactDOM from "react-dom";
import './app.css'
import HaldiramsImg from './resources/haldirams.jpeg';
import KojiImg from './resources/whispering-bamboo.jpg';
import WhisperingBambooImg from './resources/koji.jpg';
import FoodAppLogo from './resources/food-app-logo.png';



const Header = () => {
 return(<div className="hdr-cont">
    <div className="hdr-logo">
        <img src={FoodAppLogo}></img>
    </div>
    <div className="hdr-nav-cont">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>

        </ul>
    </div>
 </div>);
};

// eslint-disable-next-line react/prop-types
const RestaurantCard = ({label, image}) => {
return <div className="res-crd-cont">
        <img className="res-crd-img" src={image}></img>
        <div className="res-crd-lbl">{label}</div>
        <div className="res-crd-rtg">{label}</div>
        <div className="res-crd-cns">{label}</div>
    </div>
}

// eslint-disable-next-line react/prop-types
const Search = () => {
    return <div className="search-cont">
            <input type="search"className="search-bx"></input>
           </div>
}

const Body = () => {
    return(<div className="bdy-cont">
        <Search/>
      <div className="ress-cont">
        <RestaurantCard label={"Haldiram's"} image={HaldiramsImg}/>
        <RestaurantCard label={"Koji"} image={KojiImg}/>
        <RestaurantCard label={"Whispering Bamboo"} image={WhisperingBambooImg}/>
        <RestaurantCard label={"Haldiram's"} image={HaldiramsImg}/>
        <RestaurantCard label={"Koji"} image={KojiImg}/>
        <RestaurantCard label={"Whispering Bamboo"} image={WhisperingBambooImg}/>
        <RestaurantCard label={"Whispering Bamboo"} image={WhisperingBambooImg}/>
        <RestaurantCard label={"Haldiram's"} image={HaldiramsImg}/>
        <RestaurantCard label={"Koji"} image={KojiImg}/>
        <RestaurantCard label={"Whispering Bamboo"} image={WhisperingBambooImg}/>
        
        <RestaurantCard label={"Whispering Bamboo"} image={WhisperingBambooImg}/>
        <RestaurantCard label={"Whispering Bamboo"} image={WhisperingBambooImg}/>

      </div>

    </div>);
   };

const MainLayout = () => {
    return(
        <div className="mn-lyt">
            <Header/>
            <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainLayout/>);