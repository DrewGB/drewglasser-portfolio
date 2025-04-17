import { useState } from "react";

export default function ImageModal({ src, alt }: { src: string; alt: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <img
                src={src}
                alt={alt}
                onClick={() => setIsOpen(true)}
                className="rounded-lg shadow-md cursor-pointer"
            />

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
                    onClick={() => setIsOpen(false)}
                >
                    <div className="w-full max-w-6xl max-h-[95vh] overflow-auto">
                        <img
                            src={src}
                            alt={alt}
                            className="w-full h-auto rounded-lg shadow-xl object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
