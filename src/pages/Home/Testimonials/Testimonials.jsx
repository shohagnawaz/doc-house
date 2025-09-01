import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Testimonials = () => {
    const [ reviews, setReviews ] = useState([]);
    useEffect(() => {
        fetch("reviews.json")
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
  return (
    <section className="my-20">
      <SectionTitle
        heading={"What Our Patients Says"}
        subHeading="Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    quae ab illo inve ntore veritatis et quasi architecto beatae 
                    vitae dicta sunt explicabo."
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            reviews.map(review => <SwiperSlide
                key={review._id}
            >
                <div className="flex flex-col items-center m-24">
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={review.rating}
                        readOnly
                    />
                    <p className="py-8">{review.details}</p>
                    <h3 className="text-3xl text-orange-500">{review.name}</h3>
                </div>
            </SwiperSlide>)
        }
        
      </Swiper>
    </section>
  );
};

export default Testimonials;
