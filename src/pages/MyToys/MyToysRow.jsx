import { Link } from "react-router-dom";

const MyToysRow = ({ toy, handleDelete, index }) => {
    const { _id, toyName, subCategory, price, photo } = toy;
    return (
        <tr>
            <th className="text-center flex items-center gap-5 whitespace-normal">
                <p>{index + 1}.</p>
                <div className="w-28">
                    {photo && <img className="rounded-lg h-32 xl:h-28" src={photo} alt="Avatar" />}
                </div>
            </th>
            <td className="whitespace-normal">
                <div className="font-bold whitespace-normal">{toyName}</div>
            </td>
            <td className="whitespace-normal">
                <p className="font-bold">{subCategory}</p>
            </td>
            <td className="whitespace-normal">
                <p className="font-bold">$ {price}</p>
            </td>
            <td className="whitespace-normal">
                <div className="flex gap-4">
                    <button onClick={() => handleDelete(_id)} className="btn font-bold bg-[#7c9c05] border-none hover:bg-[#a5c926]">Delete</button>
                    <Link to={`/update-toy/${_id}`} className="btn font-bold bg-[#7c9c05] border-none hover:bg-[#a5c926]">Update</Link>
                </div>
            </td>
        </tr>
    );
};

export default MyToysRow;