import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const AllToysRow = ({ toy, index }) => {
    const {user} = useContext(AuthContext)
    const {_id, userName, toyName, subCategory, price, photo, quantity } = toy;
    const handleAlert = () =>{
        if(!user){
            toast('You have to log in first to view details')
        }
    }

    return (
        <tr>
            <th className="text-center flex justify-center items-center gap-4 whitespace-normal">
               <p>{index + 1}.</p>
                <div className="w-28">
                    {photo && <img className="rounded-lg h-32 xl:h-28" src={photo} alt="Avatar" />}
                </div>
            </th>
            <td className="whitespace-normal">
                <div className="flex flex-col items-center space-x-3">
                    <div>
                        <div className="font-bold whitespace-normal">{toyName}</div>
                    </div>
                </div>
            </td>
            <td className="font-bold whitespace-normal">{userName}</td>
            <td className="whitespace-normal">
                <p className="font-bold">{subCategory}</p>
            </td>
            <td className="whitespace-normal">
                <p className="font-bold">$ {price}</p>
            </td>
            <td className="whitespace-normal">
                <p className="font-bold">{quantity}</p>
            </td>
            <td className="whitespace-normal">
                <Link to={`/toy/${_id}`} onClick={handleAlert} className="btn font-bold bg-[#7c9c05] border-none hover:bg-[#a5c926]">View Details</Link>
                <Toaster></Toaster>
            </td>
        </tr>
    );
};

export default AllToysRow;