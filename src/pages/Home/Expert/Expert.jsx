import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import drImage from "../../../assets/Home/expertDr/expertDr.png";
import drImage2 from "../../../assets/Home/expertDr/expertDr2.png";
import drImage3 from "../../../assets/Home/expertDr/experDr3.png";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Expert = () => {
  return (
    <section className="mb-10">
      <SectionTitle
        heading="Our Expert Doctor"
        subHeading="Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    quae ab illo inve ntore veritatis et quasi architecto beatae 
                    vitae dicta sunt explicabo."
      ></SectionTitle>
      <div className="flex space-x-4 md:pl-40">
        <div className="card w-96 shadow-sm border-1">
          <figure className="px-10 pt-10">
            <img src={drImage} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Karyen Anderson</h2>
            <p>BTP - Senior Physiotherapist</p>
            <Rating style={{ maxWidth: 140 }} value={5} readOnly />
            <div className="divider"></div>

            <p>Dhanmondi, Dhaka, Bangladesh</p>
            <p>Available on Mon, 22 December</p>
            <p>$ 15</p>
            <div className="card-actions">
              <button className="btn btn-outline btn-error w-60">View Profile</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm border-1">
          <figure className="px-10 pt-10">
            <img src={drImage2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Karyen Anderson</h2>
            <p>BTP - Senior Physiotherapist</p>
            <Rating style={{ maxWidth: 140 }} value={5} readOnly />
            <div className="divider"></div>

            <p>Dhanmondi, Dhaka, Bangladesh</p>
            <p>Available on Mon, 22 December</p>
            <p>$ 15</p>
            <div className="card-actions">
              <button className="btn btn-error w-60">View Profile</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm border-1">
          <figure className="px-10 pt-10">
            <img src={drImage3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Karyen Anderson</h2>
            <p>BTP - Senior Physiotherapist</p>
            <Rating style={{ maxWidth: 140 }} value={5} readOnly />
            <div className="divider"></div>

            <p>Dhanmondi, Dhaka, Bangladesh</p>
            <p>Available on Mon, 22 December</p>
            <p>$ 15</p>
            <div className="card-actions">
              <button className="btn btn-outline btn-error w-60">View Profile</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expert;
