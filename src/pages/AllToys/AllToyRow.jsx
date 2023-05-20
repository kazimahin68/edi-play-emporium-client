import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const AllToysRow = ({ toy, index }) => {
    const {user} = useContext(AuthContext)
    const {_id, userName, toyName, subCategory, price, photo, quantity } = toy;

    return (
        <tr>
            <th className="text-center flex justify-center items-center gap-4">
               <p>{index + 1}.</p>
                <div className="w-28">
                    {photo && <img className="rounded-lg h-28" src={photo} alt="Avatar" />}
                </div>
            </th>
            <td>
                <div className="flex flex-col items-center space-x-3">
                    <div>
                        <div className="font-bold whitespace-normal">{toyName}</div>
                    </div>
                </div>
            </td>
            <td className="font-bold whitespace-normal">{userName}</td>
            <td>
                <p className="font-bold">{subCategory}</p>
            </td>
            <td>
                <p className="font-bold">$ {price}</p>
            </td>
            <td>
                <p className="font-bold">{quantity}</p>
            </td>
            <td>
                <Link to={user? `/toy/${_id}` : '/login'} className="btn font-bold bg-[#7c9c05] border-none hover:bg-[#a5c926]">View Details</Link>
            </td>
        </tr>
    );
};

export default AllToysRow;