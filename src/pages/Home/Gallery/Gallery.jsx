
const Gallery = ({ toy }) => {
    const {photo, toyName} = toy;
    return (
        <div data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-once="false"

            className=" p-2 flex justify-center rounded-lg">
            <img className="h-60 w-80 rounded-lg drop-shadow-2xl border-[16px]" src={photo} alt="" title={toyName}></img>
        </div>
    );
};

export default Gallery;