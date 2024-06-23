import { InputFocusBlur } from "../snippet/input-focus-blur";

export default function InputFocusBlurDemo() {
    return (
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background p-20">
            <InputFocusBlur placeholder="Type something" />
        </div>
    );
}