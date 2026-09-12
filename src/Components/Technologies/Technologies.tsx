import { use, useState } from "react";
import type { ITechnologyType } from "../../TechnologyType";
import TechnologyCard from "./TechnologyCard";
import { CiCircleRemove } from "react-icons/ci";
import { Bounce, toast } from "react-toastify";

export interface TechnologyPromiseProps {
    TechnologyPromise: Promise<ITechnologyType[]>
}

const Technologies = ({ TechnologyPromise }: TechnologyPromiseProps) => {

    const technologies = use(TechnologyPromise);

    const [selected, setSelected] = useState<ITechnologyType[]>([])




    const handelRemoveAllButton = () => {
        setSelected([]);
        toast.success(`Removed All item from your Stack`, {
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

    const handelRemoveButton = (selectedTec: ITechnologyType) => {
        const remainTechnologies = selected.filter(remove => remove.name !== selectedTec.name);
        setSelected(remainTechnologies);
        toast.success(`${selectedTec.name} removed from your Stack`, {
            position: "bottom-right",
            theme: "light",
            transition: Bounce,
        })
    }

    console.log(technologies);

    return (
        <div className="w-[90%] mx-auto">
            <div className="text-center mt-10 lg:mt-2 lg:text-start">
                <h1 className="text-5xl font-bold ">Explore the <span className="text-[#7C3AED]">Technologies</span></h1>
                <p className="text-lg py-6 text-[#64748B]">Pick one technology per category to build your ideal stack.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-[80%] ">
                    {
                        technologies.map((technology) => <TechnologyCard key={technology.id} technology={technology} selected={selected} setSelected={setSelected} />)
                    }
                </div>
                <div className="lg:w-[20%]">
                    <div className=" bg-white border border-stone-200 rounded-2xl p-5 shadow-sm hover:shadow-xl">
                        <h1 className="text-3xl font-bold ">Your Stack</h1>
                        <p className="text-md text-[#64748B] py-4">{selected.length === 0 ? ("No") : selected.length} Technology Selected</p>
                        {selected.length === 0 ? (
                            <div className="py-5 px-10 rounded-2xl outline-dashed outline-stone-300 text-md text-[#64748B]">
                                Your Stack is Empty
                            </div>) : (
                            selected.map(selectedTec =>
                                <div className="flex justify-between items-center mb-2 outline outline-stone-300 py-2 px-3 rounded-xl ">
                                    <div className="flex gap-3 items-center">
                                        <div className="p-2 bg-stone-100 rounded-xl">
                                            <img src={selectedTec.icon} alt="" className="h-9 w-9" />
                                        </div>
                                        <div className="font-medium ">
                                            <h1>{selectedTec.name}</h1>
                                            <p className="text-[#64748B]">{selectedTec.category}</p>
                                        </div>
                                    </div>
                                    <CiCircleRemove
                                        onClick={() => handelRemoveButton(selectedTec)}
                                        className="font-bold text-green-600 cursor-pointer text-2xl" />
                                </div>
                            )
                        )}
                        {
                            selected.length !== 0 ? (
                                <button
                                    onClick={() => handelRemoveAllButton()}
                                    className="w-full mt-6 py-2 bg-black text-white font-semibold rounded-xl cursor-pointer">
                                    Remove All
                                </button>
                            ) : ' '
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;


