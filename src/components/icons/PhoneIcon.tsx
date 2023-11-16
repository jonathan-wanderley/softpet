import { IconProps } from "./interface";

export function PhoneIcon({ size = 16, color = "#ffffff", className = "" }: IconProps  ) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" fill="none">
            <path d="M8.8 4.79995C9.43652 4.79995 10.047 5.05281 10.4971 5.50289C10.9471 5.95298 11.2 6.56343 11.2 7.19995C11.2 7.41212 11.2843 7.61561 11.4343 7.76564C11.5843 7.91567 11.7878 7.99995 12 7.99995C12.2122 7.99995 12.4157 7.91567 12.5657 7.76564C12.7157 7.61561 12.8 7.41212 12.8 7.19995C12.8 6.13909 12.3786 5.12167 11.6284 4.37152C10.8783 3.62138 9.86087 3.19995 8.8 3.19995C8.58783 3.19995 8.38434 3.28424 8.23431 3.43427C8.08429 3.5843 8 3.78778 8 3.99995C8 4.21212 8.08429 4.41561 8.23431 4.56564C8.38434 4.71567 8.58783 4.79995 8.8 4.79995Z" fill={color}/>
            <path d="M8.8 1.6C10.2852 1.6 11.7096 2.19 12.7598 3.2402C13.81 4.29041 14.4 5.71479 14.4 7.2C14.4 7.41217 14.4843 7.61566 14.6343 7.76569C14.7843 7.91571 14.9878 8 15.2 8C15.4122 8 15.6157 7.91571 15.7657 7.76569C15.9157 7.61566 16 7.41217 16 7.2C16 5.29044 15.2414 3.45909 13.8912 2.10883C12.5409 0.758569 10.7096 0 8.8 0C8.58783 0 8.38434 0.0842854 8.23431 0.234315C8.08429 0.384344 8 0.587827 8 0.8C8 1.01217 8.08429 1.21566 8.23431 1.36569C8.38434 1.51571 8.58783 1.6 8.8 1.6ZM15.8 11.128C15.756 10.9996 15.68 10.8845 15.5793 10.7935C15.4785 10.7025 15.3562 10.6387 15.224 10.608L10.424 9.512C10.2937 9.48246 10.1581 9.48602 10.0295 9.52235C9.90097 9.55868 9.78356 9.62663 9.688 9.72C9.576 9.824 9.568 9.832 9.048 10.824C7.32256 10.0289 5.94 8.64069 5.152 6.912C6.168 6.4 6.176 6.4 6.28 6.28C6.37337 6.18445 6.44132 6.06703 6.47765 5.93847C6.51398 5.8099 6.51754 5.67429 6.488 5.544L5.392 0.8C5.36132 0.667757 5.29749 0.545497 5.20652 0.444729C5.11554 0.343962 5.00043 0.268002 4.872 0.224C4.68517 0.157272 4.49225 0.10904 4.296 0.0799999C4.0938 0.0331162 3.88747 0.00631947 3.68 0C2.704 0 1.76798 0.387713 1.07785 1.07785C0.387713 1.76798 0 2.704 0 3.68C0.00423353 6.94617 1.30359 10.0773 3.61312 12.3869C5.92265 14.6964 9.05383 15.9958 12.32 16C12.8033 16 13.2818 15.9048 13.7283 15.7199C14.1748 15.5349 14.5804 15.2639 14.9222 14.9222C15.2639 14.5804 15.5349 14.1748 15.7199 13.7283C15.9048 13.2818 16 12.8033 16 12.32C16.0002 12.1164 15.9842 11.9131 15.952 11.712C15.9184 11.5133 15.8675 11.3179 15.8 11.128ZM12.32 14.4C9.47753 14.3979 6.75209 13.2678 4.74216 11.2578C2.73222 9.24791 1.60212 6.52247 1.6 3.68C1.60211 3.129 1.82193 2.60117 2.21155 2.21155C2.60117 1.82193 3.129 1.60211 3.68 1.6H3.944L4.8 5.312L4.368 5.536C3.68 5.896 3.136 6.184 3.424 6.808C3.89298 8.13566 4.65182 9.34218 5.64539 10.3399C6.63896 11.3376 7.8423 12.1015 9.168 12.576C9.84 12.848 10.104 12.344 10.464 11.648L10.696 11.208L14.4 12.056V12.32C14.3979 12.871 14.1781 13.3988 13.7885 13.7885C13.3988 14.1781 12.871 14.3979 12.32 14.4Z" fill={color}/>
        </svg>
    )
}