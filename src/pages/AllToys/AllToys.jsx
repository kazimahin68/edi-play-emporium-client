import { useLoaderData } from "react-router-dom";
import AllToyRow from "./AllToyRow";
import { useState } from "react";

const AllToys = () => {
    const toys = useLoaderData();
    const [displayToy, setDisplayToy] = useState(false)
    const handleShowAll = () => {
        setDisplayToy(!displayToy)
    }

    const allToys = [...toys];
    const shownToys = allToys.slice(0, 20);
    const toysToSHow = displayToy ? toys : shownToys;
    return (
        <div>
            <div className="overflow-x-auto md:w-4/5 mx-auto mt-12">
                <table className="table w-full table-zebra xl:table-fixed">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial No</th>
                            <th>Toy Name</th>
                            <th>Seller Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toysToSHow.map((toy, index) => <AllToyRow key={toy._id} toy={toy}
                                index={index}
                            ></AllToyRow>)
                        }
                    </tbody>
                    <tfoot className="w-full">
                        <div className='text-center bg-white rounded-lg p-2'>
                            <button onClick={handleShowAll} className='btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border-none'>{displayToy ? "Show Less Toys" : "Show All Toys"}</button>
                        </div>

                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default AllToys;