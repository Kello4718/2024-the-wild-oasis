import Input from "../../components/Input";
import Form from "../../components/Form";
import { useForm } from "react-hook-form";
import { CabinFormData } from "../../types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow from "../../components/FormRow";
import Row from "../../components/Row";
import { Button } from "../../components/Button";
import Textarea from "../../components/Textarea";
import FileInput from "../../components/FileInput";
import useCabinsContext from "../../contexts/useCabinsContext";

const CabinForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        getValues,
    } = useForm<CabinFormData>({
        mode: "onTouched",
    });
    const { setShowCabin } = useCabinsContext();
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
        const image = data.image[0].name;
        console.log({ ...data, image });
        mutate({ ...data, image });
    };

    const onError = () => console.log(errors);

    return (
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <FormRow label="Cabin name" errors={errors.name}>
                <Input
                    type="text"
                    id="name"
                    {...register("name", {
                        required: "This field is required 🙋‍♂️",
                    })}
                />
            </FormRow>

            <FormRow label="Maximum capacity" errors={errors.maxCapacity}>
                <Input
                    type="number"
                    id="maxCapacity"
                    {...register("maxCapacity", {
                        required: "This field is required 🙋‍♂️",
                        min: {
                            value: 1,
                            message: "Capacity must be more than 0",
                        },
                    })}
                />
            </FormRow>

            <FormRow label="Regular price" errors={errors.regularPrice}>
                <Input
                    type="number"
                    id="regularPrice"
                    {...register("regularPrice", {
                        required: "This field is required 🙋‍♂️",
                    })}
                />
            </FormRow>

            <FormRow label="Discount" errors={errors.discount}>
                <Input
                    type="number"
                    id="discount"
                    defaultValue={0}
                    {...register("discount", {
                        validate: (value: number) =>
                            value < Number(getValues().regularPrice) ||
                            "Discount can't be more than price",
                    })}
                />
            </FormRow>

            <FormRow
                label="Description for website"
                errors={errors.description}
            >
                <Textarea
                    id="description"
                    defaultValue=""
                    {...register("description")}
                />
            </FormRow>

            <FormRow label="Cabin photo" errors={errors.image}>
                <FileInput
                    id="image"
                    accept="image/*"
                    {...register("image", {
                        required: "This field is required 🙋‍♂️",
                    })}
                />
            </FormRow>

            <Row>
                <Button
                    variation="secondary"
                    type="reset"
                    onClick={() => setShowCabin(false)}
                >
                    Cancel
                </Button>
                <Button>Add cabin</Button>
            </Row>
        </Form>
    );
};

export default CabinForm;
