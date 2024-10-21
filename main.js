import { movePiece } from './piece.js';

movePiece('pawn', [8, 0], [5, 5]);
movePiece('pawn', [1, 0], [5, -1]);
movePiece('pawn', [3, 3], [4, 3]);
movePiece('pawn', [7, 7], [7, 4]);
movePiece('PaWn', [6, 2], [6, 5]);

movePiece('king', [4, 4], [0, 5]);
movePiece('king', [2, 3], [7, 1]);
movePiece('king', [0, 0], [7, 7]);

movePiece('KNIGHT', [1, 5], [7, 0]);
movePiece('knight', [4, 2], [6, 6]);
movePiece('knight', [0, 0], [0, 0]);
movePiece('knight', [3, 3], [4, 5]);

movePiece('rook', [1, 3], [6, 1]);
movePiece('rook', [4, 0], [7, 0]);

movePiece('bishop', [0, 4], [5, 0]);
movePiece('bishop', [6, 7], [4, 2]);
movePiece('bishop', [5, 5], [6, 2]);
movePiece('bishop', [3, 2], [6, 7]);

movePiece('queen', [7, 3], [0, 0]);
movePiece('queen', [5, 6], [6, 1]);
