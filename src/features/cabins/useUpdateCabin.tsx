import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import useCabinsContext from "../../contexts/useCabinsContext";

const useUpdateCabin = (reset: () => void) => {
    const { setShowCabin, setCabinForm } = useCabinsContext();
    const queryClient = useQueryClient();
    const { mutate: mutateUpdate } = useMutation({
        mutationFn: updateCabin,
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

    return { mutateUpdate };
};

export default useUpdateCabin;
