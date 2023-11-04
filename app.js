import React from "react";
import ReactDOM from "react-dom";
import './app.css'

const Header = () => {
 return(<div className="hdr-cont">
    <div className="hdr-logo">
        <img src="https://img.freepik.com/free-vector/restaurant-logo-editorial-template_23-2148701251.jpg"></img>
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
const RestaurantCard = ({label}) => {
return <div className="res-crd-cont">
        <image className="res-crd-img"></image>
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
        <RestaurantCard label={"Haldiram's"}/>
        <RestaurantCard label={"Koji"}/>
        <RestaurantCard label={"Whispering Bamboo"}/>
        <RestaurantCard label={"Haldiram's"}/>
        <RestaurantCard label={"Koji"}/>
        <RestaurantCard label={"Whispering Bamboo"}/>
        <RestaurantCard label={"Haldiram's"}/>
        <RestaurantCard label={"Koji"}/>
        <RestaurantCard label={"Whispering Bamboo"}/>
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