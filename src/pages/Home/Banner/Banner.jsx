import slider1 from '../../../assets/slider-1.png'
import slider2 from '../../../assets/slider-2.png'
import slider3 from '../../../assets/slider-3.png'
import slider4 from '../../../assets/slider-4.png'
const Banner = () => {
    return (
        <div className="carousel w-full xl:h-[600px] mb-12">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slider1} className="w-full rounded-b-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white p-5 h-full w-full flex items-center rounded-b-xl z-0 md:pl-20'>
                    <div className='w-full md:w-2/5 ml-10'>
                        <h2 className='font-extrabold md:text-4xl text-white md:mb-5'>
                            Magna-Tiles Clear Colors Set
                        </h2>
                        <p className='mb-5'>The Magna-Tiles Clear Colors Set is a versatile magnetic building toy that sparks creativity and imagination in children. It includes a collection of translucent, colorful tiles that can be easily connected using the built-in magnets. The set comes with various shapes, such as squares and triangles, allowing children to construct endless 2D and 3D creations.</p>
                            <button className='btn btn-outline hover:bg-orange-500 text-white'>See Details</button>
                    
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slider2} className="w-full rounded-b-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white p-5 h-full w-full flex items-center rounded-b-xl z-0 md:pl-20'>
                    <div className='w-full md:w-2/5 ml-10'>
                        <h2 className='font-extrabold md:text-4xl text-white md:mb-4'>
                            Wonder Workshop Dash Robot
                        </h2>
                        <p className='mb-4'>The Wonder Workshop Dash Robot is a fun and interactive robot companion that inspires creativity and learning in children. This programmable robot comes with a range of features and capabilities that make it an engaging educational tool. Using the Wonder Workshop apps, kids can control Dash, program it to follow paths, perform movements, and even interact with its environment through various sensors. The robot built-in microphone and speaker enable it to respond to voice commands and play sounds, adding a dynamic element to playtime. With the Blockly coding interface, children can explore coding concepts and create their own programs using a drag-and-drop interface. </p>
                        <button className='btn btn-outline hover:bg-orange-500 text-white'>See Details</button>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slider3} className="w-full rounded-b-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white p-5 h-full w-full flex items-center rounded-b-xl z-0 md:pl-20'>
                    <div className='w-full md:w-2/5 ml-10'>
                        <h2 className='font-extrabold md:text-4xl text-white md:mb-4'>
                            Fat Brain Toys Alphabet Puzzle Blocks
                        </h2>
                        <p className='mb-4'>The Fat Brain Toys Alphabet Puzzle Blocks offer a fun and educational way for children to learn the alphabet. This set includes a collection of wooden blocks, each featuring a different letter of the alphabet. The blocks are beautifully crafted with vibrant colors and child-safe finishes.</p>
                        <button className='btn btn-outline hover:bg-orange-500 text-white'>See Details</button>
                    </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={slider4} className="w-full rounded-b-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white p-5 h-full w-full flex items-center rounded-b-xl z-0 md:pl-20'>
                    <div className='w-full md:w-2/5 ml-10'>
                        <h2 className='font-extrabold md:text-4xl text-white md:mb-4'>
                            Cuisenaire Rods Math Manipulative Set
                        </h2>
                        <p className='mb-4'>The Cuisenaire Rods Math Manipulative Set is a versatile and effective tool for teaching mathematical concepts to children. This set includes a collection of colorful rods in different lengths, each representing a specific numeric value. The rods can be used to explore various mathematical operations, patterns, fractions, and more.</p>
                        <button className='btn btn-outline hover:bg-orange-500 text-white'>See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;