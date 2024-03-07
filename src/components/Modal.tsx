import { FC } from "react";
import { VscChromeClose } from "react-icons/vsc";
import styled from "styled-components";
import useCabinsContext from "../contexts/useCabinsContext";

type ModalProps = {
    children: JSX.Element;
};

const StyledModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--color-grey-0);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-lg);
    padding: 3.2rem 4rem;
    transition: all 0.5s;
`;

const StyledOverlay = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--backdrop-color);
    backdrop-filter: blur(4px);
    transition: all 0.5s;
    z-index: 1000;
`;

const StyledButtonClose = styled.button`
    position: absolute;
    top: 0.5rem;
    right: 1.5rem;
    transform: translateX(0.8rem);
    background: none;
    border: none;
    border-radius: var(--border-radius-sm);
    padding: 0.4rem;
    transition: all 0.2s;

    &:hover {
        background-color: var(--color-grey-100);
    }

    & svg {
        width: 2.4rem;
        height: 2.4rem;
        /* Sometimes we need both */
        /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
        color: var(--color-grey-500);
    }
`;

export const Modal: FC<ModalProps> = ({ children }) => {
    const { setShowCabin, setCabinForm } = useCabinsContext();
    const onCloseHandle = () => {
        setShowCabin(false);
        setCabinForm({
            name: "",
            maxCapacity: 0,
            regularPrice: 0,
            discount: 0,
            description: "",
            // image: { name: "" },
        });
    };
    return (
        <StyledOverlay>
            <StyledModal>
                {children}
                <StyledButtonClose onClick={onCloseHandle}>
                    <VscChromeClose />
                </StyledButtonClose>
            </StyledModal>
        </StyledOverlay>
    );
};
