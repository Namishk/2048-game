import Grid from "@/components/grid";
import useGame from "@/hooks/useGame";
import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
    const { grid } = useGame(4);
    useEffect(() => {
        const keyPressListner = (event: KeyboardEvent): void => {
            switch (event.key) {
                case "ArrowUp":
                    console.log("you pressed: ", event.key);
                    break;
                case "ArrowDown":
                    console.log("you pressed: ", event.key);
                    break;
                case "ArrowLeft":
                    console.log("you pressed: ", event.key);
                    break;
                case "ArrowRight":
                    console.log("you pressed: ", event.key);
                    break;
            }
        };

        window.addEventListener("keydown", keyPressListner);

        return () => {
            window.removeEventListener("keydown", keyPressListner);
        };
    }, []);
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
            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
                <Grid size={4} grid={grid} />
            </main>
        </>
    );
}
