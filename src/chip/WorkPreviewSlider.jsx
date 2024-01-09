import React, { useEffect, useRef } from "react";
import { Button, Modal } from 'flowbite-react';
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'


const WorkPreviewSlider = ({ openModal, setOpenModal }) => {

  useEffect(() => {
    if (openModal) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = 'auto';

    }
  }, [openModal])

  useEffect(() => {
    initLightboxJS("Insert License key", "Insert plan type here");
  });

  return (
          <SlideshowLightbox 
          className={`container ${!openModal && 'hidden'} w-[1px] h-[1px] bb`}
          showThumbnails={false}
          open={openModal}
         onClose={() =>{setOpenModal(false)}}
          >
            <img className={`w-full rounded `} src={require('../assets/delikeys_1.png')} />
            <img className={`w-full rounded `} src={require('../assets/delikeys_2.png')} />  
            <img className={`w-full rounded `} src={require('../assets/delikeys_3.png')} />
            <img className={`w-full rounded `} src={require('../assets/delikeys_4.png')} />
          </SlideshowLightbox>
    )

}

export default WorkPreviewSlider;