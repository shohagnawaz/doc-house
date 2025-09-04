import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import Contact from "../Contact/Contact";
import Expert from "../Expert/Expert";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Doctor House || Home</title>
            </Helmet>
            <Banner></Banner>
            <Services></Services>
            <Card></Card>
            <Testimonials></Testimonials>
            <Expert></Expert>
            <Contact></Contact>
        </div>
    );
};

export default Home;