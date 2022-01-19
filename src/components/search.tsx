export const Search = () => {
    return (
        <div className="mx-10 mt-2 flex flex-nowrap items-center border-2 border-solid border-green-400 bg-white rounded-xl px-2 py-1">
            <input type="text" placeholder="Search for address" className="outline-none bg-transparent text-sm w-full" />
            <button className="bg-green-400 text-white text-sm rounded-xl px-4 py-2 active:scale-95">
                Search
            </button>
        </div>
    )
}