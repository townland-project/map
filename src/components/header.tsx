export const Header = (props: Props) => {
    return (
        <header className="flex flex-nowrap items-center pt-14 pb-3 px-10">
            <a href="https://townland.xyz" className="flex flex-nowrap items-center">
                <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px] bg-app-logo bg-center bg-no-repeat bg-contain"></div>
                <div className="flex flex-col ml-[10px]">
                    <strong className="text-slate-700 text-md md:text-xl">Townland</strong>
                    <span className="text-slate-500 text-xs md:text-sm">Your 2D RP world</span>
                </div>
            </a>
            <div className="flex-1"></div>
            <a className="px-2 lg:px-4 py-2 bg-violet-300 lg:bg-slate-300 rounded-xl shadow hover:shadow-xl" href="https://townland.xyz">
                <span className="hidden md:block">Home Page</span>
                <div className="md:hidden w-[24px] h-[24px] bg-home bg-no-repeat bg-contain bg-center"></div>
            </a>
            <button onClick={() => props.onClose()} className="lg:hidden ml-2 px-2 py-2 bg-yellow-200 lg:bg-slate-300 rounded-xl shadow hover:shadow-xl">
                <div className="w-[24px] h-[24px] bg-menu bg-no-repeat bg-contain bg-center"></div>
            </button>
        </header>
    )
}

interface Props {
    onClose: VoidCallback
}

interface VoidCallback {
    (): void
}