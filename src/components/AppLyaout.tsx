import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
    height: 100dvh;
    display: grid;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: max-content 1fr;
`;

const StyledMain = styled.main`
    background-color: var(--color-grey-50);
    padding: 4rem 4.8rem 6.4rem;
    overflow-y: scroll;
`;

const AppLayout = () => {
    return (
        <StyledAppLayout>
            <Header />
            <Sidebar />
            <StyledMain>
                <Outlet />
            </StyledMain>
        </StyledAppLayout>
    );
};

export default AppLayout;
