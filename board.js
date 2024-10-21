export function isValidPos([x, y]) {
    return x >= 0 && x <= 7 && y >= 0 && y <= 7;
}

export function printBoard(path, piece) {
    for (let y = 7; y >= 0; y--) {
        let row = '';

        for (let x = 0; x <= 7; x++) {
            if (x === path[0][0] && y === path[0][1]) {
                row += piece + ' ';
                continue;
            }

            if (path.some((coords) => x === coords[0] && y === coords[1])) {
                // row += path.findIndex((coords) => x === coords[0] && y === coords[1]) + '.';
                row += '❌';
                continue;
            }

            row += (x + y) % 2 === 0 ? '⬛' : '⬜';
        }

        console.log(y + row);
    }

    console.log('  0 1 2 3 4 5 6 7');
}
