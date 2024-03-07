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

const dt = new DataTransfer();
dt.items.add(new File(["0"], "primer.txt", { type: "text/plain" }));
const file_list = dt.files;

console.log("Коллекция файлов создана:");
console.dir(file_list);

const CabinForm = () => {
    const { setShowCabin, cabinForm } = useCabinsContext();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        getValues,
        // setValue,
    } = useForm<CabinFormData>({
        mode: "onTouched",
        // defaultValues: cabinForm ? { ...cabinForm, image: file_list } : {},
        defaultValues: cabinForm ? { ...cabinForm, image: file_list } : {},
    });
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: createCabin,
        onSuccess: () => {
            toast.success("Cabin was create 😊");
            queryClient.invalidateQueries({
                queryKey: ["cabin"],
            });
            reset();
            setShowCabin(false);
        },
        onError: () => toast.error("Woops... something that wrong... 😒"),
    });

    const onSubmit = (data: CabinFormData) => {
        const image = getValues().image;
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
                    placeholder="Enter name of cabin"
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
                    placeholder="Enter your capacity"
                />
            </FormRow>

            <FormRow label="Regular price" errors={errors.regularPrice}>
                <Input
                    type="number"
                    id="regularPrice"
                    {...register("regularPrice", {
                        required: "This field is required 🙋‍♂️",
                    })}
                    placeholder="Enter regular price"
                />
            </FormRow>

            <FormRow label="Discount" errors={errors.discount}>
                <Input
                    type="number"
                    id="discount"
                    {...register("discount", {
                        validate: (value) =>
                            (value &&
                                value < Number(getValues().regularPrice)) ||
                            "Discount can't be more than price",
                    })}
                    placeholder="Enter discount"
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
                    placeholder="Enter description of cabin"
                />
            </FormRow>

            <FormRow label="Cabin photo" errors={errors.image}>
                <FileInput
                    id="image"
                    accept="image/*"
                    // value={file_list[0] && file_list[0].name}
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
