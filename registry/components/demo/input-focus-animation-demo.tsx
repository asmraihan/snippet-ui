import { InputFocusAnimation as TextInput } from "@/registry/components/snippet/input-focus-animation";


export default function InputFocusAnimationDemo() {

    return (
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background p-20">
            <TextInput
                label="Email"
                type="email"
                name="email"
                autoComplete="email"
            />
        </div>
    );
}