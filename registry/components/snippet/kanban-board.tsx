import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, Flame } from 'lucide-react';

interface Card {
    title: string;
    id: string;
    column: string;
}

interface ColumnProps {
    title: string;
    headingColor: string;
    cards: Card[];
    column: string;
    setCards: React.Dispatch<React.SetStateAction<Card[]>>;
}

interface CardProps {
    title: string;
    id: string;
    column: string;
    handleDragStart: (e: React.DragEvent, card: Card) => void;
}

interface DropIndicatorProps {
    beforeId: string | null;
    column: string;
}

interface BurnBarrelProps {
    setCards: React.Dispatch<React.SetStateAction<Card[]>>;
}

interface AddCardProps {
    column: string;
    setCards: React.Dispatch<React.SetStateAction<Card[]>>;
}

export const KanbanBoard: React.FC = () => {

    const DEMO_CARDS = [
        // TODO
        { title: "Deploy server", id: "1", column: "todo" },
        { title: "Set up CI/CD pipeline", id: "2", column: "todo" },
        // DONE
        { title: "Build dashboard", id: "10", column: "done" },
    ];

    const [cards, setCards] = useState<Card[]>(DEMO_CARDS);

    return (
        <div className="">
            <div className="flex gap-3">
                <Column
                    title="TODO"
                    column="todo"
                    headingColor="text-orange-400"
                    cards={cards}
                    setCards={setCards}
                />
                <Column
                    title="Complete"
                    column="done"
                    headingColor="text-emerald-400"
                    cards={cards}
                    setCards={setCards}
                />
            </div>
            <BurnBarrel setCards={setCards} />
        </div>
    );
};

const Column: React.FC<ColumnProps> = ({ title, headingColor, cards, column, setCards }) => {

    const [active, setActive] = useState(false);

    const handleDragStart = (e: React.DragEvent, card: Card) => {
        e.dataTransfer.setData("cardId", card.id);
    };

    const handleDragEnd = (e: React.DragEvent) => {
        const cardId = e.dataTransfer.getData("cardId");

        setActive(false);
        clearHighlights(null);

        const indicators = getIndicators();
        const { element } = getNearestIndicator(e, indicators);

        const before = element.dataset.before || "-1";

        if (before !== cardId) {
            let copy = [...cards];

            let cardToTransfer = copy.find((c) => c.id === cardId);
            if (!cardToTransfer) return;
            cardToTransfer = { ...cardToTransfer, column };

            copy = copy.filter((c) => c.id !== cardId);

            const moveToBack = before === "-1";

            if (moveToBack) {
                copy.push(cardToTransfer);
            } else {
                const insertAtIndex = copy.findIndex((el) => el.id === before);
                if (insertAtIndex === undefined) return;

                copy.splice(insertAtIndex, 0, cardToTransfer);
            }

            setCards(copy);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        highlightIndicator(e);

        setActive(true);
    };

    const clearHighlights = (els: any) => {
        const indicators = els || getIndicators();

        indicators.forEach((i: any) => {
            i.style.opacity = "0";
        });
    };

    const highlightIndicator = (e: React.MouseEvent | React.DragEvent) => {
        const indicators = getIndicators();

        clearHighlights(indicators);

        const el = getNearestIndicator(e, indicators);

        el.element.style.opacity = "1";
    };

    const getNearestIndicator = (e: any, indicators: any) => {
        const DISTANCE_OFFSET = 50;

        const el = indicators.reduce(
            (closest: any, child: any) => {
                const box = child.getBoundingClientRect();

                const offset = e.clientY - (box.top + DISTANCE_OFFSET);

                if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child };
                } else {
                    return closest;
                }
            },
            {
                offset: Number.NEGATIVE_INFINITY,
                element: indicators[indicators.length - 1],
            }
        );

        return el;
    };

    const getIndicators = () => {
        return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
    };

    const handleDragLeave = () => {
        clearHighlights(null);
        setActive(false);
    };

    const filteredCards = cards.filter((c) => c.column === column);

    return (
        <div className="w-48 shrink-0">
            <div className="mb-3 flex items-center justify-between">
                <h3 className={`font-medium ${headingColor}`}>{title}</h3>
                <span className="rounded text-sm text-neutral-400">
                    {filteredCards.length}
                </span>
            </div>
            <div
                onDrop={handleDragEnd}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`h-full w-full transition-colors ${active ? "bg-neutral-800/50" : "bg-neutral-800/0"
                    }`}
            >
                {filteredCards.map((c) => {
                    return <Card key={c.id} {...c} handleDragStart={handleDragStart} />;
                })}
                <DropIndicator beforeId={null} column={column} />
                <AddCard column={column} setCards={setCards} />
            </div>
        </div>
    );
};

const Card: React.FC<CardProps> = ({ title, id, column, handleDragStart }) => {
    return (
        <>
            <DropIndicator beforeId={id} column={column} />
            <motion.div
                layout
                layoutId={id}
                draggable="true"
                //@ts-ignore
                onDragStart={(e) => handleDragStart(e, { title, id, column })}
                className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
            >
                <p className="text-sm text-neutral-100">{title}</p>
            </motion.div>
        </>
    );
};

const DropIndicator: React.FC<DropIndicatorProps> = ({ beforeId, column }) => {
    return (
        <div
            data-before={beforeId || "-1"}
            data-column={column}
            className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
        />
    );
};

const BurnBarrel: React.FC<BurnBarrelProps> = ({ setCards }) => {
    const [active, setActive] = useState(false);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setActive(true);
    };

    const handleDragLeave = () => {
        setActive(false);
    };

    const handleDragEnd = (e: React.DragEvent) => {
        const cardId = e.dataTransfer.getData("cardId");

        setCards((pv) => pv.filter((c) => c.id !== cardId));

        setActive(false);
    };

    return (
        <div
            onDrop={handleDragEnd}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`mt-10 grid h-36 w-full shrink-0 place-content-center rounded border text-3xl ${active
                ? "border-red-800 bg-red-800/20 text-red-500"
                : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
                }`}
        >
            {active ? <Flame className="animate-bounce" /> : <Trash2 />}
        </div>
    );
};

const AddCard: React.FC<AddCardProps> = ({ column, setCards }) => {
    const [text, setText] = useState("");
    const [adding, setAdding] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!text.trim().length) return;

        const newCard = {
            column,
            title: text.trim(),
            id: Math.random().toString(),
        };

        setCards((pv) => [...pv, newCard]);

        setAdding(false);
    };

    return (
        <>
            {adding ? (
                <motion.form layout onSubmit={handleSubmit}>
                    <textarea
                        onChange={(e) => setText(e.target.value)}
                        autoFocus
                        placeholder="Add new task..."
                        className="w-full rounded border border-emerald-400 bg-emerald-400/20 p-3 text-sm text-neutral-50 placeholder-emerald-100 focus:outline-0"
                    />
                    <div className="mt-1.5 flex items-center justify-end gap-1.5">
                        <button
                            onClick={() => setAdding(false)}
                            className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            className="flex items-center gap-1 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
                        >
                            <span>Add</span>
                            <Plus className="size-4" />
                        </button>
                    </div>
                </motion.form>
            ) : (
                <motion.button
                    layout
                    onClick={() => setAdding(true)}
                    className="flex w-full items-center gap-1 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
                >
                    <span>Add card</span>
                    <Plus className="size-4" />
                </motion.button>
            )}
        </>
    );
};

