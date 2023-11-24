import { SearchIcon } from "../icons";
import { useState } from "react";
import { useKey } from "react-use"

type SearchBarProps = {
    onSearch: (searchText: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [searchText, setSearchText] = useState("");
    
    useKey((e) => e.key === 'Enter', () => onSearch(searchText));

    return (
        <div className='bg-[#404A5C] h-[50px] pl-[3px] pr-[4px] flex items-center rounded-[10px] w-full'>
            <div className='w-[44px] flex justify-center'>
                <SearchIcon color='#001E4D' size={20} />
            </div>

            <div className='bg-[#00060F] h-[42px] w-full rounded-[8px] flex items-center pr-[4px]'>
                <input
                    type="text"
                    name="" id=""
                    className='h-full bg-[#00060F] flex-1 text-white px-[14px] outline-0'
                    onChange={(e: any) => { setSearchText(e.target.value) }}
                />

                <button
                    className='w-[106px] bg-[#404A5C] text-white h-[35px] rounded-[6px] hover:opacity-80'
                    onClick={() => onSearch(searchText)}
                >
                    Pesquisar
                </button>
            </div>
        </div>
    )
}
