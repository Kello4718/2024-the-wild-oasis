import styled from "styled-components";
import { CabinTableData } from "../../types/types";
import { formatCurrency } from "../../utils/helpers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { Button } from "../../components/Button";
import Row from "../../components/Row";
import useCabinsContext from "../../contexts/useCabinsContext";

const StyledTableRow = styled.tr`
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 1fr 1fr 1.2fr;
    column-gap: 2rem;
    align-items: center;

    &:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-100);
    }
`;

const StyledTableCell = styled.td`
    padding: 2rem;
`;

const StyledImg = styled.img`
    width: 100%;
    height: auto;
    aspect-ratio: 3 / 2;
    display: block;
    object-fit: cover;
    object-position: center;
`;

const StyledCabin = styled.span`
    font-size: 1.6rem;
    font-weight: 600;
    font-family: "Sono";
    color: var(--color-grey-600);
`;

const StyledCapacity = styled.span`
    font-size: 1.6rem;
    font-weight: 600;
    font-family: "Sono";
    color: var(--color-grey-600);
`;

const StyledPrice = styled.span`
    font-family: "Sono";
    font-weight: 600;
`;

const StyledDiscount = styled.span`
    font-family: "Sono";
    font-weight: 500;
    color: var(--color-green-700);
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
    const { isPending, mutate } = useMutation({
        mutationFn: deleteCabin,
        onSuccess: () => {
            toast.success("Cabin was deleted 😊");
            queryClient.invalidateQueries({
                queryKey: ["cabin"],
            });
        },
        onError: () => toast.error("Woops... something that wrong... 😒"),
    });
    // TODO
    console.log(cabin);
    const { setShowCabin, setCabinForm } = useCabinsContext();
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
                <Row>
                    <Button
                        variation="secondary"
                        onClick={() => {
                            setShowCabin(true);
                            setCabinForm(() => {
                                return {
                                    ...cabin,
                                    image: { name: cabin.image },
                                };
                            });
                        }}
                        disabled={isPending ? true : false}
                    >
                        Edit
                    </Button>
                    <Button
                        variation="secondary"
                        onClick={() => mutate(id)}
                        disabled={isPending ? true : false}
                    >
                        {isPending ? "Deleting..." : "Delete"}
                    </Button>
                </Row>
            </StyledTableCell>
        </StyledTableRow>
    );
};

export default CabinRow;
