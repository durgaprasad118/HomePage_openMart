'use client';
import { Minus, Plus } from 'lucide-react';
import { useRef, useState, useImperativeHandle, forwardRef } from 'react';

interface PanelProps {
    id: number;
    description: string;
    title: string;
}

interface PanelRef {
    scrollIntoView: () => void;
}

const Panel = forwardRef<PanelRef, PanelProps>(
    ({ id, description, title }, ref) => {
        const contentRef = useRef<HTMLDivElement>(null);
        const [isActive, setIsActive] = useState<number | null>(null);

        useImperativeHandle(ref, () => ({
            scrollIntoView: () => {
                contentRef.current?.scrollIntoView({ behavior: 'smooth' });
            }
        }));

        function handleClick(panelId: number) {
            setIsActive(isActive === panelId ? null : panelId);
        }

        return (
            <div className="flex-col cursor-pointer gap-y-10 w-full md:w-3/4 flex justify-center">
                <div className="bg-white border border-gray-200 duration-500 ease-in-out rounded-lg text-gray-900">
                    <div
                        className="flex flex-row w-full justify-between h-10 p-4 py-8 items-center"
                        onClick={() => handleClick(id)}
                    >
                        <h1 className="md:text-lg text-md font-semibold">
                            {title}
                        </h1>
                        {isActive === id ? <Minus /> : <Plus />}
                    </div>

                    <div
                        style={{
                            height:
                                isActive === id
                                    ? contentRef.current?.scrollHeight
                                    : 0,
                            overflow: 'hidden',
                            transition: 'height 0.5s ease'
                        }}
                        ref={contentRef}
                        className="bg-gray-50 rounded-b-lg"
                    >
                        <div className="p-3 text-xs md:text-lg">
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);

Panel.displayName = 'Panel';
export { Panel };
