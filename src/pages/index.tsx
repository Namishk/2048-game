import Grid from "@/components/grid";
import KeyboardIcons from "@/components/keyboardIcons";
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
        highScore,
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
                <div className="text-7xl">2048</div>
                {playingState === "initial" ? (
                    <></>
                ) : (
                    <div className="flex gap-6">
                        <div className="font-font-bold flex w-30 flex-col items-center rounded-md bg-indigo-400 py-2 text-lg">
                            <div className="">SCORE</div>
                            <div className="">{gameState.maxNumberReached}</div>
                        </div>
                        <div className="font-font-bold flex w-30 flex-col items-center rounded-md bg-indigo-400 py-2 text-lg">
                            <div className="">BEST</div>
                            <div className="">{highScore}</div>
                        </div>
                    </div>
                )}
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
                {playingState === "initial" ? (
                    <></>
                ) : (
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-center">
                            <div
                                className="flex h-20 w-20 cursor-pointer items-center justify-center border"
                                onClick={() => {
                                    moveUp();
                                }}
                            >
                                <KeyboardIcons arrow="UP" />
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div
                                className="flex h-20 w-20 cursor-pointer items-center justify-center border"
                                onClick={() => {
                                    moveLeft();
                                }}
                            >
                                <KeyboardIcons arrow="LEFT" />
                            </div>
                            <div
                                className="flex h-20 w-20 cursor-pointer items-center justify-center border"
                                onClick={() => {
                                    moveDown();
                                }}
                            >
                                <KeyboardIcons arrow="DOWN" />
                            </div>
                            <div
                                className="flex h-20 w-20 cursor-pointer items-center justify-center border"
                                onClick={() => {
                                    moveRight();
                                }}
                            >
                                <KeyboardIcons arrow="RIGHT" />
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </>
    );
}
