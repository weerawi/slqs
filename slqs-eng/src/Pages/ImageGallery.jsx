 
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SlqsContext } from '../Context/SlqsContext';
import PageTitle from '../Components/PageTitle';
import galleryimg from '../Components/Assets/sri_lanka.jpg';
import LazyLoad from 'react-lazyload';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import PhotoAlbum from 'react-photo-album';
import './ImageGallery.css';

const ImageGallery = () => {
    const { csrId, galleryId } = useParams();
    const { csrallproducts, galallproducts } = useContext(SlqsContext);
    const csr = csrallproducts.find((e) => e.id === Number(csrId));
    const gallery = galallproducts.find((e) => e.id === Number(galleryId));

    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [currentAlbum, setCurrentAlbum] = useState([]);

    if (csrId && !csr) {
        return <div>CSR item not found</div>;
    }
    if (galleryId && !gallery) {
        return <div>Gallery item not found</div>;
    }

    const openLightbox = (album, index) => {
        setCurrentAlbum(album);
        setPhotoIndex(index);
        setIsOpen(true);
    };

    const createPhotoData = (album) => {
        return album.map((src, index) => ({
            src,
            width: 1, // Dummy values for width and height
            height: 1, // Adjust based on your images
            key: index,
        }));
    };

    const csrPhotos = csr ? createPhotoData(csr.album) : [];
    const galleryPhotos = gallery ? createPhotoData(gallery.album) : [];

    return (
        <>
            <PageTitle name="Images" image={galleryimg} />

            <div className='flex items-center justify-center mx-auto'>
                {csr && (
                    <div>
                        <div className='flex flex-col items-center justify-center py-10'>
                            <h1 className='capitalize text-xl md:text-2xl'>{csr.title}</h1>
                        </div>
                        <div className="album-container py-10 w-full h-full">
                            <PhotoAlbum
                                layout="masonry"
                                photos={csrPhotos}
                                onClick={({ index }) => openLightbox(csr.album, index)}
                                renderPhoto={({ photo: { src }, imageProps: { alt, ...rest } }) => (
                                    <LazyLoad height={200} offset={100} once>
                                        <img src={src} alt={alt} {...rest} className="cursor-pointer" />
                                    </LazyLoad>
                                )}
                            />
                        </div>
                    </div>
                )}

                {gallery && (
                    <div>
                        <div className='flex flex-col items-center justify-center py-10'>
                            <h1 className='capitalize text-xl md:text-2xl'>{gallery.title}</h1>
                        </div>
                        <div className="album-container py-10 w-full h-full">
                            <PhotoAlbum
                                layout="masonry"
                                photos={galleryPhotos}
                                onClick={({ index }) => openLightbox(gallery.album, index)}
                                renderPhoto={({ photo: { src }, imageProps: { alt, ...rest } }) => (
                                    <LazyLoad height={200} offset={100} once>
                                        <img src={src} alt={alt} {...rest} className="cursor-pointer" />
                                    </LazyLoad>
                                )}
                            />
                        </div>
                    </div>
                )}
            </div>

            {isOpen && (
                <Lightbox
                    mainSrc={currentAlbum[photoIndex]}
                    nextSrc={currentAlbum[(photoIndex + 1) % currentAlbum.length]}
                    prevSrc={currentAlbum[(photoIndex + currentAlbum.length - 1) % currentAlbum.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + currentAlbum.length - 1) % currentAlbum.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % currentAlbum.length)}
                />
            )}
        </>
    );
};

export default ImageGallery;


// import React, { useContext, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { SlqsContext } from '../Context/SlqsContext';
// import PageTitle from '../Components/PageTitle';
// import galleryimg from '../Components/Assets/sri_lanka.jpg';
// import LazyLoad from 'react-lazyload';
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';

// const ImageGallery = () => {
//     const { csrId, galleryId } = useParams();
//     const { csrallproducts, galallproducts } = useContext(SlqsContext);
//     const csr = csrallproducts.find((e) => e.id === Number(csrId));
//     const gallery = galallproducts.find((e) => e.id === Number(galleryId));

//     const [isOpen, setIsOpen] = useState(false);
//     const [photoIndex, setPhotoIndex] = useState(0);
//     const [currentAlbum, setCurrentAlbum] = useState([]);

//     if (csrId && !csr) {
//         return <div>CSR item not found</div>;
//     }
//     if (galleryId && !gallery) {
//         return <div>Gallery item not found</div>;
//     }

//     const openLightbox = (album, index) => {
//         setCurrentAlbum(album);
//         setPhotoIndex(index);
//         setIsOpen(true);
//     };

//     return (
//         <>
//             <PageTitle name="Images" image={galleryimg} />

//             <div className='flex items-center justify-center mx-auto'>
//                 {csr && 
//                     <div>
//                       <div className='flex flex-col items-center justify-center pt-10'>
//                         <h1 className='capitalize text-xl md:text-2xl'>{csr.title}</h1> 
//                       </div>
                        
//                         <div className="album grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10 w-full h-full">
//                             {csr.album.map((image, index) => (
//                                 <LazyLoad key={index} height={500} offset={100} once>
//                                     <img
//                                         src={image}
//                                         alt={`Album image ${index + 1}`}
//                                         className="cursor-pointer"
//                                         onClick={() => openLightbox(csr.album, index)}
//                                     />
//                                 </LazyLoad>
//                             ))}
//                         </div>
//                     </div>
//                 }

//                 {gallery && 
//                     <div>
//                       <div className='flex flex-col items-center justify-center pt-10'>
//                         <h1 className='capitalize text-xl md:text-2xl'>{gallery.title}</h1> 
//                       </div>
                        
//                         <div className="album grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10 w-full h-full">
//                             {gallery.album.map((image, index) => (
//                                 <LazyLoad key={index} height={500} offset={100} once>
//                                     <img
//                                         src={image}
//                                         alt={`Album image ${index + 1}`}
//                                         className="cursor-pointer"
//                                         onClick={() => openLightbox(gallery.album, index)}
//                                     />
//                                 </LazyLoad>
//                             ))}
//                         </div>
//                     </div>
//                 }
//             </div>

//             {isOpen && (
//                 <Lightbox
//                     mainSrc={currentAlbum[photoIndex]}
//                     nextSrc={currentAlbum[(photoIndex + 1) % currentAlbum.length]}
//                     prevSrc={currentAlbum[(photoIndex + currentAlbum.length - 1) % currentAlbum.length]}
//                     onCloseRequest={() => setIsOpen(false)}
//                     onMovePrevRequest={() => setPhotoIndex((photoIndex + currentAlbum.length - 1) % currentAlbum.length)}
//                     onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % currentAlbum.length)}
//                 />
//             )}
//         </>
//     );
// };

// export default ImageGallery;
