
export type Category = "fruit" | "vegetable" | "dairy" | "fish" | "meat" | "liquid";

export type Location = "fridge" | "freezer" | "pantry";

export type Confection = "fresh" | "canned" | "frozen" | "cured";

export type Ripeness = "green" | "ripe" | "advanced" | "overripe";

export type RipenessStatus = {
    ripeness: Ripeness;
    date: Date;
}

export type Indegrient = {
    name: string;
    brand: string | null;
    category: Category | null;
    location: Location | null;
    confection: Confection | null;
    expirationDate: Date | null;
    ripenessStatus: RipenessStatus | null;
    open: boolean;
    frozen: boolean;
    barcode: string | null;
}

export const indegrients: Indegrient[] = [
    {
        name: 'Toamto',
        brand: 'Your Vegetables Inc.',
        category: 'vegetable',
        location: 'pantry',
        confection: null,
        expirationDate: new Date(2021, 5, 23),
        ripenessStatus: {
            ripeness: 'ripe',
            date: new Date()
        },
        open: false,
        frozen: false,
        barcode: null,
    },
    {
        name: 'Carrot',
        brand: 'Your Vegetables Inc.',
        category: 'vegetable',
        location: 'pantry',
        confection: null,
        expirationDate: new Date(2021, 5, 28),
        ripenessStatus: {
            ripeness: 'ripe',
            date: new Date()
        },
        open: false,
        frozen: false,
        barcode: null,
    },
    {
        name: 'Pumpkin',
        brand: 'Your Vegetables Inc.',
        category: 'vegetable',
        location: 'pantry',
        confection: null,
        expirationDate: new Date(2021, 5, 30),
        ripenessStatus: {
            ripeness: 'ripe',
            date: new Date()
        },
        open: false,
        frozen: false,
        barcode: null,
    },

]

