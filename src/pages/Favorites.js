import React, { useState, useEffect } from "react";
import { API, Storage } from "aws-amplify";
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import { listAdminFavorites } from '../graphql/queries';

export default function AllPictures() {
  const [allPictures, setAllPictures] = useState([]);
  const [s3Images, setS3Images] = useState([]);

  useEffect(() => {
    const convertToS3 = async () => {
      const s3Images = [];
      for(let i = 0; i < allPictures.length; i++) {
        const image = allPictures[i];
        const s3Image = await Storage.get(image.url);
        s3Images.push({
          original: s3Image,
          height: image.height,
          width: image.width,
        });
      }
      setS3Images(s3Images);
    }

    if(allPictures.length > 0) {
      convertToS3();
    }

  }, [allPictures])

  useEffect(() => {
    const loadAdminFavorites = async () => {
      try {
        const adminFavorites = await API.graphql({ query: listAdminFavorites, variables: { limit: 999999999 } });

        const unfilteredItems = adminFavorites?.data?.listAdminFavorites?.items;
        // Remove items where _deleted is true
        const items = unfilteredItems.filter(item => !item._deleted);
        items.sort((a, b) => {
          const aDate = new Date(a.createdAt);
          const bDate = new Date(b.createdAt);
          return bDate.getTime() - aDate.getTime();
        });

        if(items.length > 0) {
          const pictures = [];
          items.forEach(item => {
            const p = JSON.parse(item.image);
            if(p.type === 'image') {
              pictures.push({
                url: p.url,
                height: p.height,
                width: p.width,
              });
              // pictures.push({ ...p, S3Url });
            }
          });

          if(pictures.length > 0) {
            if(JSON.stringify(pictures) !== JSON.stringify(allPictures)){
              setAllPictures(pictures);
            }
          }
        }
      } catch (err) {
        console.log('-- Error Loading Posts --', err);
      }
    };

    loadAdminFavorites();
  }, []);


  return (
    <div>
      <ImageGallery
        items={s3Images} 
        showNav={false}
        showThumbnails={false}
        autoPlay={true}
        slideDuration={1000}
        thumbnailPosition={'left'}
      />
      <p>
        {s3Images.length} images
      </p>
    </div>
  )
}