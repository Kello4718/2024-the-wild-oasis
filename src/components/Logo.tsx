import styled from "styled-components";

const StyledLogo = styled.img`
    width: auto;
    height: 9.6rem;
    display: block;
    margin: 0 auto;
`;

const Logo = () => {
    return <StyledLogo src="/logo-light.png" alt="Logo" />;
};

export default Logo;
