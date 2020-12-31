import CryptoScreenerControllers from "@BE/Controllers/trading-view/crypto-screener-controllers";
import BaseRouter from "@Core/Helpers/base-router-helper";

/**
 * Organization resume router
 */
export default class CryptoScreenerRoute extends BaseRouter {
    /**
     * Constructor
     */
    constructor() {
        super("/screener", "screenerRoute");
        this.defineRoutes();
    }

    /**
     * Define routes
     */
    private defineRoutes(): void {
        const controller: CryptoScreenerControllers = new CryptoScreenerControllers();

        super.get(
            "/requestCryptoScreenerListData",
            [controller.requestCryptoScreenerListData.bind(controller)],
            "screener.request-crypto-screener-list-data"
        );
    }
}
