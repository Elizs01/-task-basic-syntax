export function romanToInteger(str) {
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    let result = 0;
    let e = 0;
    for (let i = 0; i < str.length; i++) {
        switch (str.substr(i, 1)) {
            case 'I':
                if (1 > e) {
                    result = result + 1 - 2 * e;
                } else {
                    result += 1;
                }
                e = 1;
                break;
            case 'V':
                if (5 > e) {
                    result = result + 5 - 2 * e;
                } else {
                    result += 5;
                }
                e = 5;
                break;
            case 'X':
                if (10 > e) {
                    result = result + 10 - 2 * e;
                } else {
                    result += 10;
                }
                e = 10;
                break;
            case 'L':
                if (50 > e) {
                    result = result + 50 - 2 * e;
                } else {
                    result += 50;
                }
                e = 50;
                break;
            case 'C':
                if (100 > e) {
                    result = result + 100 - 2 * e;
                } else {
                    result += 100;
                }
                e = 100;
                break;
            case 'D':
                if (500 > e) {
                    result = result + 500 - 2 * e;
                } else {
                    result += 500;
                }
                e = 500;
                break;
            case 'M':
                if (1000 > e) {
                    result = result + 1000 - 2 * e;
                } else {
                    result += 1000;
                }
                e = 1000;
                break;
        }
    }
    return result;
}
