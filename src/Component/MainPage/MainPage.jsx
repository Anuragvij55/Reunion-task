import React, { useEffect, useState } from 'react'
import { Card } from '../Card/Card'
import { Filter } from '../Filter/Filter'
import { Navbar } from '../NavBar/Navbar'
import "./MainPage.css"
import { data } from "../../data"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PlacesAutocomplete from 'react-places-autocomplete';

export const MainPage = () => {
	const [seePrice, setSeePrice] = useState(false);
	const [price1, setPrice1] = useState(200);
	const [price2, setPrice2] = useState(800);
	const handleSelectPrice = (p1, p2) => {
		setPrice1(p1);
		setPrice2(p2);
		setSeePrice(false);
	}

	const [seeHouse, setSeeHouse] = useState(false);
	const [house, setHouse] = useState("House");
	const handleSelectHouse = (tp) => {
		setHouse(tp);
		setSeeHouse(false);
	}

	const [startDate, setStartDate] = useState(new Date());
	const [place, setPlace] = useState("New York");

	const [cardData, setCardData] = useState(data);
	const handleSearch = () => {
		console.log("seaching");
		console.log(place, price1, price2, house);
		let filterData = data.filter(item => {
			console.log(new Date(item?.startDate));
			console.log(startDate);
			return (
				item?.city.toLowerCase() === place.toLowerCase() &&
				item?.price >= price1 &&
				item?.price <= price2 &&
				item?.type.toLowerCase() === house.toLowerCase() &&
				new Date(startDate) - new Date(item?.startDate) >= 0
			)
		})
		setCardData(filterData);
	}

	// const openDatepicker = () => DatePicker._calendar.setOpen(true);

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
						<input type="text" className='value' defaultValue={place} onChange={(e) => setPlace(e.target.value)} />
					</div>
					<div className="item itemBorder">
						<div className="title">When</div>
						<div className="itemvalue">
							<label htmlFor="datepicker" className="date">
								<DatePicker name="datepicker" selected={startDate} onChange={(date) => setStartDate(date)} />
								<div className="icon"><CalendarMonthIcon /></div>
							</label>
						</div>
					</div>
					<div className="item itemBorder">
						<div className="title">Price</div>
						<div className="itemvalue">
							<div className="dropdown">
								<div className="dropbtn">
									<div className="value">${price1}-${price2}</div>
									<div className="icon" onClick={() => setSeePrice(!seePrice)}><KeyboardArrowDownIcon /></div>
								</div>
								<div className="dropdown-content" style={{ display: seePrice ? "block" : "none" }} >
									<div className="contentItem" onClick={() => handleSelectPrice(200, 500)}>200-500</div>
									<div className="contentItem" onClick={() => handleSelectPrice(500, 1000)}>500-1000</div>
									<div className="contentItem" onClick={() => handleSelectPrice(1000, 1500)}>1000-1500</div>
								</div>
							</div>
						</div>
					</div>
					<div className="item itemBorder">
						<div className="title">Property Type</div>
						<div className="itemvalue">
							<div className="dropdown">
								<div className="dropbtn">
									<div className="value">{house}</div>
									<div className="icon" onClick={() => setSeeHouse(!seeHouse)}><KeyboardArrowDownIcon /></div>
								</div>
								<div className="dropdown-content" style={{ display: seeHouse ? "block" : "none" }} >
									<div className="contentItem" onClick={() => handleSelectHouse("House")}>House</div>
									<div className="contentItem" onClick={() => handleSelectHouse("Apartment")}>Apartment</div>
									<div className="contentItem" onClick={() => handleSelectHouse("FarmHouse")}>FarmHouse</div>
									<div className="contentItem" onClick={() => handleSelectHouse("Bungalow")}>Bungalow</div>
								</div>
							</div>
						</div>
					</div>
					<div className="item searchItem">
						<div className="search" onClick={() => handleSearch()}>Search</div>
					</div>
				</div>

				<div className="bottom">
					{
						cardData.map(item => <Card detail={item} key={item.key} />)
					}
				</div>
			</div>
		</div>
	)
}
