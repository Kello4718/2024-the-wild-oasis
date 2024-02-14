import { BrowserRouter, Route, Routes } from "react-router-dom";

// const StyledApp = styled.main`
//     background-color: red;
//     padding: 2rem;
// `;

// const Input = styled.input`
//     border: 1px solid var(--color-grey-300);
//     background-color: var(--color-grey-0);
//     border-radius: var(--border-radius-sm);
//     padding: 0.8rem 1.2rem;
//     box-shadow: var(--shadow-sm);
// `;

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="dashboard" element={1} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
