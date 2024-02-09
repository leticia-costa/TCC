import { PressureLevel } from "./bloodPreassure"

export interface Recommendation {
    description: string
    type: PressureLevel
    medicine?: string
}