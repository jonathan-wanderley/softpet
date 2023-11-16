import { ButtonHTMLAttributes } from "react";

interface ButtonShapeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    bg?: "white" | "danger" | "blueGradient";
    className?: string;
    children: React.ReactNode;
}

const backgroundStyles = {
    "white": { backgroundColor: "#ffffff" },
    "danger": { backgroundColor: "#ED254E" },
    "blueGradient": { background: "linear-gradient(90deg, #00CAFC 0%, #0056E2 100%)" },
}

export default function ButtonShape({ className="", bg="white", children, ...rest }: ButtonShapeProps) {
    return (
        <button
            className={`rounded-[5px] min-h-[40px] px-[12px] hover:opacity-80 font-bold ${className}`}
            style={backgroundStyles[bg]}
            {...rest}
        >
            {children}
        </button>
    )
}