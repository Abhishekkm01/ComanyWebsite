import React, { useContext, useRef, useState } from 'react';
import logo  from '../../Assets/LOGICBUNNY.jpg'
import './navbar.css';
import { Link } from 'react-router-dom';

import dropdown_icon from '../../Assets/dropdown_icon.png'

const Navbar = () => {
    const [menu,setMenu]=useState("");


    const menuRef=useRef();

    const dropdown_toggle=(e)=>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
                    }    

  return (
    <div className='nav-container'>
<div className='logo'>
<img src={logo} alt="" width="50px" height="50px" />
<p>LogicBunny</p>
</div>
<img  className="nav-dropdown" onClick={dropdown_toggle} src={dropdown_icon} alt=""  />
<ul ref={menuRef} className="nav-list">
<li onClick={()=>setMenu("Home")}><Link style={{textDecoration:"none" }} onClick={()=>setMenu("home")} to='/' >Home</Link>{menu==="home"?<hr/>:<></>} </li>
<li onClick={()=>setMenu("career")}><Link  style={{textDecoration:"none"}} onClick={()=>setMenu("Career")} to='/career'>Career</Link>{menu==='Career'?<hr/>:<></>}</li> 
<li onClick={()=>setMenu("Aboutus")}><Link  style={{textDecoration:"none"}} onClick={()=>setMenu("aboutus")} to='/aboutus'>AboutUs</Link>{menu==="aboutus"?<hr/>:<></>}</li>
<li onClick={()=>setMenu("Portfolio")}><Link   style={{textDecoration:"none"}} onClick={()=>setMenu("portfolio")} to="/portfolio">Portfolio</Link>{menu==="portfolio"?<hr/>:<></>}</li>
<li onClick={()=>setMenu("ContactUs")}><Link   style={{textDecoration:"none"}} onClick={()=>setMenu("contactus")} to="/contactus">Contact Us</Link>{menu==="contactus"?<hr/>:<></>}</li>

</ul>


    </div>
  )
}

export default Navbar