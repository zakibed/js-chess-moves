import { isValidPos, printBoard } from './board.js';
import { PAWN_MOVES, KNIGHT_MOVES, BISHOP_MOVES, ROOK_MOVES, KING_MOVES, QUEEN_MOVES } from './constants.js';

export function movePiece(piece, startPos, endPos) {
    piece = piece.toLowerCase();

    // get piece move list and symbol
    let moves;
    let symbol;

    try {
        switch (piece) {
            case 'pawn':
                moves = PAWN_MOVES;
                symbol = '♟️';
                break;
            case 'knight':
                moves = KNIGHT_MOVES;
                symbol = '♞';
                break;
            case 'rook':
                moves = ROOK_MOVES;
                symbol = '♜';
                break;
            case 'bishop':
                moves = BISHOP_MOVES;
                symbol = '♝';
                break;
            case 'king':
                moves = KING_MOVES;
                symbol = '♚';
                break;
            case 'queen':
                moves = QUEEN_MOVES;
                symbol = '♛';
                break;
            default:
                throw new Error('Invalid piece');
        }

        if (!isValidPos(startPos) || !isValidPos(endPos)) {
            throw new Error('Invalid starting and/or ending position');
        }

        // if piece is bishop and ending not in same diagonal as starting position
        if (piece === 'bishop' && (startPos[0] + startPos[1]) % 2 !== (endPos[0] + endPos[1]) % 2) {
            throw new Error('Invalid ending position for bishop -- bishop can only move in same diagonal');
        }

        // if piece is pawn and ending not infront of starting position
        if (piece === 'pawn' && (startPos[0] !== endPos[0] || startPos[1] > endPos[1])) {
            throw new Error('Invalid ending position for pawn -- pawn can only move forward');
        }
    } catch (err) {
        console.error(err);
        return;
    }

    // initialise queue for BFS with starting position and current path
    const queue = [{ pos: startPos, path: [startPos] }];
    // track visited positions to prevent cycles
    const visited = new Set();
    visited.add(startPos.toString());

    // iterate through queue while remaining discovered positions exist...
    while (queue.length > 0) {
        // ...removing front of queue and storing current position and path...
        const {
            pos: [x, y],
            path: curPath
        } = queue.shift();

        // ...until end position reached for first time (will be shortest path)
        if (x === endPos[0] && y === endPos[1]) {
            const pathLength = curPath.length - 1;

            console.log(
                `=> You made it in ${pathLength} move${
                    pathLength !== 1 ? 's' : ''
                } with a ${piece}! Here's your shortest path:`
            );
            printBoard(curPath, symbol);

            return curPath;
        }

        // store each valid move from current position in queue and update path
        for (let i = 0; i < moves.length; i++) {
            const newPos = [x + moves[i][0], y + moves[i][1]];
            const newPosStr = newPos.toString();

            if (isValidPos(newPos) && !visited.has(newPosStr)) {
                queue.push({ pos: newPos, path: [...curPath, newPos] });
                visited.add(newPosStr);
            }
        }
    }
}
