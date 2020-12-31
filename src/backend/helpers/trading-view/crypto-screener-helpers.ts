import { ActionResultType } from "@Lib/types/core/action-result-type";
import { AxiosResponse } from "axios";
import AxiosModule from "@FE/Scripts/modules/axios-module";
import { DataFilterType } from "@Lib/types/crypto-screener/data-filter-type";
import { FilterType } from "@Lib/types/crypto-screener/filter-type";
import { OptionsType } from "@Lib/types/crypto-screener/options-type";
import { SortType } from "@Lib/types/crypto-screener/sort-type";
import { SymbolsType } from "@Lib/types/crypto-screener/symbols-type";

/**
 * Crypto screener helper class
 */
export default class CryptoScreenerHelper {
    /**
     * Clear session data
     * @param req Express.Request request object
     */
    public static  async requestCryptoScreener(): Promise<ActionResultType> {
        const url = "https://scanner.tradingview.com/crypto/scan";

        let filters: Array<FilterType> = [
            {
                left: "name,description",
                operation: "match",
                right: "btc",
            },

            {
                left: "exchange",
                operation: "match",
                right: "BINANCE",
            },
        ];

        const option: OptionsType = {
            lang: "en",
        } as OptionsType;

        const sorts: SortType = {
            sortBy: "name",
            sortOrder: "asc",
        } as SortType;
        const symbol: SymbolsType = {
            query: {
                types: [],
            },
            tickers: [],
        } as SymbolsType;

        const column: Array<string> = [
            "base_currency_logoid",
            "currency_logoid",
            "name",
            "close",
            "change",
            "change_abs",
            "high",
            "low",
            "volume",
            "Recommend.All",
            "exchange",
            "description",
            "name",
            "type",
            "subtype",
            "update_mode",
            "pricescale",
            "minmov",
            "fractional",
            "minmove2",
        ] as Array<string>;

        const ranges: Array<number> = [0, 150] as Array<number>;
        let dataFilter: DataFilterType = {
            filter: filters,
            options: option,
            symbols: symbol,
            columns: column,
            sort: sorts,
            range: ranges,
        } as DataFilterType;

        const axiosResult: AxiosResponse = await AxiosModule.post(
            url,
            JSON.stringify(dataFilter)
        );
        console.log(axiosResult.data.data);
        let result={
            success:true,
            data:axiosResult.data.data
        }as ActionResultType;
        return result;
    }
}
