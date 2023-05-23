import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const toy = useLoaderData()
    const { photo, toyName, userName, email, price, ratings, quantity, details } = toy;
    return (
        <div className="md:w-4/5 mx-auto p-10 mt-12 rounded-lg min-h-screen" style={{ backgroundImage: `url(https://i.ibb.co/qBP1Sf5/login-background.png)` }}>
            <h2 className="text-4xl font-bold text-center mb-10">{toyName}</h2>
            <div className="flex flex-col md:flex-row gap-20 opacity-80">
                <img src={photo} className="rounded-xl w-1/2" alt="" />
                <div className="w-1/2 flex flex-col justify-center gap-5">
                    <h2 className="font-bold"><span className="text-xl">Toy Name:</span> {toyName}</h2>
                    <h2 className="font-bold"><span className="text-xl">Seller Name:</span> {userName}</h2>
                    <p className="font-bold"><span className="text-xl">Price: </span> {price} $</p>
                    <p className="font-bold"><span className="text-xl">Available Quantity:</span> {quantity} Piece</p>
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
                </div>
            </div>
            <div className="mt-5 opacity-80">
                <p className="font-bold"><span className="text-xl">Toy Details:</span> {details}</p>

                <p className="font-bold mt-4"><span className="text-xl">Contact with seller:</span> <span className="text-blue-500">{email}</span></p>
            </div>
        </div>
    );
};

export default ToyDetails;