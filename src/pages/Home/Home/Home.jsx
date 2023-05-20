import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";

const Home = () => {
    const toys = useLoaderData();
    let galleryToy = [];
    if (toys.length > 9) {
        galleryToy = toys.slice(0, 9)
    }
    // const uniqueSubcategory = uniqBy(toys, 'subCategory').map(toy => toy.subCategory)

    return (
        <div>
            <Banner></Banner>
            <div className="md:w-4/5 mx-auto px-20 py-10 rounded-lg" style={{ backgroundImage: `url(https://i.ibb.co/qBP1Sf5/login-background.png)` }}>
                <h2 className="font-extrabold text-4xl text-center mb-5 opacity-80">Toy Gallery</h2>
                <p className="w-3/4 text-center opacity-80 mx-auto mb-10">The toy gallery section showcases a diverse collection of educational toy pictures. This section presents a variety of engaging and interactive toys designed to foster learning and development in children. From building blocks to science kits, each image captures the essence of educational play. </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {
                        galleryToy.map(toy => <Gallery key={toy._id} toy={toy}></Gallery>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;