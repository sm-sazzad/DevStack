import { FaStar } from "react-icons/fa";
import type { ITechnologyType } from "../../TechnologyType";
import { type Dispatch, type SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";
import { GiCheckMark } from "react-icons/gi";


export interface technologyProps {
    technology: ITechnologyType,
    selected: ITechnologyType[],
    setSelected: Dispatch<SetStateAction<ITechnologyType[]>>,
    // isSelected: boolean,
    // setIsSelected: Dispatch<SetStateAction<boolean>>
}

const TechnologyCard = ({ technology, selected, setSelected }: technologyProps) => {


    let isSelected = selected.some(n => n.id === technology.id);

    const handelButton = (technology: ITechnologyType) => {
        const newTechnologies = [...selected, technology];
        setSelected(newTechnologies);
        toast.success(`${technology.name} added to your Stack`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        })
    }

    return (
        <div>
            <div className={`flex flex-col h-full bg-white border-2 border-stone-200 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ${isSelected ? "border-stone-400" : ""}`}>
                <div className="flex justify-between items-center">
                    <div className="p-3 bg-slate-100 rounded-xl">
                        <img src={technology.icon} alt="" className="h-9 w-9" />
                    </div>
                    <span className="py-1 px-4 bg-pink-50 border-2 border-pink-100 text-[#D81B7E] font-bold rounded-2xl">{technology.badge}</span>
                </div>
                <h1 className="font-bold py-3 text-2xl">{technology.name}</h1>
                <p className="text-[#64748B] text-[17px] py-2 grow">{technology.description}</p>
                <div className="mt-auto">
                    <div className="divider"></div>
                    <div className="flex justify-between items-center font-semibold text-[#64748B]">
                        <span className="py-1.5 px-2 bg-stone-100 rounded-md">{technology.category}</span>
                        <p>{technology.difficulty}</p>
                        <p className="flex items-center gap-1"><FaStar className="text-yellow-400 text-[14px]" />{technology.rating}</p>
                    </div>
                    <button
                        disabled={isSelected}
                        onClick={() => handelButton(technology)}
                        className={`mt-5 w-full py-3 rounded-xl bg-[#0F172A] text-white text-sm font-semibold hover:bg-linear-to-r ${isSelected === true ? 'bg-[#2c333f] cursor-not-allowed' : 'hover:from-[#FF5722] hover:via-[#D81B7E] hover:to-[#7C3AED] cursor-pointer'} hover:shadow-lg hover:shadow-purple-500/20 `}>
                        {isSelected ? (<><GiCheckMark className="inline-block mr-2" />Added to Stack</>) : "Add to Stack"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TechnologyCard;