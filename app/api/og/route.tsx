import { capitalize } from "@/lib/utils";
import { ImageResponse } from "next/og";

export const runtime = "edge";

const image = fetch(
    new URL("../../../assets/images/intro-min.png", import.meta.url),
).then((res) => res.arrayBuffer());


export async function GET(req: Request) {
    const imageData = await image;

    const url = new URL(req.url);
    const params = Object.fromEntries(url.searchParams);
    const title = capitalize(
        (params.title || "Snippet UI")
            .replace(/-/g, " ")
            .split(" ")
            .slice(0, 3)
            .join(" ")
            .substring(0, 20),
    );

    try {
        return new ImageResponse(
            (
                <div tw="flex justify-center flex-col relative w-full h-full items-center bg-white">
                    <img
                        tw="absolute inset-0 w-full h-full"
                        alt={title}
                        // @ts-ignore
                        src={imageData}
                    />
                </div>
            ),
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
