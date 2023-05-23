import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import 'aos/dist/aos.css';

const WoodenToy = ({ woodenToy }) => {
    const { image, name, price, details, ratings } = woodenToy;
    return (
        <div data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
        className="mt-12 mb-5">
            <div className="flex flex-col md:flex-row gap-20 opacity-80">
                <img src={image} className="rounded-2xl w-1/2" alt="" />
                <div className="w-1/2 flex flex-col justify-center gap-5">
                    <h2 className="font-bold"><span className="text-xl">Toy Name:</span> {name}</h2>
                    <p className="font-bold"><span className="text-xl">Price: </span> {price} $</p>
                    <div className="flex gap-2">
                        <p className='font-bold'><span className="text-xl">Ratings:</span></p>
                        <Rating className="font-bold text-xl"
                            placeholderRating={ratings}
                            emptySymbol={<FaRegStar className="mt-1"></FaRegStar>}
                            placeholderSymbol={<FaStar className='mt-1 text-yellow-400'></FaStar>}
                            fullSymbol={<FaStar className="mt-2 text-orange-400"></FaStar>}
                        />
                        <p className='font-bold text-xl'><small className=''>({ratings})</small></p>
                    </div>
                <div className="mt-5 opacity-80">
                    <p className="font-bold"><span className="text-xl">Toy Details:</span> {details}</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default WoodenToy;