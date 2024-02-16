import styled, { css } from "styled-components";

export const Button = styled("button")<{
    variation?: string;
    sizes?: string;
}>`
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    border: none;
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-sm);
    padding: 1.2rem 1.6rem;
    cursor: pointer;

    &:hover {
        background-color: var(--color-brand-700);
    }

    ${(props) => {
        if (props.variation === "primary")
            return css`
                color: var(--color-brand-50);
                background-color: var(--color-brand-600);

                &:hover {
                    background-color: var(--color-brand-700);
                }
            `;
        if (props.variation === "secondary")
            return css`
                color: var(--color-grey-600);
                background: var(--color-grey-0);
                border: 1px solid var(--color-grey-200);

                &:hover {
                    background-color: var(--color-grey-50);
                }
            `;
        if (props.variation === "danger")
            return css`
                color: var(--color-red-100);
                background-color: var(--color-red-700);

                &:hover {
                    background-color: var(--color-red-800);
                }
            `;
        if (props.sizes === "small")
            return css`
                font-size: 1.2rem;
                padding: 0.4rem 0.8rem;
                text-transform: uppercase;
                font-weight: 600;
                text-align: center;
            `;
        if (props.sizes === "medium")
            return css`
                font-size: 1.4rem;
                padding: 1.2rem 1.6rem;
                font-weight: 500;
            `;
        if (props.sizes === "large")
            return css`
                font-size: 1.6rem;
                padding: 1.2rem 2.4rem;
                font-weight: 500;
            `;
    }}
`;
