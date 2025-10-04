// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import {majoriteCivile} from '../example1';

describe('Vérifier la majorité civile', () => {
    test('Tester si une personne est majeur', () => {
        expect(majoriteCivile(19)).toEqual("Majeur")
    });
    test('Tester si une personne est mineur', () => {
        expect(majoriteCivile(16)).toEqual("Mineur")
    });
});
