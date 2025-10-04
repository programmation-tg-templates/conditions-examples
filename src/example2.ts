export function estPairEtPositif(nombre: number): boolean {
    if (nombre % 2 === 0 && nombre > 0) {
        return true;
    } else {
        return false;
    }
}