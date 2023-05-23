import { useContext } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const DisplayCategory = ({ toy }) => {
    const {user} = useContext(AuthContext)
    const handleToast = () =>{
        if(!user){
            toast('You have to log in first to view details')
        }
    }
    // console.log(toy)
    const { _id, toyName, ratings, price, photo } = toy;
    return (
        <div data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-once="false"
            className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="h-96" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toyName}</h2>
                <div>
                    <p className="font-bold mt-5"><span className="text-xl">Price: </span> {price} $</p>
                    <div className="flex mt-2">
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
                <div className="card-actions justify-center mt-5">
                    <Link to={`/toy/${_id}`} onClick={handleToast} className="btn  bg-[#7c9c05] border-none hover:bg-[#a5c926]">View Details</Link>
                    <Toaster></Toaster>
                </div>
            </div>
        </div>
    );
};

export default DisplayCategory;