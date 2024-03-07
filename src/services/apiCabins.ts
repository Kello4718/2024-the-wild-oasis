import { CabinFormData } from "../types/types";
import supabase, { SUPABASE_URL } from "./supabase";

export const getCabins = async () => {
    const { data, error } = await supabase.from("Cabins").select("*");

    if (error) {
        throw new Error("Cabins could not be loaded");
    }
    return data;
};

export const createCabin = async (cabin: CabinFormData) => {
    console.log(cabin);
    const imageName = `${Math.random()}-${
        cabin.image && cabin.image[0].name
    }`.replaceAll(" ", "-");
    const imagePath = `${SUPABASE_URL}/storage/v1/object/public/cabin-images/${imageName}`;
    const { data, error } = await supabase
        .from("Cabins")
        .insert([{ ...cabin, image: `${imagePath}` }])
        .select();
    if (error) {
        throw new Error("Cabin could not be create");
    }

    const { error: storageError } = await supabase.storage
        .from("cabin-images")
        .upload(`/${imageName}`, cabin.image[0]);
    // TODO
    if (storageError) {
        await supabase.from("Cabins").delete().eq("id", cabin.id);
    }

    return data;
};

export const deleteCabin = async (id: number) => {
    const { data, error } = await supabase.from("Cabins").delete().eq("id", id);

    if (error) {
        throw new Error("Cabins could not be loaded");
    }
    return data;
};

export const updateCabin = async (id: number, cabin: CabinFormData) => {
    const { data, error } = await supabase
        .from("Cabins")
        .update(cabin)
        .eq("id", id)
        .select();

    if (error) {
        throw new Error("Cabins could not be loaded");
    }
    return data;
};
