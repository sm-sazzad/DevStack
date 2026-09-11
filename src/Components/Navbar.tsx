import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/logo-text.png"


const Navbar = () => {
    return (
        <div className="border-b border-gray-300 sticky top-0 bg-[white]">
            <nav className="flex justify-between gap-1 lg:w-[90%] mx-auto py-3 px-3 md:px-5 items-center">
                <RxHamburgerMenu className="lg:hidden block text-[20px]" />
                <div>
                    <img src={logo} alt="" className="cursor-pointer " />
                </div>
                <ul className="hidden lg:flex gap-6 font-semibold items-center text-[17px] text-[#475569]">
                    <li className="hover:text-pink-700"><a href="#">Home</a></li>
                    <li className="hover:text-pink-700"><a href="#">Product</a></li>
                    <li className="hover:text-pink-700"><a href="#">Technologies</a></li>
                    <li className="hover:text-pink-700"><a href="#">About</a></li>
                    <li className="hover:text-pink-700"><a href="#">Contact</a></li>
                </ul>
                <ul className="flex md:gap-1 text-[17px] font-semibold">
                    <button className="py-2 px-2 md:px-4 cursor-pointer rounded-3xl">Sign In</button>
                    <button className="btn btn-secondary rounded-3xl text-white">Sign Up</button>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;