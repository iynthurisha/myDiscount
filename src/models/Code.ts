
import { Promo } from "../models/Promo";

export class Code {
    promotions: Promo[];

    constructor(public colname: string) {
    }
}