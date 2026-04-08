import React, { useState, useCallback } from "react";
// import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

// Import the image using a relative path
import IMG1 from './images/IMG1.jpg';
import IMG2 from './images/IMG2.jpg';
import IMG3 from './images/IMG3.jpg';
import IMG4 from './images/IMG4.jpg';
import IMG5 from './images/IMG5.jpg';
import IMG6 from './images/IMG6.jpg';
import IMG7 from './images/IMG7.jpg';

export default function Projects() {
  // Move useState and useCallback inside the functional component
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, {index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  // Define photos into their own Project
  const Project1 = [
    {
      src: IMG1,
      width: 20,
      height: 20,
      style: { paddingBottom: '50px', paddingRight: '1px' }
    },
    {
      src: IMG2,
      width: 16,
      height: 9,
      style: { paddingBottom: '50px', paddingRight: '1px' }
    },
    {
      src: IMG3,
      width: 24,
      height: 9,
      style: { paddingBottom: '50px', paddingRight: '1px' }
    },
    {
      src: IMG4,
      width: 16,
      height: 9,
      style: { paddingBottom: '50px', paddingRight: '1px' }
    },
    {
      src: IMG5,
      width: 16,
      height: 9,
      style: { paddingBottom: '50px', paddingRight: '1px' }
    },
  ];

  const Project2 = [
    {
      src: IMG6,
      width: 16,
      height: 9,
      style: { paddingBottom: '50px', paddingRight: '1px' }
    },
    {
      src: IMG7,
      width: 16,
      height: 9,
      style: { paddingBottom: '50px', paddingRight: '1px' }
    },
  ];

  // Add your own Projects here:
  // const Project3 = [
      // {
      //   src: IMG6,
      //   width: 16,
      //   height: 9,
      //   style: { paddingBottom: '50px', paddingRight: '1px' }
      // },
  // ]
  // const Project4 = [
      // {
      //   src: IMG7,
      //   width: 16,
      //   height: 9,
      //   style: { paddingBottom: '50px', paddingRight: '1px' }
      // },
  // ]
  // const Project5 = [
    // {
    //   src: IMG8,
    //   width: 16,
    //   height: 9,
    //   style: { paddingBottom: '50px', paddingRight: '1px' }
    // },
// ]

    

  return (
    <div>

      <div className="projects-container">
        <h1>U.S. Department of Homeland Security</h1>
        <p>Developed Arena and Simio simulation models to evaluate queue lengths, service times, agent utilization, and
checkpoint bottlenecks, helping improve airport checkpoint system design.</p>
        <Gallery photos={Project1} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={Project1.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>

      <div className="projects-container">
        <h1>Regal Boats</h1>
        <p>Process Improvement at a Regal Manufacturing Facility. 
          Led Lean process improvement initiatives, including 5S implementation, to streamline work areas, reduce repetitive
motion, and minimize inefficient operations across the production line.</p>
        <Gallery photos={Project2} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={Project2.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>

      {/* <div className="projects-container">
        <h1>Title</h1>
        <p>Description</p>
        <Gallery photos={Project3} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={Project3.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div> */}
  
    </div>

    
  );
}
