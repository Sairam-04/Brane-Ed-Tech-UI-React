import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import './Leader.css'
import video1 from '../../assets/video1.mp4'

const LeadersVoice = () => {
  return (
    <>
      <div className='LeadersVoice__Div'>
        <div className='LeadersVoice__Div__heading'>
          Leaders Voice
        </div>
          <Carousel
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={100000}
          >
            
            <div className='LeadersVoice__Div__content'>
              <div className='LeadersVoice__Div__content-text'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
              <div className="LeadersVoice__Div__content-video">
                <video width="380" height="200" controls >
                  <source src={video1} type="video/mp4" />
                </video>
              </div>
            </div>

            <div className='LeadersVoice__Div__content'>
              <div className='LeadersVoice__Div__content-text'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
              <div className="LeadersVoice__Div__content-video">
                <video width="380" height="200" controls >
                  <source src={video1} type="video/mp4" />
                </video>
              </div>
            </div>

            <div className='LeadersVoice__Div__content'>
              <div className='LeadersVoice__Div__content-text'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
              <div className="LeadersVoice__Div__content-video">
                <video width="380" height="200" controls >
                  <source src={video1} type="video/mp4" />
                </video>
              </div>
            </div>

            <div className='LeadersVoice__Div__content'>
              <div className='LeadersVoice__Div__content-text'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
              <div className="LeadersVoice__Div__content-video">
                <video width="380" height="200" controls >
                  <source src={video1} type="video/mp4" />
                </video>
              </div>
            </div>

          </Carousel>
      </div>
    </>
  );
};

export default LeadersVoice;
