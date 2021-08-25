import {body, ValidationChain, validationResult} from "express-validator";
import {NextFunction, Request, Response} from "express";


export type Category = "fruit" | "vegetable" | "dairy" | "fish" | "meat" | "liquid";

export type Placement = "fridge" | "freezer" | "pantry";

export type Confection = "fresh" | "canned" | "frozen" | "cured";

export type Ripeness = "green" | "ripe" | "advanced" | "overripe";

export type RipenessStatus = {
    ripeness: Ripeness;
    date: Date;
}

export type Ingredient = {
    name: string;
    brand: string | null;
    category: Category | null;
    placement: Placement | null;
    confection: Confection | null;
    expirationDate: Date | null;
    ripenessStatus: RipenessStatus | null;
    open: boolean;
    frozen: boolean;
    barcode: string | null;
}


export const validate = (validations: ValidationChain[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        await Promise.all(validations.map(validation => validation.run(req)));

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        res.status(400).json({ errors: errors.array() });
    };
};

// TODO: probably it is possible to do this in more declarative style
// TODO: test multiple inputs, for now seems to work just fine :)
// TODO: better error handling, maybe some custom messages?
export const ingredientValidations: ValidationChain[] = [
    body('name').isString().exists({ checkNull: true, checkFalsy: true }),
    body('brand').optional({nullable: true}).isString(),
    body('category').optional({nullable: true}).isString().toLowerCase().isIn(["fruit", "vegetable", "dairy", "fish", "meat", "liquid"]),
    body('placement').optional({nullable: true}).isString().toLowerCase().isIn(["fridge", "freezer", "pantry"]),
    body('confection').optional({nullable: true}).isString().toLowerCase().isIn(["fresh", "canned", "frozen", "cured"]),
    body('expirationDate').optional({nullable: true}).isString(),
    body('ripenessStatus.ripeness').optional({nullable: true}).isString().toLowerCase().isIn(["green", "ripe", "advanced", "overripe"]),
    body('ripenessStatus.date').optional({nullable: true}).isString(),
    body('open').isBoolean(),
    body('frozen').isBoolean(),
    body('barcode').optional({nullable: true}).isString(),
]

// dummy objects
// export const dummyIngredients: Ingredient[] = [
//     {
//         name: 'Tomato',
//         brand: 'Your Vegetables Inc.',
//         category: 'vegetable',
//         placement: 'pantry',
//         confection: 'fresh',
//         expirationDate: new Date(2021, 4, 23),
//         ripenessStatus: null,
//         open: false,
//         frozen: false,
//         barcode: null,
//     },
//     {
//         name: 'Carrot',
//         brand: 'Your Vegetables Inc.',
//         category: 'vegetable',
//         placement: 'pantry',
//         confection: 'canned',
//         expirationDate: new Date(2021, 4, 28),
//         ripenessStatus: null,
//         open: false,
//         frozen: false,
//         barcode: null,
//     },
//     {
//         name: 'Pumpkin',
//         brand: 'Your Vegetables Inc.',
//         category: 'vegetable',
//         placement: 'pantry',
//         confection: 'fresh',
//         expirationDate: new Date(2021, 4, 29),
//         ripenessStatus: null,
//         open: false,
//         frozen: false,
//         barcode: null,
//     },
//     {
//         name: 'Potato',
//         brand: 'Your Vegetables Inc.',
//         category: 'vegetable',
//         placement: 'pantry',
//         confection: 'fresh',
//         expirationDate: new Date(2021, 4, 29),
//         ripenessStatus: null,
//         open: false,
//         frozen: false,
//         barcode: null,
//     },
//     {
//         name: 'Salad',
//         brand: 'Your Vegetables Inc.',
//         category: 'vegetable',
//         placement: 'fridge',
//         confection: 'fresh',
//         expirationDate: new Date(2021, 4, 29),
//         ripenessStatus: null,
//         open: false,
//         frozen: false,
//         barcode: null,
//     },
//     {
//         name: 'Strawberries',
//         brand: 'Your Fruits Inc.',
//         category: 'fruit',
//         placement: 'freezer',
//         confection: 'frozen',
//         expirationDate: null,
//         ripenessStatus: null,
//         open: false,
//         frozen: false,
//         barcode: null,
//     },
//     {
//         name: 'Corn',
//         brand: 'Your Vegetables Inc.',
//         category: 'vegetable',
//         placement: 'pantry',
//         confection: 'canned',
//         expirationDate: null,
//         ripenessStatus: null,
//         open: false,
//         frozen: false,
//         barcode: null,
//     },
//     {
//         name: 'Beans',
//         brand: 'Your Vegetables Inc.',
//         category: 'vegetable',
//         placement: 'pantry',
//         confection: 'canned',
//         expirationDate: null,
//         ripenessStatus: null,
//         open: false,
//         frozen: false,
//         barcode: null,
//     },
//     {
//         name: 'Salmon',
//         brand: 'Sea Steve',
//         category: 'fish',
//         placement: 'freezer',
//         confection: 'frozen',
//         expirationDate: null,
//         ripenessStatus: null,
//         open: false,
//         frozen: false,
//         barcode: null,
//     },
//     {
//         name: 'Shrimps',
//         brand: 'Sea Steve',
//         category: 'fish',
//         placement: 'freezer',
//         confection: 'frozen',
//         expirationDate: null,
//         ripenessStatus: null,
//         open: false,
//         frozen: false,
//         barcode: null,
//     },
//     {
//         name: 'Steak',
//         brand: 'Meatzzz',
//         category: 'meat',
//         placement: 'fridge',
//         confection: 'fresh',
//         expirationDate: new Date(2021, 8, 2021),
//         ripenessStatus: null,
//         open: false,
//         frozen: false,
//         barcode: null,
//     },
//     {
//         name: 'Pork Ribs',
//         brand: 'Meatzzz',
//         category: 'meat',
//         placement: 'fridge',
//         confection: 'fresh',
//         expirationDate: new Date(2021, 8, 2021),
//         ripenessStatus: null,
//         open: false,
//         frozen: false,
//         barcode: null,
//     },
//     {
//         name: 'Spaghetti Pasta',
//         brand: 'Mariano Italiano 🤌🏻',
//         category: null,
//         placement: 'pantry',
//         confection: 'cured',
//         expirationDate: null,
//         ripenessStatus: null,
//         open: false,
//         frozen: false,
//         barcode: null,
//     },
//     {
//         name: 'Grana Padano',
//         brand: 'Mariano Italiano 🤌🏻',
//         category: 'dairy',
//         placement: 'fridge',
//         confection: 'fresh',
//         expirationDate: null,
//         ripenessStatus: null,
//         open: false,
//         frozen: false,
//         barcode: null,
//     },
//     {
//         name: 'Milk',
//         brand: 'Good Old Farm',
//         category: 'dairy',
//         placement: 'fridge',
//         confection: 'fresh',
//         expirationDate: null,
//         ripenessStatus: null,
//         open: false,
//         frozen: false,
//         barcode: null,
//     },
//     {
//         name: 'Orange Juice',
//         brand: 'Sunny Paradise',
//         category: 'liquid',
//         placement: 'fridge',
//         confection: 'fresh',
//         expirationDate: null,
//         ripenessStatus: null,
//         open: false,
//         frozen: false,
//         barcode: null,
//     },
//     {
//         name: 'Apple Juice',
//         brand: 'Sunny Paradise',
//         category: 'liquid',
//         placement: 'fridge',
//         confection: 'fresh',
//         expirationDate: null,
//         ripenessStatus: null,
//         open: false,
//         frozen: false,
//         barcode: null,
//     },
//     {
//         name: 'Blackberry Juice',
//         brand: 'Sunny Paradise',
//         category: 'liquid',
//         placement: 'fridge',
//         confection: 'fresh',
//         expirationDate: null,
//         ripenessStatus: null,
//         open: false,
//         frozen: false,
//         barcode: null,
//     },
// ];

