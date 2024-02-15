export type CabinTableData = {
    id: number;
    createdAt: Date;
    name: string;
    maxCapacity: number;
    regularPrice: number;
    discount: number;
    description: string;
    image: string;
};

export type CabinFormData = Omit<CabinTableData, "id" | "createdAt">;
//TODO