import { FC, useEffect, useRef } from "react";
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
        color: var(--color-grey-500);
    }
`;

export const Modal: FC<ModalProps> = ({ children }) => {
    const { showCabin, setShowCabin, setCabinForm } = useCabinsContext();
    const onCloseHandle = () => {
        setShowCabin(false);
        setCabinForm(null);
        //TODO
    };

    const modalOverlayRef = useRef(null);

    useEffect(() => {
        const closeModalByEsc = (evt: KeyboardEvent) => {
            if (evt.key === "Escape") {
                setShowCabin(false);
                setCabinForm(null);
            }
        };
        showCabin && document.addEventListener("keydown", closeModalByEsc);
        return () => document.removeEventListener("keydown", closeModalByEsc);
    }, [showCabin, setShowCabin, setCabinForm]);

    useEffect(() => {
        const closeModalByClickOverlay = (evt: MouseEvent) => {
            if (evt.target === modalOverlayRef.current) {
                setShowCabin(false);
                setCabinForm(null);
            }
        };
        showCabin &&
            document.addEventListener("click", closeModalByClickOverlay);
        return () =>
            document.removeEventListener("click", closeModalByClickOverlay);
    }, [showCabin, setShowCabin, setCabinForm]);

    return (
        <StyledOverlay ref={modalOverlayRef}>
            <StyledModal>
                {children}
                <StyledButtonClose onClick={onCloseHandle}>
                    <VscChromeClose />
                </StyledButtonClose>
            </StyledModal>
        </StyledOverlay>
    );
};
