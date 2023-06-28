import React from "react";
import "./parentsvoicestyle.css";
import leftarrow from '../../assets/leftarrow.png'
import rightarrow from '../../assets/rightarrow.png'
import userimage1 from '../../assets/userimage1.png'
import userimage2 from '../../assets/userimage2.png'
import userimage3 from '../../assets/userimage3.png'

const ParentsVoice = () => {
  return (
    <div className="container">
      <div className="title">
        <h2>Parents Voice</h2>
      </div>
      <div id="parentCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              {/* Card content for the first set of parent cards */}
              <div className="col-md-4">
              <div className="parentcard-1">
            <div className="parentcard-image">
              <img
                src={userimage1}
                width="60vw"
                height="60vh"
              ></img>
            </div>
            <div className="parentcard-text">
              <cardtitle className="parentcard-text-name">
                Julia Harris
              </cardtitle>
              <cardsubtitle className="parentcard-text-desc">
                Parent, Varun 8th Class
              </cardsubtitle>
              <carddescription className="parentcard-text-review">
                Brane Education has helped my son alot in his studies. He has
                improved alot in his studies and is now able to score good marks
                in his exams.
              </carddescription>
            </div>
          </div>
              </div>
              <div className="col-md-4">
              <div className="parentcard-1">
            <div className="parentcard-image">
              <img
                src={userimage2}
                width="60vw"
                height="60vh"
              ></img>
            </div>
            <div className="parentcard-text">
              <cardtitle className="parentcard-text-name">Venu Bandi</cardtitle>
              <cardsubtitle className="parentcard-text-desc">
                Parent, Shivansh 10th Class
              </cardsubtitle>
              <carddescription className="parentcard-text-review">
                Brane Education has helped my son alot in his studies. He has
                improved alot in his studies and is now able to score good marks
                in his exams.
              </carddescription>
            </div>
          </div>
              </div>
              <div className="col-md-4">
              <div className="parentcard-1">
            <div className="parentcard-image">
              <img
                src={userimage3}
                width="60vw"
                height="60vh"
              ></img>
            </div>
            <div className="parentcard-text">
              <cardtitle className="parentcard-text-name">
                Julian Harris
              </cardtitle>
              <cardsubtitle className="parentcard-text-desc">
                Parent, Varun 8th Class
              </cardsubtitle>
              <carddescription className="parentcard-text-review">
                Brane Education has helped my son alot in his studies. He has
                improved alot in his studies and is now able to score good marks
                in his exams.
              </carddescription>
            </div>
          </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              {/* Card content for the second set of parent cards */}
              <div className="col-md-4">
              <div className="parentcard-1">
            <div className="parentcard-image">
              <img
                src={userimage3}
                width="60vw"
                height="60vh"
              ></img>
            </div>
            <div className="parentcard-text">
              <cardtitle className="parentcard-text-name">
                Julian Harris
              </cardtitle>
              <cardsubtitle className="parentcard-text-desc">
                Parent, Varun 8th Class
              </cardsubtitle>
              <carddescription className="parentcard-text-review">
                Brane Education has helped my son alot in his studies. He has
                improved alot in his studies and is now able to score good marks
                in his exams.
              </carddescription>
            </div>
          </div>
              </div>
              <div className="col-md-4">
              <div className="parentcard-1">
            <div className="parentcard-image">
              <img
                src={userimage2}
                width="60vw"
                height="60vh"
              ></img>
            </div>
            <div className="parentcard-text">
              <cardtitle className="parentcard-text-name">Venu Bandi</cardtitle>
              <cardsubtitle className="parentcard-text-desc">
                Parent, Shivansh 10th Class
              </cardsubtitle>
              <carddescription className="parentcard-text-review">
                Brane Education has helped my son alot in his studies. He has
                improved alot in his studies and is now able to score good marks
                in his exams.
              </carddescription>
            </div>
          </div>
              </div>
              <div className="col-md-4">
              <div className="parentcard-1">
            <div className="parentcard-image">
              <img
                src={userimage1}
                width="60vw"
                height="60vh"
              ></img>
            </div>
            <div className="parentcard-text">
              <cardtitle className="parentcard-text-name">
                Julia Harris
              </cardtitle>
              <cardsubtitle className="parentcard-text-desc">
                Parent, Varun 8th Class
              </cardsubtitle>
              <carddescription className="parentcard-text-review">
                Brane Education has helped my son alot in his studies. He has
                improved alot in his studies and is now able to score good marks
                in his exams.
              </carddescription>
            </div>
          </div>
              </div>
            </div>
          </div>
          {/* Repeat the carousel-item divs for additional sets of cards */}
        </div>
        <a className="carousel-control-prev" href="#parentCarousel" role="button" data-bs-slide="prev">
          <img src={leftarrow} alt="Previous" />
        </a>
        <a className="carousel-control-next" href="#parentCarousel" role="button" data-bs-slide="next">
          <img src={rightarrow} alt="Next" />
        </a>
      </div>
    </div>
  );
};

export default ParentsVoice;
