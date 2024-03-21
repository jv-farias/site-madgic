interface SeparatorProps {
    orientation: "vertical" | "horizontal"
}

export const Separator = ({orientation}: SeparatorProps) => {
    return (
        <div   className={(orientation == "vertical") ? `w-[3px] h-[30px] bg-custom-gradient-separator` : ` w-[30px] h-[3px] bg-custom-gradient-separator` } ></div>
    )
}
