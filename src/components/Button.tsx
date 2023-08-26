interface ButtonProps {
    label: string;
    type: "button" | "submit" | "reset" | undefined;
}

export default function Button({label, type}:ButtonProps) {
    return (
        <button type={type} className="px-4 py-3 text-lg text-white font-semibold bg-blue-800 hover:bg-blue-900">
            {label}
        </button>
    )
}