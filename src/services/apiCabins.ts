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
    const imageName = `${Math.random()}-${cabin?.image[0].name}`.replaceAll(
        " ",
        "-"
    );
    const hasImagePath = cabin.image[0].name.startsWith(SUPABASE_URL);
    console.log(cabin.image);
    const imagePath = hasImagePath
        ? cabin.image[0].name
        : `${SUPABASE_URL}/storage/v1/object/public/cabin-images/${imageName}`;
    const { data, error } = await supabase
        .from("Cabins")
        .insert([{ ...cabin, image: imagePath }])
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

export const updateCabin = async (cabin: CabinFormData) => {
    const { data, error } = await supabase
        .from("Cabins")
        .update(cabin)
        .eq("id", cabin.id)
        .select();

    if (error) {
        throw new Error("Cabins could not be loaded");
    }
    return data;
};
