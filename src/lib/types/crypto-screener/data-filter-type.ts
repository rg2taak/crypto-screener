import { FilterType } from "./filter-type";
import { OptionsType } from "./options-type";
import { SortType } from "./sort-type";
import { SymbolsType } from "./symbols-type";

export type DataFilterType = {
    filter: Array<FilterType>;
    options: OptionsType;
    symbols: SymbolsType;
    columns: Array<string>;
    sort: SortType;
    range: Array<number>;
};