import {cameraImg } from "../utils/index.js";
import {useGSAP} from "@gsap/react";
import {animateWithGsap} from "../utils/animations.jsx";
import gsap from "gsap";

const Camera = () => {

    useGSAP(()=>{
        animateWithGsap("#camera-heading", {
            opacity:1,
            duration: 2,
            ease: "ease-in"
        })

        gsap.from("#camera", {
            scrollTrigger: {
                trigger: "#camera",
                start: "20% bottom"
            },
            opacity: 0,
            scale: 1.5,
            duration: 2,
            ease: "power2.inOut"
        })

        animateWithGsap("#camera-paragraph", {
            opacity:1,
            duration: 2,
            ease: "ease-in"
        })
    })

    return (
        <section className="common-padding">
            <div className="screen-max-width">
                <div className="flex flex-col left-0">
                    <h2 id="camera-heading">
                        A camera that captures your
                        <br/>
                        wildest imagination.
                    </h2>
                    <p id="camera-paragraph">
                        From dramatic framing flexibility to next-generation portraits, see what you
                        <br/>
                        can do with our most powerful iPhone camera system.
                    </p>
                </div>
                <div id="camera" className="flex-center w-full my-20">
                    <img className="bg-transparent" src={cameraImg} alt="camera" width={1200} height={900}/>
                </div>

                <div className="flex flex-1 justify-center flex-col">
                    <p className="text-gray text-xl font-normal md:font-semibold">
                        A green iguana, captured by the 48MP Main camera
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Camera;