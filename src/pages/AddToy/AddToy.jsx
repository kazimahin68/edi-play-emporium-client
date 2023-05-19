import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {
    const { user } = useContext(AuthContext);

    const handleToyAdd = event =>{
        event.preventDefault();
        const form = event.target;
        const userName = user?.displayName;
        const toyName = form.toy.value;
        const email = user?.email;
        const subCategory = form.category.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;
        const details = form.details.value;

        const toy = {userName, toyName, email, subCategory, price, ratings, quantity, photo, details}
        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(toy)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged === true){
                Swal.fire({
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
                form.reset();
            }
        })
        // console.log(toy)
    }
    return (
        <form onSubmit={handleToyAdd} className="md:w-4/5 p-10 mx-auto mt-12 rounded-lg" style={{ backgroundImage: `url(https://i.ibb.co/qBP1Sf5/login-background.png)` }}>
            <div className="bg-white p-10 opacity-80 rounded-lg">
                <h2 className="text-center font-extrabold text-4xl mb-10">Add a Toy</h2>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                        <input type="text" name="user" id="user_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your Name" defaultValue={user?.displayName} required />
                    </div>
                    <div>
                        <label htmlFor="toys_name" className="block mb-2 text-sm font-medium text-gray-900">Toys Name</label>
                        <input type="text" name="toy" id="toys_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Toy Name" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your Email" defaultValue={user?.email} required />
                    </div>
                    <div>
                        <label htmlFor="sub-category" className="block mb-2 text-sm font-medium text-gray-900">Top Category</label>
                        <input type="text" name="category" id="sub-category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Category of toys" required />
                    </div>
                    <div>
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Price</label>
                        <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Toy Price" required />
                    </div>
                    <div>
                        <label htmlFor="ratings" className="block mb-2 text-sm font-medium text-gray-900">Ratings</label>
                        <input type="text" name="ratings" id="ratings" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ratings" required />
                    </div>
                    <div>
                        <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900">Available Quantity</label>
                        <input type="number" name="quantity" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Quantity of Toy" required />
                    </div>
                    <div>
                        <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900">Photo Url</label>
                        <input type="url" name="photo" id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Toy Photo Link" required />
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="details" className="block mb-2 text-sm font-medium text-gray-900">Toy details</label>
                    <textarea id="details" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write about toy here..."></textarea>

                </div>
                <div className="text-center">
                    <button type="submit" className="btn font-bold bg-[#7c9c05] border-none hover:bg-[#a5c926] w-1/4">Submit</button>
                </div>
            </div>
        </form>

    );
};

export default AddToy;