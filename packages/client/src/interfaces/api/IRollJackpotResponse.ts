import { eBlockType } from "@enums/eBlockType";

export interface IRollJackpotResponse {
    blocks: Array<eBlockType>;
    pointsEarned: number | null;
}