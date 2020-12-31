/**
 * Apply filters
 * @param vue Vue instance
 */
export function applyFilter(vue: any) {
    /**
     * Convert FA/AR to EN digits
     */
    vue.filter("en_digits", (value: string) => {
        const persianNumbers = [
                /۰/g,
                /۱/g,
                /۲/g,
                /۳/g,
                /۴/g,
                /۵/g,
                /۶/g,
                /۷/g,
                /۸/g,
                /۹/g,
            ],
            arabicNumbers = [
                /٠/g,
                /١/g,
                /٢/g,
                /٣/g,
                /٤/g,
                /٥/g,
                /٦/g,
                /٧/g,
                /٨/g,
                /٩/g,
            ];

        let result = value;
        for (let i: number = 0; i < persianNumbers.length; i++) {
            result = result
                .replace(persianNumbers[i], i.toString())
                .replace(arabicNumbers[i], i.toString());
        }

        return result;
    });
}
