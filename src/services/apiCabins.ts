import supabase from "./supabase";

const getCabins = async () => {
    const { data, error } = await supabase.from("Cabins").select("*");

    if (error) {
        throw new Error("Cabins could not be loaded");
    }
    return data;
};

export default getCabins;
