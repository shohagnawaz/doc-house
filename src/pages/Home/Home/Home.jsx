import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Card></Card>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;