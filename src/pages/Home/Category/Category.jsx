import { useEffect, useState } from "react";
import DisplayCategory from "./displayCategory";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Category = () => {
    const [toys, setToys] = useState([])
    const [displayToys, setDisplayToys] = useState([])
    const [activeTab, setActiveTab] = useState('Alphabet Puzzle');
    // console.log(toys)

    useEffect(() => {
        fetch(`http://localhost:5000/toys`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])



    useEffect(() => {
        const result = toys.filter(toy => toy.subCategory == activeTab);
        console.log(result)
        setDisplayToys(result)
        AOS.init()
    }, [toys, activeTab])



    const handleActiveTab = tabName => {
        setActiveTab(tabName)
    }
    return (
        <div className="mt-12 md:w-4/5 mx-auto px-20 py-10 rounded-lg" style={{ backgroundImage: `url(https://i.ibb.co/qBP1Sf5/login-background.png)` }}>
            <div className="tabs mb-5">
                <div className="mb-5 font-bold">
                    <a onClick={() => handleActiveTab('Alphabet Puzzle')} className={`tab tab-lifted text-2xl ${activeTab == 'Alphabet Puzzle' ? 'bg-[#7c9c05]' : ''}`}>Alphabet Puzzle</a>
                    <a onClick={() => handleActiveTab('Coding Robot')} className={`tab tab-lifted text-2xl ${activeTab == 'Coding Robot' ? 'bg-[#7c9c05]' : ''}`}>Coding Robot</a>
                    <a onClick={() => handleActiveTab('Science Experiment Kit')} className={`tab tab-lifted text-2xl ${activeTab == 'Science Experiment Kit' ? 'bg-[#7c9c05]' : ''}`}>Science Experiment Kit</a>
                </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-10" >
                {
                    displayToys.map(toy => <DisplayCategory key={toy._id} toy={toy}></DisplayCategory>)
                }
            </div>
        </div>
    );
};

export default Category;