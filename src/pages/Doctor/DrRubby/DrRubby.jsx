import { Rating } from "@smastrom/react-rating";
import DrRubbyImg from "../../../assets/DrRubby/DrRubby.jpg";
import { SlLocationPin } from "react-icons/sl";

const DrRubby = () => {
    return (
        <div className="flex py-20 px-40">
            <div className="md:w-80">
                <img src={DrRubbyImg} alt="" />
            </div>
            <div className="ml-10 space-y-4">
                <h3 className="text-4xl font-bold">Dr. Rubby Roy</h3>
                <p>MBBS, MD - General Medicine</p>
                <Rating style={{ maxWidth: 140 }} value={4} readOnly />
                <div className="flex">
                    <SlLocationPin className="mt-1" />
                    <p className="ml-4">Dhanmondi, Dhaka, Bangladesh - Get Directions</p>
                </div>
                <div className="flex space-x-4 pt-4">
                    <div className="bg-base-300 grid h-32 w-32 place-items-center rounded-2xl">content</div>
                    <div className="bg-base-300 grid h-32 w-32 place-items-center rounded-2xl">content</div>
                    <div className="bg-base-300 grid h-32 w-32 place-items-center rounded-2xl">content</div>
                    <div className="bg-base-300 grid h-32 w-32 place-items-center rounded-2xl">content</div>
                    <div className="bg-base-300 grid h-32 w-32 place-items-center rounded-2xl">content</div>
                </div>
                <div className="pt-4">
                    <button className="btn btn-error btn-outline rounded-2xl">Dental Filling</button>
                    <button className="btn btn-error btn-outline ml-6 rounded-2xl">Teeth Whitneing</button>                    
                </div>
            </div>
        </div>
    );
};

export default DrRubby;