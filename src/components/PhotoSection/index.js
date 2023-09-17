import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { photos } from './photo-data';

function PhotoSection() {
  return (
    <div id="fh5co-testimonial" className="fh5co-section-gray">
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <ImageGallery items={photos} showBullets={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoSection;
