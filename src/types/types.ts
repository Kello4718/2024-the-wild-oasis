type CabinFormDataImageName = {
    name: string;
};

type CabinFormDataImage = {
    0: CabinFormDataImageName;
};

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

export type CabinFormData = {
    id?: number;
    name: string;
    maxCapacity: number;
    regularPrice: number;
    discount: number;
    description: string;
    image: CabinFormDataImage;
};
