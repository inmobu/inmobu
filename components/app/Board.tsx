import dynamic from 'next/dynamic';

const Menu = dynamic(() => import("./Menu"), { ssr: false })

interface BoardInterface {
    children?: JSX.Element
}

const Board = ({ children }: BoardInterface) => {
    return (
        <div className="h-screen w-screen flex">
            <Menu />
            <div className="w-full h-full overflow-y-scroll">
                {children}
            </div>
        </div>
    )
}

export default Board;