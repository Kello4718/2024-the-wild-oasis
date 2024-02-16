import styled from "styled-components";
import { CabinTableData } from "../../types/types";
import { formatCurrency } from "../../utils/helpers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { Button } from "../../components/Button";

const StyledTableRow = styled.tr`
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 1fr 1fr 1fr;
    column-gap: 2rem;
    align-items: center;

    &:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-100);
    }
`;

const StyledTableCell = styled.td``;

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

// const StyledButton = styled.button`
//     font-family: "Sono";
//     font-weight: 500;
//     color: var(--color-green-700);
// `;

const CabinRow = ({ cabin }: { cabin: CabinTableData }) => {
    const {
        image,
        name,
        description,
        maxCapacity,
        regularPrice,
        discount,
        id,
    } = cabin;

    const queryClient = useQueryClient();
    const { isPending, mutate, status } = useMutation({
        mutationFn: deleteCabin,
        onSuccess: () => {
            toast.success("Cabin was deleted 😊");
            queryClient.invalidateQueries({
                queryKey: ["cabin"],
            });
        },
        onError: () => toast.error("Woops... something that wrong... 😒"),
    });
    console.log(status);
    // TODO
    return (
        <StyledTableRow>
            <StyledTableCell>
                <StyledImg src={image} alt={description} />
            </StyledTableCell>
            <StyledTableCell>
                <StyledCabin>{name}</StyledCabin>
            </StyledTableCell>
            <StyledTableCell>
                <StyledCapacity>{maxCapacity}</StyledCapacity>
            </StyledTableCell>
            <StyledTableCell>
                <StyledPrice>{formatCurrency(regularPrice)}</StyledPrice>
            </StyledTableCell>
            <StyledTableCell>
                <StyledDiscount>{formatCurrency(discount)}</StyledDiscount>
            </StyledTableCell>
            <StyledTableCell>
                <Button
                    style={{ margin: "0 0 0 20px" }}
                    variation="secondary"
                    onClick={() => mutate(id)}
                    disabled={isPending ? true : false}
                >
                    {isPending ? "Deleting..." : "Delete"}
                </Button>
            </StyledTableCell>
        </StyledTableRow>
    );
};

export default CabinRow;
