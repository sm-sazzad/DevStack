import footerlogo from "../assets/logo-text.png"

const Footer = () => {
    return (
        <div className="mt-30 border-t border-stone-200">
            <footer className="grid grid-cols-1 lg:grid-cols-4 gap-3 justify-items-center items-start pt-20 pb-13 mx-24 border-b border-stone-200">
                <div className="text-center lg:text-start">
                    <img src={footerlogo} alt="" className="mx-auto lg:mx-0" />
                    <p className="font-xl text-[#64748B] py-4">Curated tools, technologies, and resources for developers building
                        modern software.</p>
                    <ul className="flex gap-10 lg:gap-6 font-bold py-4 justify-center lg:justify-start">
                        <li><a href="https://github.com/sm-sazzad">Github</a></li>
                        <li><a href="https://x.com/sm_sazzad58">Twitter</a></li>
                        <li><a href="https://www.linkedin.com/in/sm-sazzad/">Linkedin</a></li>
                    </ul>
                </div>
                <div className="hidden lg:block ">
                    <h1 className="text-[25px] font-bold">Product</h1>
                    <ul className="my-5 space-y-2 text-[#64748B] font-medium">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Technology</a></li>
                        <li><a href="#">Project</a></li>
                    </ul>
                </div>
                <div className="hidden lg:block ">
                    <h1 className="text-[25px] font-bold">Company</h1>
                    <ul className="my-5 space-y-2 text-[#64748B] font-medium">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div className="hidden lg:block ">
                    <h1 className="text-[25px] font-bold">Legal</h1>
                    <ul className="my-5 space-y-2 text-[#64748B] font-medium">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </footer>
            <div className="md:flex text-center justify-between mx-3 md:mx-24 my-10 text-lg text-[#64748B]">
                <span className="">© 2026 Dev Stack. All rights reserved.</span>
                <ul className="flex gap-4 justify-center md:justify-start">
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;