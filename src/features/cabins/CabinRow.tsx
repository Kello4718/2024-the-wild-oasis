import styled from "styled-components";
import { CabinData } from "../../types/types";
import { formatCurrency } from "../../utils/helpers";

const StyledTableRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 1fr 1fr 1fr;
    column-gap: 2rem;
    align-items: center;

    &:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-100);
    }
`;

const StyledImg = styled.img`
    width: 100%;
    height: auto;
    aspect-ratio: 3 / 2;
    display: block;
    object-fit: cover;
    object-position: center;
    padding: 2rem;
`;

const StyledCabin = styled.span`
    font-size: 1.6rem;
    font-weight: 600;
    font-family: "Sono";
    color: var(--color-grey-600);
    padding: 2rem;
`;

const StyledCapacity = styled.span`
    font-size: 1.6rem;
    font-weight: 600;
    font-family: "Sono";
    color: var(--color-grey-600);
    padding: 2rem;
`;

const StyledPrice = styled.span`
    font-family: "Sono";
    font-weight: 600;
    padding: 2rem;
`;

const StyledDiscount = styled.span`
    font-family: "Sono";
    font-weight: 500;
    color: var(--color-green-700);
    padding: 2rem;
`;

const StyledButton = styled.button`
    font-family: "Sono";
    font-weight: 500;
    color: var(--color-green-700);
`;

const CabinRow = ({ cabin }: { cabin: CabinData }) => {
    const { image, name, description, maxCapacity, regularPrice, discount } =
        cabin;
    return (
        <StyledTableRow>
            <StyledImg src={image} alt={description} />
            <StyledCabin>{name}</StyledCabin>
            <StyledCapacity>{maxCapacity}</StyledCapacity>
            <StyledPrice>{formatCurrency(regularPrice)}</StyledPrice>
            <StyledDiscount>{formatCurrency(discount)}</StyledDiscount>
            <StyledButton>Delete</StyledButton>
        </StyledTableRow>
    );
};

export default CabinRow;
