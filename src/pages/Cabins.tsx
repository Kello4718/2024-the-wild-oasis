import { Dispatch, SetStateAction, createContext, useState } from "react";
import Heading from "../components/Heading";
import Row from "../components/Row";
import CabinTable from "../features/cabins/CabinTable";
import { Modal } from "../components/Modal";
import CabinForm from "../features/cabins/CabinForm";
import { Button } from "../components/Button";

type State = {
    showCabin: boolean;
    setShowCabin: Dispatch<SetStateAction<boolean>>;
};

export const CabinsContext = createContext<State | undefined>(undefined);

const Cabins = () => {
    const [showCabin, setShowCabin] = useState(false);
    return (
        <CabinsContext.Provider value={{ showCabin, setShowCabin }}>
            <Row type="horizontal">
                <Heading as="h1">All cabins</Heading>
                <p>fILTER SORT</p>
            </Row>
            <Row type="vertical">
                <CabinTable />
                {showCabin && (
                    <Modal>
                        <CabinForm />
                    </Modal>
                )}
                <Button
                    style={{ width: "max-content", margin: "0 0 0 auto" }}
                    onClick={() =>
                        setShowCabin((prevState: boolean) => !prevState)
                    }
                >
                    Create cabin
                </Button>
            </Row>
        </CabinsContext.Provider>
    );
};

export default Cabins;
