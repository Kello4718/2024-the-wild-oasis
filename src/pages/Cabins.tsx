import { Dispatch, SetStateAction, createContext, useState } from "react";
import Heading from "../components/Heading";
import Row from "../components/Row";
import CabinTable from "../features/cabins/CabinTable";
import { Modal } from "../components/Modal";
import CabinForm from "../features/cabins/CabinForm";
import { Button } from "../components/Button";
import { CabinFormData } from "../types/types";

type State = {
    showCabin: boolean;
    setShowCabin: Dispatch<SetStateAction<boolean>>;
    cabinForm: CabinFormData | null;
    setCabinForm: Dispatch<SetStateAction<CabinFormData | null>>;
    setStatus: Dispatch<SetStateAction<string>>;
    error: Error;
    setError: Dispatch<SetStateAction<Error>>;
};

export const CabinsContext = createContext<State | undefined>(undefined);

const Cabins = () => {
    const [showCabin, setShowCabin] = useState(false);
    const [status, setStatus] = useState("");
    const [error, setError] = useState<Error>(new Error());
    const [cabinForm, setCabinForm] = useState<CabinFormData | null>(null);

    return (
        <CabinsContext.Provider
            value={{
                showCabin,
                setShowCabin,
                cabinForm,
                setCabinForm,
                setStatus,
                error,
                setError,
            }}
        >
            {status === "success" && (
                <Row type="horizontal">
                    <Heading as="h1">All cabins</Heading>
                    <p>Filter sort</p>
                </Row>
            )}
            <Row type="vertical">
                <CabinTable />
                {showCabin && (
                    <Modal>
                        <CabinForm />
                    </Modal>
                )}
                {status === "success" && (
                    <Button
                        style={{ width: "max-content", margin: "0 0 0 auto" }}
                        onClick={() =>
                            setShowCabin((prevState: boolean) => !prevState)
                        }
                    >
                        Create cabin
                    </Button>
                )}
            </Row>
        </CabinsContext.Provider>
    );
};

export default Cabins;
