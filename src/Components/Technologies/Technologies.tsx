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
        <div>
            {
                technologies.map((technology) => <TechnologyCard key={technology.id} technology={technology} />)
            }
        </div>
    );
};

export default Technologies;