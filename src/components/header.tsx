export const Header = () => {
    return (
        <header className="flex flex-nowrap items-center pt-14 pb-3 px-10">
            <a href="https://townland.xyz" className="flex flex-nowrap items-center">
                <div className="w-[64px] h-[64px] bg-app-logo bg-center bg-no-repeat bg-contain"></div>
                <div className="flex flex-col ml-[10px]">
                    <strong className="text-slate-700 text-xl">Townland</strong>
                    <span className="text-slate-500 text-sm">Your 2D RP world</span>
                </div>
            </a>
            <div className="flex-1"></div>
            <a className="px-4 py-2 bg-slate-300 rounded-xl shadow hover:shadow-xl" href="https://townland.xyz">
                Home Page
            </a>
        </header>
    )
}