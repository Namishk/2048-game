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

    useEffect(() => {
        setGrid(getInitialGrid());
    }, []);
    const getRandomValidCell = (
        grid: number[][],
    ): [number, number] | undefined => {
        const validCells: [number, number][] = [];
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i]!.length; j++) {
                if (grid[i]![j] === 0) {
                    validCells.push([i, j]);
                }
            }
        }
        if (validCells.length === 0) return undefined;
        const idx = Math.floor(Math.random() * validCells.length);
        return validCells[idx];
    };

    const slideAndMergeLine = (
        line: number[],
        direction: "left" | "right",
    ): number[] => {
        const size = line.length;
        const arr = line.filter((v) => v !== 0);
        if (direction === "right") arr.reverse();

        const merged: number[] = [];
        for (let i = 0; i < arr.length; i++) {
            if (i + 1 < arr.length && arr[i] === arr[i + 1]) {
                merged.push(arr[i]! * 2);
                i++;
            } else {
                merged.push(arr[i]!);
            }
        }

        while (merged.length < size) merged.push(0);
        if (direction === "right") merged.reverse();
        return merged;
    };

    const moveUp = () => {
        if (!grid || grid.length === 0) return;
        const n = grid.length;
        const temp = grid.map((r) => [...r]);

        for (let col = 0; col < n; col++) {
            const column: number[] = [];
            for (let row = 0; row < n; row++) column.push(temp[row]![col] ?? 0);
            const merged = slideAndMergeLine(column, "left");
            for (let row = 0; row < n; row++)
                temp[row]![col] = merged[row] ?? 0;
        }

        const cell = getRandomValidCell(temp);
        if (cell && cell.length === 2) {
            const [r, c] = cell as number[];
            // @ts-ignore
            temp[r]![c] =
                INITIAL_CELL_VALUE_OPTIONS[
                    Math.floor(
                        Math.random() * INITIAL_CELL_VALUE_OPTIONS.length,
                    )
                ] ?? 2;
        }
        setGrid(temp);
    };

    const moveDown = () => {
        if (!grid || grid.length === 0) return;
        const n = grid.length;
        const temp = grid.map((r) => [...r]);

        for (let col = 0; col < n; col++) {
            const column: number[] = [];
            for (let row = 0; row < n; row++) column.push(temp[row]![col] ?? 0);
            const merged = slideAndMergeLine(column, "right");
            for (let row = 0; row < n; row++)
                temp[row]![col] = merged[row] ?? 0;
        }

        const cell = getRandomValidCell(temp);
        if (cell && cell.length === 2) {
            const [r, c] = cell as number[];
            // @ts-ignore
            temp[r]![c] =
                INITIAL_CELL_VALUE_OPTIONS[
                    Math.floor(
                        Math.random() * INITIAL_CELL_VALUE_OPTIONS.length,
                    )
                ] ?? 2;
        }
        setGrid(temp);
    };

    const moveLeft = () => {
        if (!grid || grid.length === 0) return;
        const temp = grid.map((r) => [...r]);
        for (let row = 0; row < temp.length; row++) {
            temp[row] = slideAndMergeLine(temp[row]!, "left");
        }
        const cell = getRandomValidCell(temp);
        if (cell && cell.length === 2) {
            const [r, c] = cell as number[];
            // @ts-ignore
            temp[r]![c] =
                INITIAL_CELL_VALUE_OPTIONS[
                    Math.floor(
                        Math.random() * INITIAL_CELL_VALUE_OPTIONS.length,
                    )
                ] ?? 2;
        }
        setGrid(temp);
    };

    const moveRight = () => {
        if (!grid || grid.length === 0) return;
        const temp = grid.map((r) => [...r]);
        for (let row = 0; row < temp.length; row++) {
            temp[row] = slideAndMergeLine(temp[row]!, "right");
        }
        const cell = getRandomValidCell(temp);
        if (cell && cell.length === 2) {
            const [r, c] = cell as number[];
            // @ts-ignore
            temp[r]![c] =
                INITIAL_CELL_VALUE_OPTIONS[
                    Math.floor(
                        Math.random() * INITIAL_CELL_VALUE_OPTIONS.length,
                    )
                ] ?? 2;
        }
        setGrid(temp);
    };

    return {
        grid,
        moveUp,
        moveDown,
        moveLeft,
        moveRight,
    };
};

export default useGame;
