import supabase from "./supabase";

const getCabins = async () => {
    const { data, error } = await supabase.from("Cabins").select("*");

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be loaded");
    }
    console.log(data);
    return data;
};

export default getCabins;
