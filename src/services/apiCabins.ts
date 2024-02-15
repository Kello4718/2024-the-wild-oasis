import { CabinFormData } from "../types/types";
import supabase from "./supabase";

export const getCabins = async () => {
    const { data, error } = await supabase.from("Cabins").select("*");

    if (error) {
        throw new Error("Cabins could not be loaded");
    }
    return data;
};

export const createCabin = async (cabin: CabinFormData) => {
    const { data, error } = await supabase
        .from("Cabins")
        .insert([cabin])
        .select();
    if (error) {
        throw new Error("Cabin could not be create");
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
