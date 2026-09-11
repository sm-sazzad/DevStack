import { FaStar } from "react-icons/fa";
import type { ITechnologyType } from "../../TechnologyType";


export interface technologyProps {
    technology: ITechnologyType;
}

const TechnologyCard = ({ technology }: technologyProps) => {
    return (
        <div className="">
            <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                <div className="flex justify-between items-center">
                    <div className="p-3 bg-slate-100 rounded-xl">
                        <img src={technology.icon} alt="" className="h-9 w-9 group-hover:transil" />
                    </div>
                    <span className="py-1 px-4 bg-pink-100 border-2 border-pink-200 text-pink-400 font-bold rounded-2xl">{technology.badge}</span>
                </div>
                <h1 className="font-bold py-3 text-2xl">{technology.name}</h1>
                <p className="text-[#64748B] text-[17px] py-2">{technology.description}</p>
                <div className="divider"></div>
                <div className="flex justify-between items-center font-semibold text-[#64748B]">
                    <span className="py-1.5 px-2 bg-stone-100 rounded-md">{technology.category}</span>
                    <p>{technology.difficulty}</p>
                    <p className="flex items-center gap-1"><FaStar className="text-yellow-400 text-[14px]" />{technology.rating}</p>
                </div>
                <button className="mt-5 w-full py-3 rounded-xl bg-[#0F172A] text-white text-sm font-semibold hover:bg-linear-to-r hover:from-[#FF5722] hover:via-[#D81B7E] hover:to-[#7C3AED] hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer">
                    Add to Stack</button>
            </div>
        </div>
    );
};

export default TechnologyCard;