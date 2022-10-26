import React from 'react';
import "./header.scss";
import {Link} from "react-router-dom";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { useStateValue } from './StateProvider';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function Header() {
    const {myReducer} = useStateValue();
    const [ data,user] = myReducer;
    
    
  return (
    <header className='header'>
        <div className="header__logo">
            <span className="header__logoName">
                <Link to="/">
                <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
                </Link>
                
                </span>
            
        </div>
        <div className='header__location'>
        <span style={{paddingLeft:"25px",fontWeight:"normal",fontSize:"10px"}}>Hello</span>
            <span >
                <LocationOnOutlinedIcon fontSize='medium'/>
                Select your address</span>
                </div>
        <div className="header__search">
            <input />
            <SearchIcon fontSize="small" className="header__searchIcon"/>
        </div>
        <div className="header__nav">
            <div className="header__nav__user">
                <span className="header__nav__lineOne">
                    Hello {user ? user : "Guest"}
            </span>
            <span className="header__nav__lineTwo">
                <Link to="/Login">
                    Sign {user ? "Out" : "In"}
                </Link>
                </span>

                </div>
                <div className="header__nav__user">
                        <span className="header__nav__lineOne">Returns</span>
                        <span className="header__nav__lineTwo">& Orders</span>
                    </div>
            <div className="header__nav__itemBasket">
                <span className='header__nav__totalCount'>{data.cartList.length}</span>
                <span>
                <Link to="/checkout">
                 <span> <ShoppingCartIcon fontSize="large"/></span>   
               
                Cart
                </Link>
                </span>
               
            </div>

        </div>
    </header>
  )
}
