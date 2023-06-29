import { FaTwitter, FaFacebook, FaInstagram, FaSkype, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import './Foot.css'
function Footer() {
  return(
    <>
      <footer className="text-center text-lg-start">
        
        <div className="container p-4">
            
            <div className="row footer-row">
               
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="footer-headings">Home</h5>

                    <ul className="list-unstyled mb-0">
                        <li>
                            <a href="#!" className="footer-text-color">Dynamic Time Table</a>
                        </li>
                        <li>
                            <a href="#!" className="footer-text-color">Video Based Digital Library</a>
                        </li>
                        <li>
                            <a href="#!" className="footer-text-color">Spelling Skills</a>
                        </li>
                        <li>
                            <a href="#!" className="footer-text-color">Memory skills</a>
                        </li>
                        <li>
                            <a href="#!" className="footer-text-color">Listening skills</a>
                        </li>
                        <li>
                            <a href="{% url 'generalSearch' %}" className="footer-text-color">General Search</a>
                        </li>
                        <li>
                            <a href="#!" className="footer-text-color">Little Masters</a>
                        </li>
                        <li>
                            <a href="{% url 'Dashboard' %}" className="footer-text-color">Dashboard</a>
                        </li>
                        <li>
                            <a href="{% url 'takeaclassName' %}" className="footer-text-color">Ready to take className</a>
                        </li>
                        <li>
                            <a href="{% url 'OtherActivities' %}" className="footer-text-color">Other Activities</a>
                        </li>
                    </ul>
                </div>
                

               
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="footer-headings">Syllabus</h5>

                    <ul className="list-unstyled">
                        <li>
                            <a href="#!" className="footer-text-color">NCERT Subject Books</a>
                        </li>
                        <li>
                            <a href="#!" className="footer-text-color">NCERT Solutions</a>
                        </li>
                        <li>
                            <a href="#!" className="footer-text-color">PDF Materials</a>
                        </li>
                        <li>
                            <a href="#!" className="footer-text-color">Previous Year Question Papers</a>
                        </li>
                        <li>
                            <a href="#!" className="footer-text-color">Solved Model Papers</a>
                        </li>
                        <li>
                            <a href="#!" className="footer-text-color">Important questions</a>
                        </li>
                        <li>
                            <a href="#!" className="footer-text-color">Text Book Solutions</a>
                        </li>

                    </ul>
                </div>
                

                
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="footer-headings">Notifications</h5>

                    <ul className="list-unstyled mb-0">
                        <li>
                            <a href="#!" className="footer-text-color">List of Articles</a>
                        </li>
                        <li>
                            <a href="#!" className="footer-text-color">Olympiad Exams</a>
                        </li>
                        <li>
                            <a href="#!" className="footer-text-color">Education related News</a>
                        </li>
                        <li>
                            <a href="#!" className="footer-text-color">Support</a>
                        </li>
                        <li>
                            <a href="#!" className="footer-text-color">Government Scholarships</a>
                        </li>
                    </ul>
                </div>
                

                
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="footer-headings">Contact Us</h5>

                    <ul className="list-unstyled">
                        <li className="contact-us-text">
                            Corporate Office: <br />
                            Building 3A and 3B, <br />
                            Raheja Mindspace, <br /> HUDA Techno Enclave
                            HITEC City, <br /> Telangana 500081 <br />
                        </li>
                        <br />
                        <li className="contact-us-text">
                            <p>
                                +91 9123 456 7890 <br />
                                +91 40 123 56 7890 <br />
                                info@braneenterprises.com
                            </p>
                        </li>

                        <li>
                            <h5 className="footer-headings">Follow Us On:</h5>


                            <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px"
                                height="30px">
                                <path
                                    d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z" />
                            </svg>


                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0,0,256,256" width="30px" height="30px" fill-rule="nonzero">
                                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1"
                                    stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                    stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"
                                    font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}>
                                    <g transform="scale(5.12,5.12)">
                                        <path
                                            d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z">
                                        </path>
                                    </g>
                                </g>
                            </svg>

                            <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px"
                                height="30px">
                                <path
                                    d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z" />
                            </svg>

                            <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px"
                                height="30px">
                                <path
                                    d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" />
                            </svg>
                        </li>

                    </ul>
                </div>
            </div>
            
        </div>
        

        <div className="text-center p-3 copyright-footer-div">

            <div id="terms-text">
                Privacy Policy | Terms & Conditions
            </div>

            <div id="copyright-text">
                Copyright © 2023: Brane Education. All rights reserved.
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
