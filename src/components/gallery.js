import React from 'react';

const Gallery = () => {
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
  return (
    <div className="gallery">
      {gallery_list.map(img => {
        return(
          <img
            key={img}
            src={require(`../assets/images/gallery/${img}`)}
            alt="{img}"
          />
        )
      })}
    </div>
  )
}

export default Gallery;
