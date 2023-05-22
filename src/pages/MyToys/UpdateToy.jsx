import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
    const toy = useLoaderData()
    const {_id, price, quantity, details} = toy;
    console.log(toy)

    const handleUpdateToy = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const updateToy = { price, quantity, details }
        fetch(`http://localhost:5000/toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Your change is successfully updated',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset();
                }
            })
        // console.log(toy)
    }
    return (
        <form onSubmit={handleUpdateToy} className="md:w-4/5 p-10 mx-auto mt-12 rounded-lg" style={{ backgroundImage: `url(https://i.ibb.co/qBP1Sf5/login-background.png)` }}>
            <div className="bg-white p-10 opacity-80 rounded-lg">
                <h2 className="text-center font-extrabold text-4xl mb-10">Update Toy Information</h2>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Price</label>
                        <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Toy Price" defaultValue={price} required />
                    </div>
                    <div>
                        <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900">Available Quantity</label>
                        <input type="number" name="quantity" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Quantity of Toy" defaultValue={quantity} required />
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="details" className="block mb-2 text-sm font-medium text-gray-900">Toy details</label>
                    <textarea id="details" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write about toy here..." defaultValue={details}></textarea>

                </div>
                <div className="text-center">
                    <button type="submit" className="btn font-bold bg-[#7c9c05] border-none hover:bg-[#a5c926] w-1/4">Submit</button>
                </div>
            </div>
        </form>
    );
};

export default UpdateToy;