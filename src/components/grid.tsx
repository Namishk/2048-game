type Iprops = {
    // size?: number;
    grid: number[][];
};

export default function Grid({ grid }: Iprops) {
    console.log(grid, "grid in grid component");
    return (
        <div className="flex flex-col gap-1">
            {grid.map((row, i) => {
                return (
                    <div className="flex flex-row gap-1" key={`${i}`}>
                        {row.map((cell, idx) => {
                            return (
                                <div
                                    className="flex h-10 w-10 items-center justify-center text-white"
                                    key={`${i}-${idx}`}
                                >
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
