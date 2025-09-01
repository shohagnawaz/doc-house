const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center p-20">
            <h3 className="text-3xl">{heading}</h3>
            <p className="px-40">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;