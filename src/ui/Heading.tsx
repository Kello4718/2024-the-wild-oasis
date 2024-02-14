import styled, { css } from "styled-components";

const Heading = styled.h1`
    ${(props) => {
        if (props.as === "h1")
            return css`
                font-size: 40px;
                font-weight: 600;
                background-color: yellow;
            `;
        if (props.as === "h2")
            return css`
                font-size: 30px;
                font-weight: 600;
                background-color: #6d6d53;
            `;
        if (props.as === "h3")
            return css`
                font-size: 20px;
                font-weight: 600;
                background-color: #0f1894;
            `;
    }}
`;

export default Heading;
