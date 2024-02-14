import styled from "styled-components";

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

const Overlay = styled.div`
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

const Button = styled.button`
    position: absolute;
    top: 1.2rem;
    right: 1.9rem;
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
