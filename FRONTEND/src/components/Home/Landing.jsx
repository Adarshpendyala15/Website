import Particle from '../Particle';
import './Landing.css';


export default function Landing() {


    return (

        <div className="h1-div">
            {/* <Particle className="particles"/> */}
            <div className="landing-info">
                <div className="landing-logo">
                        <img src="dq_logo.png" alt="" />
                </div>

                <div className="landing-text">
                    <h1>VJ Data Questers</h1>
                    <h3>VNR VJIET, hyderabad</h3>
                    <p>LEARN IMPLEMENT COLLABORATE</p>
                </div>
            </div>

            <div className="gradient-bg">
                <svg xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                            <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
                </svg>
                <div className="gradients-container">
                    <div className="g1"></div>
                    <div className="g2"></div>
                    <div className="g4"></div>
                </div>
            </div>

        </div>
    )
}