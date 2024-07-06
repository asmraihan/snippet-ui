import { KanbanBoard } from "@/registry/components/snippet/kanban-board";

export default function KanbanBoardDemo() {

    return (
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-neutral-900 text-neutral-50 py-10">
            <KanbanBoard />
        </div>
    );
}