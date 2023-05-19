import { FaGithub, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    
    const img = 'https://i.ibb.co/Cswbnhw/toy-constructor-isometric-blocks-1284-26315.png';

    const [success, setSuccess] = useState('');
    const navigate = useNavigate()

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(email, password)

        createUser(email, password)
            .then((result) => {
                const registeredUser = result.user;
                setSuccess('You are successfully Registered');
                updateUser(registeredUser, name, photo)
                form.reset();
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    const updateUser = (user, name, photo) =>{
        updateProfile(user, {
            displayName: name,
            photoURL : photo
        })
        .then(() => {})
        .then(error => {
            console.log(error)
        })
    }

    return (
        <div className="bg-base-100 mt-12 md:w-4/5 mx-auto rounded-xl p-10" style={{ backgroundImage: `url(https://i.ibb.co/qBP1Sf5/login-background.png)` }}>
            <div className="hero-content flex-col md:flex-row gap-10">
                <div className='w-full md:w-3/4 xl:w-1/2 relative'>
                    <img src={img} className="rounded-lg opacity-50 " />
                    <div className='absolute flex justify-center items-center flex-col inset-0 p-5' data-aos="fade-up" data-aos-duration="1000">
                        <h2 className='font-bold text-2xl text-center mb-5'>Welcome to <span className='text-red-600'>EduPlay</span> Emporium</h2>
                        <p className='font-bold text-center'>This is an educational toy shop is a haven for children development and learning. It offers a wide range of toys carefully curated to engage young minds in fun and educational experiences. The shop provides a stimulating environment where children and their parents can explore a diverse selection of toys designed to enhance various skills, such as problem-solving, creativity, critical thinking, and motor skills.</p>
                    </div>
                </div>
                <div className="card w-full md:w-3/4 xl:w-1/2 shadow-2xl bg-base-100 opacity-80">
                    <h1 className="text-5xl font-bold pt-10 text-center">Register</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="name" name='name' placeholder="Your Name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Type your email here" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Choose your password" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Photo Url</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo link" className="input input-bordered" required/>
                            <p className='text-green-600'>{success}</p>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn font-bold bg-[#7c9c05] border-none hover:bg-[#a5c926]" value="Sign In" />
                        </div>
                    </form>
                    <div>
                        <div className='text-center mb-5 font-bold divider'>Or Sing In With</div>
                        <div className='flex justify-center items-center gap-3 mb-5'>
                            <button className='btn btn-outline rounded-full bg-base-200 border-none hover:bg-[#a5c926] text-[#31AA52]'><FaGoogle></FaGoogle></button>
                            <button className='btn btn-outline rounded-full bg-base-200 border-none hover:bg-[#a5c926] '><FaGithub></FaGithub></button>
                            <button className='btn btn-outline rounded-full bg-base-200 border-none hover:bg-[#a5c926] text-[#0A66C2]'><FaLinkedinIn></FaLinkedinIn></button>
                        </div>
                        <p className='text-center mb-5'>Already have an account? <Link to='/register' className='text-[#7c9c05] hover:text-[#a5c926] font-bold'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;