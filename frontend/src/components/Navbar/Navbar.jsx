import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
      <h2>Helio's Pizza</h2>
      {/* <img src={assets.logo} alt="" className="logo" /> */}
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
        <a href='#explore-menu' onClick={()=> setMenu('menu')} className={menu === 'menu'?'active':''}>menu</a>
        <a href='#app-download' onClick={()=> setMenu('mobile-app')} className={menu === 'mobile-app'?'active':''}>mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact us")}  className={menu==="contact us"?"active":""}>contact us</a>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
          </div>
          <button onClick={()=>setShowLogin(true)}>Sign in</button>
    </div>
    </div>
  )
}

export default Navbar