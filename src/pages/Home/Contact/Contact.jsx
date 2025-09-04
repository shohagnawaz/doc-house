import { BsTelephoneOutbound } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="flex bg-[#07332F] py-20">
      <div className="md:w-1/3 p-10 space-y-8 ml-30">
        <h2 className="text-5xl">Contact With Us</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi.
        </p>
        <div className="flex">
          <BsTelephoneOutbound />
          <p className="ml-4">
            <small>+88 01750 14 14 14</small>
          </p>
        </div>
        <div className="flex">
          <IoLocationOutline />
          <p className="ml-4">
            <small>Dhanmondi, Dhaka, Bangladesh</small>
          </p>
        </div>
      </div>

      <div className="md:w-2/3 pl-18">
        <div className="card-body">
          <fieldset className="fieldset space-y-4">
            <div className="flex">
              <input type="text" className="input mr-4" placeholder="Name" />
              <input type="email" className="input" placeholder="Email" />
            </div>
            <div className="flex">
              <input type="text" className="input mr-4" placeholder="Mobile" />
              <input type="text" className="input" placeholder="Doctor Name" />
            </div>
            <div className="flex">
              <input type="date" className="input mr-4" placeholder="Date" />
              <input type="time" className="input" placeholder="time" />
            </div>           
            <button className="btn btn-error mt-4 w-2xl">Book Now</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Contact;
