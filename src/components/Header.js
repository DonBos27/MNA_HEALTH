import React from "react";
import './Header.css';
const Header = (props) => {
    return(
    <div className='header' slot='fixed'>
        <h1>{props.title}</h1>
    </div>
    )
}
export default Header;