import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import useCabinsContext from "../../contexts/useCabinsContext";

const useCreateCabin = (reset: () => void) => {
    const { setShowCabin, setCabinForm } = useCabinsContext();
    const queryClient = useQueryClient();
    const { mutate: mutateCreate } = useMutation({
        mutationFn: createCabin,
        onSuccess: () => {
            toast.success("Cabin was create 😊");
            queryClient.invalidateQueries({
                queryKey: ["cabin"],
            });
            reset();
            setShowCabin(false);
            setCabinForm(null);
        },
        onError: () => toast.error("Woops... something that wrong... 😒"),
    });

    return { mutateCreate };
};

export default useCreateCabin;
