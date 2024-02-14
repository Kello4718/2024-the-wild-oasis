import styled from "styled-components";

const ButtonText = styled.button`
    text-align: center;
    font-weight: 500;
    transition: all 0.3s;
    background: none;
    border: none;
    border-radius: var(--border-radius-sm);
    color: var(--color-brand-600);

    &:hover,
    &:active {
        color: var(--color-brand-700);
    }
`;

export default ButtonText;
