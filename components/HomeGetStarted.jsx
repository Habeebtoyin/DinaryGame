import Link from "next/link";
const HomeGetStarted = () => {
    return (
        <div className="mb-[2em] flex bg-[#E5EFFF] px-[10%] py-[4em] justify-between max-lg:flex-col res-pad-in">
            
            <div className="left max-lg:w-[100%] w-[50%]">
                <h1 className="res-font font-bold text-[2.5rem] text-left">Guides to get Started</h1>
                <p className="text-[#464D59]">Indices is more than just a game. It is a journey of numbers and strategy</p>
                <div className="flex justify-start mt-3">
                    <Link href="/denary" className='bg-[#0045AD] flex align-middle text-white px-5 py-2 rounded-[4px]'>Play Now</Link>
                </div>
            </div>

            <div className="right max-lg:w-[100%] w-[45%] max-lg:mt-4">
                <p className="font-bold">How to Play</p>
                <div className="">
                    <ol>
                        <li className="text-[#464D59]">1. Connect your wallet to sign in</li>
                        <li className="text-[#464D59]">2. Navigate to play game or click on pay button</li>
                        <li className="text-[#464D59]">3. Swipe in any direction to move tiles on the grid</li>
                        <li className="text-[#464D59]">4. When two tile with the same colors match, they merge into one</li>
                        <li className="text-[#464D59]">5. Continue merging tiles, and strategically plan your moves to reach the ultimate goal: 12288</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default HomeGetStarted