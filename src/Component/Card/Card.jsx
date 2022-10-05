import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import "./Card.css"
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export const Card = ({ detail }) => {
  return (
    <div className="cardContainer">
      <div className="cardTop">
        <div className="imgContainer">
          <img src={detail?.image} alt="0" />
        </div>
        {detail.popular && <div className="popular"><AutoAwesomeIcon  className='icon'/> Popular</div>}
      </div>

      <div className="cardBottom">
        <div className="bottom1">
          <div className="left">
            <div className="price">${detail?.price}</div>
            <div className="duration">/month</div>
          </div>
          <div className="right">
            <FavoriteBorderIcon />
          </div>
        </div>
        <div className="bottom2">
          <div className="name">{detail?.name}</div>
          <div className="address">{detail?.address}</div>

        </div>
        <div className="bottom3">
          {
            detail.facilities.map((fac) => {
              return (
                <div className="facilities" key={fac?.key}>
                  <div className="icon"><SingleBedIcon /></div>
                  <div className="value">{fac.name}</div>
                </div>
              )
            })
          }
        </div>

      </div>
    </div>
  )
}
