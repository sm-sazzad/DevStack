import { use } from "react";
import type { ITechnologyType } from "../../TechnologyType";
import TechnologyCard from "./TechnologyCard";

export interface TechnologyPromiseProps {
    TechnologyPromise: Promise<ITechnologyType[]>
}

const Technologies = ({ TechnologyPromise }: TechnologyPromiseProps) => {

    const technologies = use(TechnologyPromise);
    console.log(technologies);

    return (
        <div className="w-[90%] mx-auto">
            <div className="text-center mt-10 lg:mt-2 lg:text-start">
                <h1 className="text-5xl font-bold ">Explore the <span className="text-[#D81B7E]">Technologies</span></h1>
                <p className="text-lg py-6 text-[#64748B]">Pick one technology per category to build your ideal stack.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-[80%] ">
                    {
                        technologies.map((technology) => <TechnologyCard key={technology.id} technology={technology} />)
                    }
                </div>
                <div className="lg:w-[20%]">
                    <div className=" bg-white border border-stone-200 rounded-2xl p-5 shadow-sm hover:shadow-xl">
                        <h1 className="text-3xl font-bold ">Your Stack</h1>
                        <p className="text-md text-[#64748B] py-4">No Technology Selected</p>
                        <div className="py-5 px-10 rounded-2xl outline-dashed outline-stone-300 text-md text-[#64748B]">
                            Your Stack is Empty
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;


