interface UserBasic {
    name: string;
    age: number;
    email: string;
    address?: {
        city: string;
        country: string;
    }
};