export class DeepComparator {
    public static isEqual(a: any, b: any): boolean {
        // Reference check.
        if (a === b) {
            return true;
        }

        // Handle `NaN`. In JavaScript, `NaN !== NaN`, but we treat them as equal for comparison logic.
        if (typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b)) {
            return true;
        }

        // If either is `null` or not an object (and they failed the reference check), they are not equal.
        // `typeof null` is 'object', so it requires explicit handling.
        if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object') {
            return false;
        }

        // Handle Date objects.
        if (a instanceof Date && b instanceof Date) {
            return a.getTime() === b.getTime();
        }

        // Handle RegExp objects.
        if (a instanceof RegExp && b instanceof RegExp) {
            return a.toString() === b.toString();
        }

        // Handle arrays.
        const isArrayA: boolean = Array.isArray(a);
        const isArrayB: boolean = Array.isArray(b);
        if (isArrayA !== isArrayB) return false;

        // Recursively compare objects.
        const keysA: Array<string> = Object.keys(a);
        const keysB: Array<string> = Object.keys(b);

        if (keysA.length !== keysB.length) {
            return false;
        }

        for (const key of keysA) {
            if (!Object.prototype.hasOwnProperty.call(b, key)) {
                return false;
            }

            if (!DeepComparator.isEqual(a[key], b[key])) {
                return false;
            }
        }

        return true;
    }
}
