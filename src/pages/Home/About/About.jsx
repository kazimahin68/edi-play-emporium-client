import 'aos/dist/aos.css';
const About = () => {
    return (
        <div data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-once="false"
            className="md:w-4/5 mx-auto px-20 mt-12 py-10 rounded-lg" style={{ backgroundImage: `url(https://i.ibb.co/qBP1Sf5/login-background.png)` }}>
            <h2 className="text-4xl font-bold text-center mb-10 opacity-80">About the EduPlay Emporium By Author</h2>
            <div className="flex items-center gap-10 flex-col xl:flex-row mb-10">
                <img className="rounded-full md:w-1/2 w-full" src='https://i.ibb.co/4fB8Rz2/elegant-man-with-folded-arms-1262-727.png' alt="" />

                <div className="md:w-1/2 w-full">
                    <h1 className="font-extrabold text-4xl text-center mb-5 opacity-80">Welcome to our educational toy website!</h1>
                    <p className="opacity-80 mb-5">At EduPlay Emporium, we are dedicated to providing children with an exceptional learning experience through our carefully curated collection of educational toys. Our goal is to empower children to explore, discover, and learn in a fun and engaging way.</p>
                </div>
            </div>
            <div>
                <p className="opacity-80 mb-5">We understand the importance of play in a childs development. Thats why we handpick toys that not only entertain but also foster essential skills and knowledge. From early learning toys that promote sensory exploration and motor skills development to advanced STEM toys that stimulate problem-solving and critical thinking, we have something for every age and interest.</p>

                <p className="opacity-80 mb-5">Our team of experts meticulously selects each toy based on its educational value, safety standards, and durability. We prioritize toys that encourage creativity, imagination, and independent thinking. Whether it is building blocks, puzzles, science kits, or arts and crafts, you can trust that our toys are designed to inspire and educate.</p>

                <p className="opacity-80 mb-5">We believe that learning should be an exciting adventure, and our website is designed to make your toy shopping experience seamless and enjoyable. Browse through our user-friendly categories, read detailed product descriptions, and take advantage of our customer reviews to make informed decisions. Our commitment to quality extends beyond the toys themselves, we also provide excellent customer service to ensure your satisfaction.</p>

                <p className="opacity-80 mb-5">Join us in our mission to make learning a joyous journey. Explore our website, discover the perfect educational toys for your child, and witness the magic of learning through play. Together, lets inspire young minds and shape a brighter future!</p>
            </div>

        </div>
    );
};

export default About;