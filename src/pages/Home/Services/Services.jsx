import serImage from "../../../assets/Home/Service/drService.png";
import tImage from "../../../assets/Home/Service/tService.png";

const Services = () => {
    return (
        <div className="flex items-center justify-center p-20">
            <div className="mr-8 w-2xl">
                <img src={serImage} alt="" />
            </div>

            <div className="md:space-y-3">
                <h3 className="text-2xl">Our Service</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                    quae ab illo inve ntore veritatis et quasi architecto beatae vitae 
                    dicta sunt explicabo.
                </p>
                <img src={tImage} alt="" />
                <h4 className="text-2xl">Electro  Gastrology Therapy</h4>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                    quae ab illo inve ntore veritatis et quasi architecto beatae vitae 
                    dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error 
                </p>
                <p>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                    eaque ipsa quae ab illo inve ntore veritatis et quasi architecto 
                    beatae vitae dicta sunt explicabo.
                </p>
                <button className="btn btn-outline btn-error">More Details</button>
            </div>
        </div>
    );
};

export default Services;