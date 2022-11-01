import './banner.scss';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from 'react';

// const background_Image =[{
//     id:"1",
//     key:"1",
//     img:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
//     },
//     {
//     id:"2",
//     key:"2",
//     img:"https://m.media-amazon.com/images/I/81KVdS+84PL._SX3000_.jpg"
//     },
//     {
//         id:"3",
//         key:"3",
//         img:"https://m.media-amazon.com/images/I/617Wo3jP3fL._SX3000_.jpg"

//     },
//     {
//     id:"4",
//     key:"4",
//     img:"https://m.media-amazon.com/images/I/8160RuRhSUL._SX3000_.jpg"
//     }
// ];

export default function Banner() {
  const[toggle,setToggle] = useState(background_Image);
  return (
    <div className='banner'>

<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://m.media-amazon.com/images/I/81KVdS+84PL._SX3000_.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://m.media-amazon.com/images/I/8160RuRhSUL._SX3000_.jpg" alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

    </div>
  )
}
