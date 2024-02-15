import styled, { css } from "styled-components";

const Heading = styled.h1`
    font-weight: 600;
    ${(props) => {
        if (props.as === "h1")
            return css`
                font-size: 40px;
            `;
        if (props.as === "h2")
            return css`
                font-size: 30px;
            `;
        if (props.as === "h3")
            return css`
                font-size: 20px;
            `;
    }}
`;

export default Heading;
