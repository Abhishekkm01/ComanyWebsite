import React from 'react'
import './footer.css'
import logo  from '../../Assets/LOGICBUNNY.jpg'
import instagram_icon  from '../../Assets/instagram_icon.png'
import pintester_icon  from '../../Assets/pintester_icon.png'
import whatsapp_icon  from '../../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer-container'>
<div className="logo">
    <img src={logo} alt="" width="50px" height="50px" />
    <h1>LogicBunny</h1>
</div >
<ul className='footer-links'>

    <li>Company</li>
    <li>Our Clients</li>
    <li>Events</li>
    <li>Products</li>
    <li>Announcements</li>
</ul>

<div className="socialmedia-container">

<div className="social-icon">
    <img src={instagram_icon} alt="" />
</div>
<div className="social-icon">
    <img src={pintester_icon} alt="" />
</div>
<div className="social-icon">
    <img src={whatsapp_icon} alt="" />
</div>

</div>
<hr/>

<div className="copyright">
    <p>CopyRight@2024-ALL Right reserved</p>
</div>



    </div>
  )
}

export default Footer