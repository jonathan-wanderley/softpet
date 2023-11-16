import { IconProps } from "./interface";

export function LeftArrowWithCircleIcon({ size = 16, color = "#ffffff", className = "" }: IconProps) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path d="M11.6207 16.5834L7.07288 12L11.6207 7.41669M7.7048 12H16.927" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M23 12C23 5.92708 18.0729 1 12 1C5.92708 1 1 5.92708 1 12C1 18.0729 5.92708 23 12 23C18.0729 23 23 18.0729 23 12Z" stroke={color} strokeWidth="2" strokeMiterlimit="10"/>
        </svg>
    )
}