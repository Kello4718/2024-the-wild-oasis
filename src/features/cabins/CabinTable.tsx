import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getCabins } from "../../services/apiCabins";
import Spinner from "../../components/Spinner";
import CabinRow from "./CabinRow";
import { CabinTableData } from "../../types/types";
import ErrorFallback from "../../components/ErrorFallback";
import Row from "../../components/Row";
import { useState } from "react";

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

const StyleCabinCreateButton = styled.button`
    margin: 0 0 0 auto;
`;

const CabinTable = () => {
    const [showForm, setShowForm] = useState(false);
    console.log(showForm);
    //TODO
    const { data, status, error } = useQuery({
        queryKey: ["cabin"],
        queryFn: getCabins,
    });
    if (status === "pending") return <Spinner />;
    if (status === "error") return <ErrorFallback message={error.message} />;
    return (
        <Row type="vertical">
            <StyledCabinTable>
                <StyledCabinTableRow>
                    <StyledCabinTableHeader>Photo</StyledCabinTableHeader>
                    <StyledCabinTableHeader>Cabin</StyledCabinTableHeader>
                    <StyledCabinTableHeader>Capacity</StyledCabinTableHeader>
                    <StyledCabinTableHeader>Price</StyledCabinTableHeader>
                    <StyledCabinTableHeader>Discount</StyledCabinTableHeader>
                    <StyledCabinTableHeader>Action</StyledCabinTableHeader>
                </StyledCabinTableRow>
                {data?.map((cabin: CabinTableData) => (
                    <CabinRow key={cabin.id} cabin={cabin} />
                ))}
            </StyledCabinTable>
            <Row>
                <StyleCabinCreateButton
                    onClick={() => setShowForm((prevState) => !prevState)}
                >
                    Create cabin
                </StyleCabinCreateButton>
            </Row>
        </Row>
    );
};

export default CabinTable;
