export function majoriteCivile(age: number): string {
    if (age >= 18) {
        return "Majeur";
    } else {
        return "Mineur";
    }
}