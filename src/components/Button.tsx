interface ButtonProps {
    label: string;
    type: "button" | "submit" | "reset" | undefined;
}

export default function Button({label, type}:ButtonProps) {
    return (
        <button type={type} className="px-4 py-3 text-lg text-black font-semibold bg-white border border-black hover:bg-black hover:text-white duration-200 ease-in-out">
            {label}
        </button>
    )
}