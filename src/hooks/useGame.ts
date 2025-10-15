import { useEffect, useState } from "react";

const INITIAL_CELL_VALUE_OPTIONS = [2, 4];
const useGame = (size: number) => {
    const getInitialGrid = (): number[][] => {
        let res = [];

        for (let i = 0; i < size; i++) {
            let row = [];
            for (let j = 0; j < size; j++) {
                row.push(0);
            }
            res.push(row);
        }

        let tilesPopulated = 0;
        while (tilesPopulated < 2) {
            let x = Math.floor(Math.random() * size);
            let y = Math.floor(Math.random() * size);
            if (res[x]![y] === 0) {
                res[x]![y] =
                    INITIAL_CELL_VALUE_OPTIONS[
                        Math.floor(
                            Math.random() * INITIAL_CELL_VALUE_OPTIONS.length,
                        )
                    ] ?? 2;

                tilesPopulated++;
            }
        }

        return res;
    };
    const [grid, setGrid] = useState<number[][]>([]);
    const [validCells, setValidCells] = useState<number[][]>([]);

    useEffect(() => {
        let _validCells = [];
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i]!.length; j++) {
                if (grid[i]![j] == 0) {
                    _validCells.push([i, j]);
                }
            }
        }
        setValidCells(_validCells);
    }, [grid]);

    useEffect(() => {
        setGrid(getInitialGrid());
    }, []);
    const getRandomValidCell = () => {
        const idx = Math.floor(Math.random() * validCells.length);
        return idx;
    };

    return {
        grid,
    };
};

export default useGame;
