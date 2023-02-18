import Logo from '../../svg/LogoInmobu'

const Loading = () => {
    return (
        <div className="w-screen h-screen bg-white flex items-center">
            <div className="m-auto">
                <div className="animate-bounce">
                    <Logo height={80} />
                </div>
            </div>
        </div>
    )
}

export default Loading;