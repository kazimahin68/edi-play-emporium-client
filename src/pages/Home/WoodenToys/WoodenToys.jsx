import { useEffect, useState } from "react";
import WoodenToy from "./WoodenToy";

const WoodenToys = () => {
    const [woodenToys, setWoodenToys] = useState([])
    useEffect(() => {
        fetch('https://edu-play-emporium-server-kazimahin68.vercel.app/wooden-toys')
            .then(res => res.json())
            .then(data => {
                setWoodenToys(data)
            })
    }, [])
    // console.log(woodenToys)
    return (
        <div className="md:w-4/5 mx-auto p-10 mt-12 rounded-lg min-h-screen" style={{ backgroundImage: `url(https://i.ibb.co/qBP1Sf5/login-background.png)` }}>
            <h2 className="text-4xl font-bold text-center mb-10 opacity-80">Some Popular Math Learning Wooden Toys</h2>
            {
                woodenToys.map(woodenToy => <WoodenToy key={woodenToy._id} woodenToy={woodenToy}></WoodenToy>)
            }
        </div>
    );
};

export default WoodenToys;