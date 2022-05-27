const CookieBanner = () => {
    return (
        <div className="fixed z-10 bottom-0 left-0 w-full bg-blue-800 h-24 flex gap-2">
            <div className="w-7/12 flex items-center">
                <p className="text-white px-8">Este sitio web utiliza cookies para garantizar que obtenga la mejor experiencia en nuestro sitio web. <a href="/legal/privacy"className="underline">Aprende más</a></p>
            </div>
            <div className="flex gap-3 ml-auto px-5 items-center">
                <button className="px-5 py-3 underline text-white h-10 flex items-center"><p>Gestionar Cookies</p></button>
                <button className="px-5 py-3 bg-white rounded-lg h-10 flex items-center">Rechazar</button>
                <button className="px-5 py-3 bg-white rounded-lg h-10 flex items-center">Permitir todas</button>
            </div>
        </div>
    )
}

export default CookieBanner;