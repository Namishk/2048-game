import Grid from "@/components/grid";
import useGame from "@/hooks/useGame";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
    const [playingState, setPlayingState] = useState<"initial" | "playing">(
        "initial",
    );
    const [gridSize, setGridSize] = useState<number>(4);
    const [input, setInput] = useState(4);
    const [inputError, setInputError] = useState("");
    const {
        grid,
        moveUp,
        moveDown,
        moveLeft,
        moveRight,
        gameState,
        initializeGrid,
    } = useGame(gridSize);
    console.log(gameState);
    useEffect(() => {
        const keyPressListner = (event: KeyboardEvent): void => {
            if (!gameState.ended) {
                switch (event.key) {
                    case "ArrowUp":
                        console.log("you pressed: ", event.key);
                        moveUp();
                        break;
                    case "ArrowDown":
                        console.log("you pressed: ", event.key);
                        moveDown();
                        break;
                    case "ArrowLeft":
                        console.log("you pressed: ", event.key);
                        moveLeft();
                        break;
                    case "ArrowRight":
                        console.log("you pressed: ", event.key);
                        moveRight();
                        break;
                    case "w":
                        console.log("you pressed: ", event.key);
                }
            }
        };

        window.addEventListener("keydown", keyPressListner);

        return () => {
            window.removeEventListener("keydown", keyPressListner);
        };
    });
    return (
        <>
            <Head>
                <title>2048 Game</title>
                <meta
                    name="description"
                    content="2048 game implemented by namish"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
                {gameState.ended ? (
                    <div className="flex flex-col items-center justify-center">
                        <div className="text-5xl">GAME OVER</div>
                        {gameState.victory ? (
                            <div className="text-7xl">YOU WON!!!</div>
                        ) : (
                            <></>
                        )}
                    </div>
                ) : (
                    <></>
                )}
                {playingState === "initial" ? (
                    <>
                        <div className="text-3xl">
                            Size:{" "}
                            <input
                                type="number"
                                min={3}
                                max={10}
                                className="rounded-md bg-indigo-500 p-2 text-white"
                                value={input}
                                onChange={(e) => {
                                    let _val = e.target.value;
                                    if (_val) {
                                        let val = parseInt(_val);
                                        if (val > 10 || val < 3) {
                                            setInputError(
                                                "value outside game range please add number in range of 3 to 10",
                                            );
                                        } else {
                                            setInputError("");
                                        }
                                        setInput(val);
                                    }
                                }}
                            />
                        </div>
                        {inputError && <div>{inputError}</div>}
                    </>
                ) : (
                    <Grid grid={grid} />
                )}
                <div
                    className="cursor-pointer text-6xl"
                    onClick={() => {
                        if (playingState === "initial" && inputError === "") {
                            setGridSize(input);
                            setPlayingState("playing");
                            initializeGrid();
                        } else {
                            setPlayingState("initial");
                        }
                    }}
                >
                    {playingState === "initial" ? "START" : "RESET"}
                </div>
            </main>
        </>
    );
}
