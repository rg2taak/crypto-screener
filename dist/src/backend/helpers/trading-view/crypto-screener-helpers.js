"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_module_1 = require("../../../frontend/scripts/modules/axios-module");
/**
 * Crypto screener helper class
 */
class CryptoScreenerHelper {
    /**
     * Clear session data
     * @param req Express.Request request object
     */
    static async requestCryptoScreener() {
        const url = "https://scanner.tradingview.com/crypto/scan";
        let filters = [
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
        const option = {
            lang: "en",
        };
        const sorts = {
            sortBy: "name",
            sortOrder: "asc",
        };
        const symbol = {
            query: {
                types: [],
            },
            tickers: [],
        };
        const column = [
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
        ];
        const ranges = [0, 150];
        let dataFilter = {
            filter: filters,
            options: option,
            symbols: symbol,
            columns: column,
            sort: sorts,
            range: ranges,
        };
        const axiosResult = await axios_module_1.default.post(url, JSON.stringify(dataFilter));
        console.log(axiosResult.data.data);
        let result = {
            success: true,
            data: axiosResult.data.data
        };
        return result;
    }
}
exports.default = CryptoScreenerHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J5cHRvLXNjcmVlbmVyLWhlbHBlcnMuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsic3JjL2JhY2tlbmQvaGVscGVycy90cmFkaW5nLXZpZXcvY3J5cHRvLXNjcmVlbmVyLWhlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxpRkFBMkQ7QUFPM0Q7O0dBRUc7QUFDSCxNQUFxQixvQkFBb0I7SUFDckM7OztPQUdHO0lBQ0ksTUFBTSxDQUFFLEtBQUssQ0FBQyxxQkFBcUI7UUFDdEMsTUFBTSxHQUFHLEdBQUcsNkNBQTZDLENBQUM7UUFFMUQsSUFBSSxPQUFPLEdBQXNCO1lBQzdCO2dCQUNJLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixLQUFLLEVBQUUsS0FBSzthQUNmO1lBRUQ7Z0JBQ0ksSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixLQUFLLEVBQUUsU0FBUzthQUNuQjtTQUNKLENBQUM7UUFFRixNQUFNLE1BQU0sR0FBZ0I7WUFDeEIsSUFBSSxFQUFFLElBQUk7U0FDRSxDQUFDO1FBRWpCLE1BQU0sS0FBSyxHQUFhO1lBQ3BCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsU0FBUyxFQUFFLEtBQUs7U0FDUCxDQUFDO1FBQ2QsTUFBTSxNQUFNLEdBQWdCO1lBQ3hCLEtBQUssRUFBRTtnQkFDSCxLQUFLLEVBQUUsRUFBRTthQUNaO1lBQ0QsT0FBTyxFQUFFLEVBQUU7U0FDQyxDQUFDO1FBRWpCLE1BQU0sTUFBTSxHQUFrQjtZQUMxQixzQkFBc0I7WUFDdEIsaUJBQWlCO1lBQ2pCLE1BQU07WUFDTixPQUFPO1lBQ1AsUUFBUTtZQUNSLFlBQVk7WUFDWixNQUFNO1lBQ04sS0FBSztZQUNMLFFBQVE7WUFDUixlQUFlO1lBQ2YsVUFBVTtZQUNWLGFBQWE7WUFDYixNQUFNO1lBQ04sTUFBTTtZQUNOLFNBQVM7WUFDVCxhQUFhO1lBQ2IsWUFBWTtZQUNaLFFBQVE7WUFDUixZQUFZO1lBQ1osVUFBVTtTQUNJLENBQUM7UUFFbkIsTUFBTSxNQUFNLEdBQWtCLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBa0IsQ0FBQztRQUN4RCxJQUFJLFVBQVUsR0FBbUI7WUFDN0IsTUFBTSxFQUFFLE9BQU87WUFDZixPQUFPLEVBQUUsTUFBTTtZQUNmLE9BQU8sRUFBRSxNQUFNO1lBQ2YsT0FBTyxFQUFFLE1BQU07WUFDZixJQUFJLEVBQUUsS0FBSztZQUNYLEtBQUssRUFBRSxNQUFNO1NBQ0UsQ0FBQztRQUVwQixNQUFNLFdBQVcsR0FBa0IsTUFBTSxzQkFBVyxDQUFDLElBQUksQ0FDckQsR0FBRyxFQUNILElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQzdCLENBQUM7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxNQUFNLEdBQUM7WUFDUCxPQUFPLEVBQUMsSUFBSTtZQUNaLElBQUksRUFBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUk7U0FDVixDQUFDO1FBQ3JCLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Q0FDSjtBQWpGRCx1Q0FpRkMifQ==