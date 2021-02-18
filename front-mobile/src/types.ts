export type Order =
{
id: number;
latidude: string;
address: string;
moment: string;
longitude: number;
total: number;
status: string;
products: Product[]
}


export type Product={

    id: number;
    price: number;
    name: String;
    imageUri: string;
    description: string;


}
