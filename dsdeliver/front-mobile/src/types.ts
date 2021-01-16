export type Order = {
    
        id: number;
        address: string;
        latitude: number,
        longitude: string;
        moment: string;
        status: string;
        products: [];
        total: number;
}
        export type Products = {
            id: number;
            name: string;
            price: number;
            description: string;
            imageUri: string;
    
    
}