export const Search = () => {
    return (
        <div className="mt-2 flex flex-nowrap items-center border-2 border-solid border-green-400 bg-white rounded-xl px-2 py-1">
            <input type="text" placeholder="Search for address" className="outline-none bg-transparent text-sm w-full" />
            <button className="bg-green-400 text-white text-sm rounded-xl px-2 md:px-4 py-2 active:scale-95">
                <span className="hidden md:block">Search</span>
                <div className="md:hidden w-[24px] h-[24px] bg-search bg-no-repeat bg-contain bg-center"></div>
            </button>
        </div>
    )
}