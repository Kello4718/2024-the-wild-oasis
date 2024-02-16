import { useContext } from "react";
import { CabinsContext } from "../pages/Cabins";

const useCabinsContext = () => {
    const context = useContext(CabinsContext);
    if (context === undefined) {
        throw Error("We use context in out area of announcement");
    }
    return context;
};

export default useCabinsContext;
