import './Leader.css'
import Carousel from 'react-bootstrap/Carousel';
import video1 from '../../assets/video1.mp4'


const Leader = () => {
    return (
        <>
            <div className="Text">
                <div>
                    <h1> Leaders Voice </h1>
                </div>

                <Carousel indicators={false}  interval={8000}>
                    <Carousel.Item>

                        <div className='content'>
                            <div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="video">
                            <video width="350" height="200" controls >
                                <source src={video1} type="video/mp4"/>
                            </video>
                        
                            </div>
                        </div>
                    </Carousel.Item>


                    <Carousel.Item>
                        <div className='content'>
                            <div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="video">
                                <video width="350" height="200" controls >
                                <source src={video1} type="video/mp4"/>
                            </video>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className='content'>
                            <div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="video">
                                <video width="350" height="200" controls >
                                <source src={video1} type="video/mp4"/>
                            </video>
                            </div>
                        </div>
                    </Carousel.Item>

                </Carousel>
            </div>
        </>
    )
}
export default Leader