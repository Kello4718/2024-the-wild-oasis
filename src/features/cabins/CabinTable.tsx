import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import getCabins from "../../services/apiCabins";
import Spinner from "../../components/Spinner";
import CabinRow from "./CabinRow";
import { CabinData } from "../../types/types";

const StyledCabinTable = styled.table`
    width: 100%;
    font-size: 1.4rem;
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);
    border-radius: 7px;
    overflow: hidden;
`;

const StyledCabinTableRow = styled.tr`
    font-weight: 600;
    text-transform: uppercase;
    text-align: left;
    letter-spacing: 0.4px;
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 1fr 1fr 1fr;
    column-gap: 2rem;
    align-items: center;
    color: var(--color-grey-600);
    background-color: var(--color-grey-50);
    border-bottom: 1px solid var(--color-grey-100);
`;

const StyledCabinTableHeader = styled.th`
    padding: 2rem;
`;

const CabinTable = () => {
    const { data, status } = useQuery({
        queryKey: ["cabin"],
        queryFn: getCabins,
    });
    console.log(data, status);
    if (status === "pending") return <Spinner />;
    return (
        <StyledCabinTable>
            <StyledCabinTableRow>
                <StyledCabinTableHeader>Photo</StyledCabinTableHeader>
                <StyledCabinTableHeader>Cabin</StyledCabinTableHeader>
                <StyledCabinTableHeader>Capacity</StyledCabinTableHeader>
                <StyledCabinTableHeader>Price</StyledCabinTableHeader>
                <StyledCabinTableHeader>Discount</StyledCabinTableHeader>
                <StyledCabinTableHeader>Action</StyledCabinTableHeader>
            </StyledCabinTableRow>
            {data?.map((cabin: CabinData) => (
                <CabinRow key={cabin.id} cabin={cabin} />
            ))}
        </StyledCabinTable>
    );
};

export default CabinTable;
