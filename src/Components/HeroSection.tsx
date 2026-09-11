import heroImg from '../assets/banner-stack.png'

const HeroSection = () => {
    return (
        <div className='w-[90%] mx-auto md:flex justify-between items-center'>
            <div className='md:w-[50%]  md:px-6 text-center md:text-start'>
                <h1 className='text-[40px] md:text-[60px] mt-10 md:mt-0 font-bold leading-[1.1]'>
                    Build Your Ideal <br />
                    <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent font-extrabold">
                        Development Stack
                    </span>
                </h1>
                <p className='text-[18px] text-[#475569] py-6'>Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.</p>
                <div className='flex gap-3 justify-center md:justify-start'>
                    <button className='cursor-pointer py-3 px-6 border text-lg font-semibold rounded-xl bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] text-white'>Explore Technologies</button>
                    <button className='cursor-pointer py-3 px-15 border-2 border-[#E5E7EB] text-lg font-semibold rounded-xl '>Learn More</button>
                </div>
            </div>
            <div className='justify-self-center'>
                <img src={heroImg} alt="" />
            </div>
        </div >
    );
};

export default HeroSection;