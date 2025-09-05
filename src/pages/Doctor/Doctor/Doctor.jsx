import { Helmet } from "react-helmet-async";
import DoctorProfile from "../DoctorProfile/DoctorProfile";
import DrRubby from "../DrRubby/DrRubby";
import Overview from "../Overview/Overview";

const Doctor = () => {
    return (
        <div>
            <Helmet>
                <title>Doctor House || Doctor</title>
            </Helmet>
            <DoctorProfile></DoctorProfile>
            <DrRubby></DrRubby>
            <Overview></Overview>
        </div>
    );
};

export default Doctor;