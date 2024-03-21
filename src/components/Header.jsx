import React from 'react'
import phone from './images/phone.png';
import search from './images/search.png';



const header = () => {
  return (
    <>
      <nav className="nav">

<div className="navbar">
    <div className="heading">
        <h1>LAST CHANCE TICKET</h1>
        <p className="h0">Y O U R T R U S T E D T I C K E T S E L L E R</p>
    </div>
    <h4 className="res">100+Social Media Followers</h4>
    <p className="res para">Request Event</p>
    <div className="contact res para secondPara">
        <p className="">Contact Us</p>
        <img className="img-phone res" src={phone} alt="" />
    </div>
    <div className="button">
        <button>Sell Tickets</button>
        <button>Login</button>
    </div>
</div>
</nav>

<div className="second-sec">
<h4>Hurray! You are in the right place * 100K+ social media followers * We value every custome</h4>
<h1>Purchase Tickets For A</h1>
<h1>Semi Final 1 - T20 Cricket World Cup</h1>
<p>15 MAR, 2024</p>
<p>Your next best-night-ever is waiting. And we have the tickets.</p>
<div className="input">
    <input type="text" placeholder="search For An Event Here" />
    <div className="icon"><img className="search-img" src={search} alt="" /></div>
</div>
</div>
    </>
  )
}

export default header
