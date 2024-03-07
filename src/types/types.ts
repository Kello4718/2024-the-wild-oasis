type CabinFormDataImageInfo = {
    name?: string;
    lastModified?: number;
    lastModifiedDate?: Date;
    size?: number;
    type?: string;
    webkitRelativePath?: string;
};

type CabinFormDataImage = {
    0: CabinFormDataImageInfo;
    length: number;
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
    maxCapacity: number | null;
    regularPrice: number | null;
    discount: number | null;
    description: string;
    image?: CabinFormDataImage;
};
