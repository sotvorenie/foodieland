import {ButtonHTMLAttributes, ReactNode} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    className?: string
    beforeChildren?: ReactNode
    afterChildren?: ReactNode
}

function ButtonUi({text, beforeChildren, afterChildren, className, ...rest}: ButtonProps) {
    return (
        <button className={`bg-dark text-light flex-center gap-4 min-h-10 md:min-h-15 md:min-w-45 px-2 md:px-9 py-3 md:py-4.5 rounded-[.7rem] md:rounded-[1rem] ${className}`}
                {...rest}
        >
            {beforeChildren}
            <span className="font-semibold text-sm text-light leading-none -tracking-[0.02em]">{text}</span>
            {afterChildren}
        </button>
    )
}


export default ButtonUi;