import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./Navbar.css"
import logo1 from "../../asset/logo.jpeg"

export const Navbar = () => {
	const [navSelect, setNavSelect] = useState("Rent");
	return (
		<div className="navContainer">
			<div className="navWrapper">
				<div className="left">
					<div className="navItem logo">
						<div className="logoImg">
							<img src={logo1} alt="."  />
						</div>
						<div className="logoText">Estatery</div>
					</div>
					
					<div className="navItem active">Rent</div>
					<div className="navItem">Buy</div>
					<div className="navItem">Sell</div>
					<div className="navItem">
						<div className='navItemText'> Manage Property</div>
						<KeyboardArrowDownIcon />
					</div>
					<div className="navItem">
						<div className="navItemText">Resourse</div>
					<KeyboardArrowDownIcon />
					</div>
				</div>
					<div className="right">
						<div className="login rightItem">Login</div>
						<div className="signUp rightItem">Sign Up</div>
					</div>
			</div>
		</div>
	)
}
