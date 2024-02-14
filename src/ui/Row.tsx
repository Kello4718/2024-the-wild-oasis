import styled, { css } from "styled-components";

const Row = styled("div")<{ type?: string }>`
    display: flex;
    ${(props) => {
        if (props.type === "horizontal")
            return css`
                justify-content: space-between;
                align-items: center;
            `;
        if (props.type === "vertical")
            return css`
                flex-flow: column;
                gap: 2rem;
            `;
    }}
`;

Row.defaultProps = {
    type: "horizontal",
};

export default Row;
