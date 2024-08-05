import img from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './neon.png';
import './ImageComponent.css';
import React, { useState } from 'react';

export default function ImageComponent(){
    const [currentImg, setCurrentImg] = useState(0);
    const janvi = [img,img2,img3,img4,img5]
    return (
        <div className='wrapper'>
            { janvi.map((URL,i)=>(
                <div className={`${currentImg !== i ? "image_container" :"image_container-main"}`} onClick={()=>setCurrentImg(i)} >
                <img src={URL} className="slide_image" alt='imgg' />
            </div>
            ))
            }
        </div>
       
        
    )
}

