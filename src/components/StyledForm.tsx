import styled, { css } from "styled-components";

const StyledForm = styled("form")<{ type?: string }>`
    font-size: 1.4rem;
    overflow: hidden;
    ${(props) => {
        if (props.type !== "modal")
            return css`
                background-color: var(--color-grey-0);
                border: 1px solid var(--color-grey-100);
                border-radius: var(--border-radius-md);
                padding: 2.4rem 4rem;
            `;
        if (props.type === "modal")
            return css`
                width: 80rem;
            `;
    }}
`;

export default StyledForm;
