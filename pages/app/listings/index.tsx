import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';
import Loading from '../../../components/app/Loading';

const Board = dynamic(() => import("../../../components/app/Board"), { suspense: true })
const Topbar = dynamic(() => import("../../../components/listings/TopBar"), { ssr: false })
const Navbar = dynamic(() => import("../../../components/app/Navbar"), { ssr: false })
const Results = dynamic(() => import("../../../components/listings/Results"), { ssr: false })
const ResultTitle = dynamic(() => import("../../../components/listings/ResultTitle"), { ssr: false })

const Dashboard = () => {


    return (
        <Suspense fallback={<Loading/>}>
            <Board>
                <>
                    <Navbar />
                    <Topbar />
                    <ResultTitle />
                    <Results />
                </>
            </Board>
        </Suspense>
    )
}

export default Dashboard;