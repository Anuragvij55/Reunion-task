import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import "./Card.css"


export const Card = () => {
  return (
    <div className="cardContainer">
      <div className="cardTop">
        <div className="imgContainer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpe6whx0r3s65SfyBn9l-2HrN93b8aijxTh5xVFbZg&s" alt="0" />
        </div>
      </div>

      <div className="cardBottom">
        <div className="bottom1">
          <div className="left">
            <div className="price">$2700</div>
            <div className="duration">/month</div>
          </div>
          <div className="right">
            <FavoriteBorderIcon />
          </div>
        </div>
        <div className="bottom2">
          <div className="name">Pain Harbor</div>
          <div className="address">2699 Freen ValleyHighland lake fl.</div>
        </div>
        <div className="bottom3">
          <div className="facilities">
            <div className="icon"><SingleBedIcon/></div>
            <div className="value">3 Beds</div>
          </div>
          <div className="facilities">
            <div className="icon"><BathtubIcon /></div>
            <div className="value">2 bathroom</div>
          </div>
          <div className="facilities">
            <div className="icon"><AspectRatioIcon/></div>
            <div className="value">5x7 m2</div>
          </div>
        </div>

      </div>
    </div>
  )
}
