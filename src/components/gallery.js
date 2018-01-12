import React, { Component } from 'react';

//CONTAINERS
import GalleryModal from '../containers/modal';

const gallery_list = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
  '13.jpg',
  '14.jpg',
  '15.jpg',
  '16.jpg',
  '17.jpg',
  '18.jpg',
]
const Gallery = () => {
  return (
    <div className="gallery">
      {gallery_list.map(img => {
        return(
          <div key={img}>
            <GalleryModal image={require(`../assets/images/gallery/${img}`)}/>
          </div>
        )
      })}
    </div>
  )
}

export default Gallery;
