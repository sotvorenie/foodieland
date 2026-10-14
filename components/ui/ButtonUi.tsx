import {ButtonHTMLAttributes, ReactNode} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    mode?: 'dark' | 'light'
    className?: string
    beforeChildren?: ReactNode
    afterChildren?: ReactNode
}

function ButtonUi({text, mode = 'dark', beforeChildren, afterChildren, className = '', ...rest}: ButtonProps) {
    return (
        <button className={`
                    flex-center gap-4 min-h-10 md:min-h-15 md:min-w-45 p-3 rounded-[.7rem] md:rounded-[1rem] 
                    ${mode === 'dark' ? 'bg-dark md:py-4.5 md:px-9 text-sm text-light' : 'bg-blue md:py-5 md:px-6.5'}
                    ${className}`
                }
                {...rest}
        >
            {beforeChildren}
            <span className="font-semibold leading-none -tracking-[0.02em]">{text}</span>
            {afterChildren}
        </button>
    )
}


export default ButtonUi;