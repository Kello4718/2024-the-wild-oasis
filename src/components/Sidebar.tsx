import styled from "styled-components";

const StyledSidebar = styled.aside`
    grid-column: 1 / 2;
    grid-row: 1 / -1;
    background-color: var(--color-grey-0);
    padding: 3.2rem 2.4rem;
    border-right: 1px solid var(--color-grey-100);
`;

const Sidebar = () => {
    return <StyledSidebar>Sidebar</StyledSidebar>;
};

export default Sidebar;