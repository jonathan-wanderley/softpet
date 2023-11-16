import { IconProps } from "./interface";

export function CloseIcon({ size=16, color="#ffffff", className="" }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
            <path d="M15.6456 0.366529C15.5333 0.254025 15.4 0.164768 15.2532 0.103869C15.1064 0.0429689 14.949 0.0116217 14.79 0.0116217C14.6311 0.0116217 14.4737 0.0429689 14.3269 0.103869C14.1801 0.164768 14.0467 0.254025 13.9344 0.366529L8 6.28884L2.06555 0.354393C1.9532 0.242036 1.81981 0.15291 1.67301 0.0921034C1.52621 0.0312965 1.36887 1.18387e-09 1.20997 0C1.05108 -1.18387e-09 0.893737 0.0312965 0.746936 0.0921034C0.600135 0.15291 0.466749 0.242036 0.354393 0.354393C0.242036 0.466749 0.15291 0.600135 0.0921034 0.746936C0.0312965 0.893737 -1.18387e-09 1.05108 0 1.20997C1.18387e-09 1.36887 0.0312965 1.52621 0.0921034 1.67301C0.15291 1.81981 0.242036 1.9532 0.354393 2.06555L6.28884 8L0.354393 13.9344C0.242036 14.0468 0.15291 14.1802 0.0921034 14.327C0.0312965 14.4738 0 14.6311 0 14.79C0 14.9489 0.0312965 15.1063 0.0921034 15.2531C0.15291 15.3999 0.242036 15.5333 0.354393 15.6456C0.466749 15.758 0.600135 15.8471 0.746936 15.9079C0.893737 15.9687 1.05108 16 1.20997 16C1.36887 16 1.52621 15.9687 1.67301 15.9079C1.81981 15.8471 1.9532 15.758 2.06555 15.6456L8 9.71116L13.9344 15.6456C14.0468 15.758 14.1802 15.8471 14.327 15.9079C14.4738 15.9687 14.6311 16 14.79 16C14.9489 16 15.1063 15.9687 15.2531 15.9079C15.3999 15.8471 15.5333 15.758 15.6456 15.6456C15.758 15.5333 15.8471 15.3999 15.9079 15.2531C15.9687 15.1063 16 14.9489 16 14.79C16 14.6311 15.9687 14.4738 15.9079 14.327C15.8471 14.1802 15.758 14.0468 15.6456 13.9344L9.71116 8L15.6456 2.06555C16.1068 1.60439 16.1068 0.827692 15.6456 0.366529Z" fill={color}/>
        </svg>
    )
}