import "./footer.scss";
import React from 'react';
import Images from "./Images/Screenshot_20221106_111049.jpg";
import Images2 from "./Images2/Screenshot_20221106_111725.jpg";


export default function () {
  return (
    <div className='footer'>
      <div>
      <img src={Images} alt=""/>
      </div>
      <div>
      <img src={Images2} alt=""/>
      </div>
     
       
    </div>
  )
}


