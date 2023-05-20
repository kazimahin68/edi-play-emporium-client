import { useLoaderData } from "react-router-dom";
import AllToyRow from "./AllToyRow";
import { useState } from "react";

const AllToys = () => {
    const toys = useLoaderData();
    const [displayToy, setDisplayToy] = useState(toys)
    console.log(displayToy.length)
    if(displayToy.length > 20){
        setDisplayToy(displayToy.slice(0, 20))
    }
    return (
        <div>
            <div className="overflow-x-auto md:w-4/5 mx-auto mt-12">
                <table className="table w-full table-zebra table-fixed">
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
                            displayToy.map((toy, index) => <AllToyRow key={toy._id} toy={toy}
                            index={index}
                            ></AllToyRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;