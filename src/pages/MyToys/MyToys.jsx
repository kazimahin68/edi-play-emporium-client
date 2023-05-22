import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch(`https://edu-play-emporium-server-kazimahin68.vercel.app/toys?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [user])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://edu-play-emporium-server-kazimahin68.vercel.app/toys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        const remaining = toys.filter(toy => toy._id !== id)
                        setToys(remaining)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success')
                        }
                    })
            }
        })
    }
    return (
        <div className = "overflow-x-auto w-full" >
            <table className="table w-full md:w-4/5 mx-auto mt-12">
                {/* head */}
                <thead>
                    <tr>
                        <th>Serial No</th>
                        <th>Name</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Delete/Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map(( toy, index) => <MyToysRow key={toy._id} toy={toy}
                            index = {index}
                            handleDelete={handleDelete}
                        ></MyToysRow>)
                    }
                </tbody>
            </table>
    </div >
    );
};

export default MyToys;