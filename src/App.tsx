import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import Button from "./ui/Button";

const StyledApp = styled.main`
    background-color: red;
    padding: 2rem;
`;

const H1 = styled.h1`
    font-size: 40px;
    font-weight: 600;
    background-color: yellow;
`;

const Input = styled.input`
    border: 1px solid var(--color-grey-300);
    background-color: var(--color-grey-0);
    border-radius: var(--border-radius-sm);
    padding: 0.8rem 1.2rem;
    box-shadow: var(--shadow-sm);
`;

const App = () => {
    return (
        <>
            <GlobalStyles />
            <StyledApp>
                <H1>Helllooooooooooo</H1>
                <Button>Wait</Button>
                <Button>Wait</Button>
                <Input />
                <Input />
            </StyledApp>
        </>
    );
};

export default App;
