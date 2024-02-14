import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    to {
        transform: rotate(1turn)
    }
`;

const Spinner = styled.div`
    width: 6.4rem;
    aspect-ratio: 1;
    background: radial-gradient(
                farthest-side,
                var(--color-brand-600) 94%,
                #0000
            )
            top/10px 10px no-repeat,
        conic-gradient(#0000 30%, var(--color-brand-600));
    -webkit-mask: radial-gradient(
        farthest-side,
        #0000 calc(100% - 10px),
        #000 0
    );
    border-radius: 50%;
    animation: ${rotate} 1.5s infinite linear;
    margin: 4.8rem auto;
`;

export default Spinner;
