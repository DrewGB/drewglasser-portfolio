import { useState } from "react";

export default function ImageModal({ src, alt }: { src: string; alt: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <img
                src={src}
                alt={alt}
                onClick={() => setIsOpen(true)}
                className="rounded-lg shadow-md"
            />
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
                    onClick={() => setIsOpen(false)}
                >
                    <img src={src} alt={alt} className="max-w-7xl max-h-[90vh] rounded-lg" />
                </div>
            )}
        </>
    );
}