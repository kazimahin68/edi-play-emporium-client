import { FaGithub, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const {logIn, googleLogin} = useContext(AuthContext);
    
    const img = 'https://i.ibb.co/Cswbnhw/toy-constructor-isometric-blocks-1284-26315.png';

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const location = useLocation();
    // console.log(location)
    const from = location?.state?.from?.pathname || '/';
    const navigate = useNavigate()

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        logIn(email, password)
            .then(() => {
                setSuccess('You are successfully logged in');
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error)
            })
    }

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(() =>{
            navigate(from, { replace: true })
        })
        .then(error =>{
            setError(error)
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
                    <h1 className="text-5xl font-bold pt-10 text-center">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
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
                            <p className='text-green-600'>{success}</p>
                            <p className='text-red-600'>{error}</p>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn font-bold bg-[#7c9c05] border-none hover:bg-[#a5c926]" value="Sign In" />
                        </div>
                    </form>
                    <div>
                        <div className='text-center mb-5 font-bold divider'>Or Sing In With</div>
                        <div className='flex justify-center items-center gap-3 mb-5'>
                            <button onClick={handleGoogleLogin} className='btn btn-outline rounded-full bg-base-200 border-none hover:bg-[#a5c926] text-[#31AA52]'><FaGoogle></FaGoogle></button>
                            <button className='btn btn-outline rounded-full bg-base-200 border-none hover:bg-[#a5c926] '><FaGithub></FaGithub></button>
                            <button className='btn btn-outline rounded-full bg-base-200 border-none hover:bg-[#a5c926] text-[#0A66C2]'><FaLinkedinIn></FaLinkedinIn></button>
                        </div>
                        <p className='text-center mb-5'>New to this site? <Link to='/register' className='text-[#7c9c05] hover:text-[#a5c926] font-bold'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;