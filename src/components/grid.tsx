import useGame from "@/hooks/useGame";
import { useEffect } from "react";

type Iprops = {
    size?: number;
    grid: number[][];
};

export default function Grid({ size = 4, grid }: Iprops) {
    return (
        <div className="flex flex-col gap-1">
            {grid.map((row, i) => {
                return (
                    <div className="flex flex-row gap-1" key={`${i}`}>
                        {row.map((cell, idx) => {
                            return (
                                <div className="h-10 w-10" key={`${i}-${idx}`}>
                                    {cell}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}
