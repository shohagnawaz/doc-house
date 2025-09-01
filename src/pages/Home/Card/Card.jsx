import { BsTelephoneOutbound } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const Card = () => {
  return (
    <div className="flex justify-center my-20">
      <div className="card mr-5 bg-[#07332F] w-80">
        <div className="card-body items-center text-center">
            <div>
                <MdOutlineWatchLater></MdOutlineWatchLater>
            </div>
          <h2 className="card-title">Opening hour</h2>
          <p>Open 9.00 am to 5.00pm Everyday</p>
        </div>
      </div>

      <div className="card mr-5 bg-[#F7A582] w-80">
        <div className="card-body items-center text-center">
            <div>
                <SlLocationPin></SlLocationPin>
            </div>
          <h2 className="card-title">Opening hour</h2>
          <p>Open 9.00 am to 5.00pm Everyday</p>
        </div>
      </div>

      <div className="card bg-[#07332F] w-80">
        <div className="card-body items-center text-center">
            <div>
                <BsTelephoneOutbound></BsTelephoneOutbound>
            </div>
          <h2 className="card-title">Opening hour</h2>
          <p>Open 9.00 am to 5.00pm Everyday</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
