import * as MomentJalaali from "moment-jalaali";

/**
 * Date helper class
 */
export default class DateHelper {
    /**
     * To persian date
     * @param value Date value
     * @param format string Date format
     * @param locale string Locale format
     */
    public static toPersianDate(
        value: Date,
        format: string = "jYYYY/jMM/jDD",
        locale: string = "fa"
    ) {
        if (!value) {
            return "";
        }

        return MomentJalaali(value)
            .locale(locale)
            .format(format);
    }

    /**
     * To persian date
     * @param value Date value
     * @param locale string Locale format
     */
    public static toPersianDateLong(value: Date, locale: string) {
        return DateHelper.toPersianDate(
            value,
            "jYYYY-jMM-jDD HH:mm:SS",
            locale
        );
    }

    /**
     * To persian date - short format
     * @param value Date value
     * @param locale string Locale format
     */
    public static toPersianDateShort(value: Date, locale: string = "fa") {
        return DateHelper.toPersianDate(value, "jYYYY-jMM-jDD", locale);
    }

    /**
     * To persian date year
     * @param value Date value
     * @param locale string Locale format
     */
    public static toPersianDateYear(value: Date, locale: string = "fa") {
        return DateHelper.toPersianDate(value, "jYYYY", locale);
    }
}
