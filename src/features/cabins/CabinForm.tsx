import styled from "styled-components";

import StyledInput from "../../components/StyledInput";
import StyledForm from "../../components/StyledForm";
import Button from "../../components/Button";
import FileInput from "../../components/FileInput";
import StyledTextarea from "../../components/StyledTextarea";
import { useForm } from "react-hook-form";
import { CabinFormData } from "../../types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

const StyledFormRow = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 24rem 1fr 1.2fr;
    gap: 2.4rem;

    padding: 1.2rem 0;

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        padding-bottom: 0;
    }

    &:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-100);
    }

    &:has(button) {
        display: flex;
        justify-content: flex-end;
        gap: 1.2rem;
    }
`;

const StyledFormLabel = styled.label`
    font-weight: 500;
`;

// const StyledFormError = styled.span`
//     font-size: 1.4rem;
//     color: var(--color-red-700);
// `;

const CabinForm = () => {
    const { register, handleSubmit, reset } = useForm<CabinFormData>();
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: createCabin,
        onSuccess: () => {
            toast.success("Cabin was create 😊");
            queryClient.invalidateQueries({
                queryKey: ["cabin"],
            });
            reset();
        },
        onError: () => toast.error("Woops... something that wrong... 😒"),
    });

    const onSubmit = (data: CabinFormData) => {
        console.log(data);
        mutate(data);
    };
    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <StyledFormRow>
                <StyledFormLabel htmlFor="name">Cabin name</StyledFormLabel>
                <StyledInput type="text" id="name" {...register("name")} />
            </StyledFormRow>

            <StyledFormRow>
                <StyledFormLabel htmlFor="maxCapacity">
                    Maximum capacity
                </StyledFormLabel>
                <StyledInput
                    type="number"
                    id="maxCapacity"
                    {...register("maxCapacity")}
                />
            </StyledFormRow>

            <StyledFormRow>
                <StyledFormLabel htmlFor="regularPrice">
                    Regular price
                </StyledFormLabel>
                <StyledInput
                    type="number"
                    id="regularPrice"
                    {...register("regularPrice")}
                />
            </StyledFormRow>

            <StyledFormRow>
                <StyledFormLabel htmlFor="discount">Discount</StyledFormLabel>
                <StyledInput
                    type="number"
                    id="discount"
                    defaultValue={0}
                    {...register("discount")}
                />
            </StyledFormRow>

            <StyledFormRow>
                <StyledFormLabel htmlFor="description">
                    Description for website
                </StyledFormLabel>
                <StyledTextarea
                    id="description"
                    defaultValue=""
                    {...register("description")}
                />
            </StyledFormRow>

            <StyledFormRow>
                <StyledFormLabel htmlFor="image">Cabin photo</StyledFormLabel>
                <FileInput id="image" accept="image/*" {...register("image")} />
            </StyledFormRow>

            <StyledFormRow>
                {/* type is an HTML attribute! */}
                {/* <Button variation="secondary" type="reset">
                    Cancel
                </Button> */}
                <Button>Edit cabin</Button>
            </StyledFormRow>
        </StyledForm>
    );
};

export default CabinForm;
