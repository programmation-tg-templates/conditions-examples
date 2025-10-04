import {estPairEtPositif} from '../example2';

describe('Vérifier si un nombre est pair et positif', () => {
    test('Le nombre est pair et positif', () => {
        expect(estPairEtPositif(10)).toBe(true);
    });

    test('Le nombre est pair et négatif', () => {
        expect(estPairEtPositif(-10)).toBe(false);
    });

    test('Le nombre est impair et positif', () => {
        expect(estPairEtPositif(11)).toBe(false);
    });
});
