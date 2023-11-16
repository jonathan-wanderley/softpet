import { InputHTMLAttributes, forwardRef } from "react";
import InputMask from "react-input-mask";

interface ThemeInputProps extends InputHTMLAttributes<HTMLInputElement> {
    mask: string;
}

const MaskedInput = forwardRef(function MaskedInputComponent({ ...props }: ThemeInputProps, ref: any) {
    return (
        <InputMask
            className={`h-[40px] border-[#404A5C] text-white text-[16px] border-[3px] bg-transparent rounded-[10px] outline-0 px-[12px] ${props.className}`}
            { ...props }
            ref={ref}
        >
        </InputMask>
    )
});

export default MaskedInput;
