import './banner.scss';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

// const background_Image =[{
//     id:"1",
//     img:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
//     },
//     {
//     id:"2",
//     img:"https://m.media-amazon.com/images/I/81KVdS+84PL._SX3000_.jpg"
//     },
//     {
//         id:"3",
//         img:"https://m.media-amazon.com/images/I/617Wo3jP3fL._SX3000_.jpg"

//     },
//     {
//     id:"4",
//     img:"https://m.media-amazon.com/images/I/8160RuRhSUL._SX3000_.jpg"
//     }
// ];

export default function Banner() {
  return (
    <div className='banner'>
       
        <img src ="https://m.media-amazon.com/images/I/81KVdS+84PL._SX3000_.jpg" alt="" />
        
        {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/> */}

    </div>
  )
}
