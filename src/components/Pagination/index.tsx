import { LeftArrowWithCircleIcon, RightArrowWithCircleIcon } from "@/components/icons";
import { PetContext } from "@/contexts/pet-context";
import { useSearchParams } from "next/navigation";
import { useContext } from "react";

type PaginationProps = {
    className?: string;
}

export default function Pagination({ className = "" }: PaginationProps) {
    const searchParams = useSearchParams();
    const { page, totalPages } = useContext(PetContext);
    
    const handlePrevPage = () => {
        if(page==1) return;
        const params = new URLSearchParams(searchParams);
        params.set("page", String(page-1));
        
        window.location.href = `/?${params.toString()}`;
    }

    const handleNextPage = () => {
        if((page)==totalPages) return;

        const params = new URLSearchParams(searchParams);
        params.set("page", String(page+1));
        
        window.location.href = `/?${params.toString()}`;
    }
    
    return (
        <div className={`flex gap-[9px] justify-end ${className}`}>
            <div onClick={handlePrevPage}>
                <LeftArrowWithCircleIcon
                    size={22}
                    className={page==1 ? "opacity-60" : `hover:opacity-70 cursor-pointer`}
                />
            </div>

            <span className="text-white">
                {page} de {totalPages}
            </span>

            <div onClick={handleNextPage}>
                <RightArrowWithCircleIcon
                    size={22}
                    className={(page)==totalPages ? "opacity-60" : `hover:opacity-70 cursor-pointer`}
                />
            </div>
        </div>
    )
}
