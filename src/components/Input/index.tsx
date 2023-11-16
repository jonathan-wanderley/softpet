import { InputHTMLAttributes, forwardRef } from "react";

interface ThemeInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const ThemeInput = forwardRef(function ThemeInputComponent({ ...props }: ThemeInputProps, ref: any) {
    return (
        <input
            { ...props }
            ref={ref}
            className={`h-[40px] border-[#404A5C] text-white text-[16px] border-[3px] bg-transparent rounded-[10px] outline-0 px-[12px] ${props.className}`}
        />
    )
})

export default ThemeInput;
