import React from 'react'
import { Card } from '../Card/Card'
import { Filter } from '../Filter/Filter'
import { Navbar } from '../NavBar/Navbar'
import "./MainPage.css"

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export const MainPage = () => {
	return (
		<div>
			<Navbar />
			<div className="mainContainer">
				<div className="top">
					<div className="left">
						<div className="heading">Search Properties to rent</div>
					</div>
					<div className="right">
						<div className="search">
							<input type="text" placeholder='Search with search bar' />
							<div className="icon"><KeyboardArrowDownIcon /></div>
						</div>
					</div>
				</div>
				<div className="middle">
					<div className="item itemBorder">
						<div className="title">Location</div>
						<div className="value">New York,USA</div>
					</div>
					<div className="item itemBorder">
						<div className="title">When</div>
						<div className="itemvalue">
							<div className="value">Select Move-in Date</div>
							<div className="icon"><KeyboardArrowDownIcon /></div>
						</div>
					</div>
					<div className="item itemBorder">
						<div className="title">Price</div>
						<div className="itemvalue">
							<div className="value">$500-$2500</div>
							<div className="icon"><KeyboardArrowDownIcon /></div>
						</div>
					</div>
					<div className="item itemBorder">
						<div className="title">Property Type</div>
						<div className="itemvalue">
							<div className="value">Houses</div>
							<div className="icon"><KeyboardArrowDownIcon /></div>
						</div>
					</div>
					<div className="item searchItem">
						<div className="search">Search</div>
					</div>
				</div>

				<div className="bottom">
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
				</div>
			</div>
		</div>
	)
}
