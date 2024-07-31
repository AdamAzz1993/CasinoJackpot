import { cashOut, rollJackpot, startGame } from "@api/jackpot";
import { eBlockType } from "@enums/eBlockType";
import useStoreService from "@services/storeService";

export class CasinoService {
    async startGame() {
        const store = useStoreService();
        const data = await startGame();
        const { credit } = data ?? {};
        store.setCreditInStore(credit ?? 0);
        return credit;
    }
    async rollJackpot() {
        const store = useStoreService();
        store.setBlocks([eBlockType.Spinner, eBlockType.Spinner, eBlockType.Spinner]);
        const result = await rollJackpot();
        const { blocks, pointsEarned } = result;
        store.setBlocks(blocks);
        store.addCredit(pointsEarned ?? 0);
        return result;
    }
    async cashOut() {
        try {
            const response = await cashOut();
            const store = useStoreService();
            store.setCreditInStore(0);
        } catch (error) {
            console.error(error);
        }
    }
}