import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import { GlobalStyles } from "./styles/GlobalStyles";

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
            <GlobalStyles></GlobalStyles>
            <BrowserRouter>
                <Routes>
                    <Route
                        index
                        element={<Navigate replace to={"/dashboard"} />}
                    />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="bookings" element={<Bookings />} />
                    <Route path="cabins" element={<Cabins />} />
                    <Route path="users" element={<Users />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="account" element={<Account />} />
                    <Route path="login" element={<Login />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
