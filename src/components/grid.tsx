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
                                    className={`flex h-20 w-20 items-center justify-center border border-indigo-600 text-4xl text-white`}
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
