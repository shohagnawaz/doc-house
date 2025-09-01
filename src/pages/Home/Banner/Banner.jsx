import drImage from "../../../assets/Home/Banner/drImage.png";
import "./banner-item.css";

const Banner = () => {
    return (
        <div className="banner-item md:flex justify-center items-center p-20">
            <div className="md:w-1/2">
                <h2 className="text-6xl">Your Best Medical Help Center</h2>
                <p>Lorem Ipsum is simply dummy text they are printing typesetting 
                    has been the industry’s stardard.
                </p>
                <button className="btn btn-error">All Service</button>
            </div>
            <div className="md:w-1/2">
                <img src={drImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;