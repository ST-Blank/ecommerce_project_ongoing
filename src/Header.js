import React from 'react'
import './Header.css'
import logo from './image_logo/homelogo.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='header'>
            <Link to="/">
            <img className="header_logo" src={logo} alt="logo" />
            </Link>
            

            <div className="header_search">
                <input className="header_search_input" type="text" />
                {/*logo*/}
                <SearchIcon className="header_search_icon" />
            </div>
         <div className="header_nav">  

         <Link to="/login">
            <div className="header_nav_option">  
            <span className="header_nav_option_1">hello</span>
            <span className="header_nav_option_2">signin</span>
            </div>
            </Link>

            <div className="header_nav_option">  
            <span className="header_nav_option_1">return</span>
            <span className="header_nav_option_2">&order</span>
            </div>

            <div className="header_nav_option">  
            <span className="header_nav_option_1">your</span>
            <span className="header_nav_option_2">prime</span>
            </div>

            <Link to="/checkout">
            <div className="header_shoppingbasket_icon">
            <ShoppingBasketIcon />
            <span className="header_nav_option_2 header_shoppingbacket_count">{basket?.length}</span>
            </div>
            </Link>


            </div>
         </div>
         
    )
}

export default Header
