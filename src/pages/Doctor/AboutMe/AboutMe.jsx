import AboutMe2 from "./AboutMe2";

const AboutMe = () => {
  return (
    <div className="px-40 mt-20 mb-20">
      <div>
        <h3 className="text-2xl">About me</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="grid grid-cols-2">
        <div className="mt-6 space-y-1">
          <h3 className="text-2xl mb-4">Education</h3>
          <h6 className="font-bold">American Dental Medical University</h6>
          <p>BDS</p>
          <p>1998 - 2003</p>
          <h6 className="font-bold">American Dental Medical University</h6>
          <p>MDS</p>
          <p>2003 - 2005</p>
          <h3 className="text-2xl my-4">Work & Experience</h3>
          <h6 className="font-bold">Glowing Smiles Family Dental Clinic</h6>
          <p>2010 - Present (5 years)</p>
          <h6 className="font-bold">Comfort Care Dental Clinic</h6>
          <p>2007 - 2010 (3 years)</p>
          <h6 className="font-bold">Dream Smile Dental Practice</h6>
          <p>2005 - 2007 (2 years)</p>
          <h3 className="text-2xl my-4">Services</h3>
          <div className="flex">
            <span className="status mt-2 mr-4"></span>
            <p>Tooth cleaning</p>
          </div>
          <div className="flex">
            <span className="status mt-2 mr-4"></span>
            <p>Root Canal Therapy</p>
          </div>
          <div className="flex">
            <span className="status mt-2 mr-4"></span>
            <p>Implants</p>
          </div>
          <div className="flex">
            <span className="status mt-2 mr-4"></span>
            <p>Composite Bonding</p>
          </div>
          <div className="flex">
            <span className="status mt-2 mr-4"></span>
            <p>Fissure Sealants</p>
          </div>
          <div className="flex">
            <span className="status mt-2 mr-4"></span>
            <p>Surgical Extractions</p>
          </div>
        </div>
        <div>
          <AboutMe2></AboutMe2>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
