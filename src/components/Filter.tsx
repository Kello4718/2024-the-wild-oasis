import styled, { css } from "styled-components";

const StyledFilter = styled.div`
    display: flex;
    gap: 0.4rem;
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-sm);
    padding: 0.4rem;
`;

const FilterButton = styled.button`
    font-size: 1.4rem;
    font-weight: 500;
    background-color: var(--color-grey-0);
    border: none;
    border-radius: var(--border-radius-sm);
    padding: 0.44rem 0.8rem;
    transition: all 0.3s;

    ${(props) =>
        props.active &&
        css`
            color: var(--color-brand-50);
            background-color: var(--color-brand-600);
        `}

    &:hover:not(:disabled) {
        color: var(--color-brand-50);
        background-color: var(--color-brand-600);
    }
`;
