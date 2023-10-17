
const PVPHero = () => {
    return (
        <div>
            <div className="play hero max-lg:mt-[2rem] mt-[3.7rem] relative bg-[#E5EFFF] text-white max-lg:min-h-[70vh] min-h-[30vw] flex flex-col items-center justify-center">
                <h1 className="text-[3rem] text-black font-bold my-4">Indices PVP Game Mode</h1>
                <p className="w-[50%] text-center text-[1.2rem] text-gray-700 tracking-[.2px] font-normal">
                    Go head-to-head against another player in an intense 12288 showdown! 
                </p>

                <p className="mt-[3rem] w-[50%] text-center text-[1.2rem] text-gray-700 tracking-[.2px] font-normal">
                    Today's Contest Ends in
                </p>

                <div className="flex justify-between max-lg:w-[80%] w-[40%] max-lg:items-center">
                    <div className='w-[22%] '>
                        <div className='flex items-center'>
                            <h1 className="text-[3rem] text-[#0045AD] font-bold">00</h1>
                            <p className="text-[3rem] text-[#0045AD] font-bold max-lg:pl-2 pl-5">:</p>
                        </div>
                        <p className="text-left text-[1.2rem] text-gray-700 tracking-[.2px] font-normal">days</p>
                    </div>

                    <div className='w-[22%]'>
                        <div className="flex items-center">
                            <h1 className="text-[3rem] text-[#0045AD] font-bold">20</h1>
                            <p className="text-[3rem] text-[#0045AD] font-bold max-lg:pl-2 pl-5">:</p>   
                        </div>
                        <p className="text-left text-[1.2rem] text-gray-700 tracking-[.2px] font-normal">hours</p>
                    </div>

                    <div className='w-[22%] '>
                        <div className='flex items-center'>
                            <h1 className="text-[3rem] text-[#0045AD] font-bold">59</h1>
                            <p className="text-[3rem] text-[#0045AD] font-bold max-lg:pl-2 pl-5">:</p>
                        </div>
                        <p className="text-left text-[1.2rem] text-gray-700 tracking-[.2px] font-normal max-lg:hidden">minutes</p>
                        <p className="hidden text-left text-[1.2rem] text-gray-700 tracking-[.2px] font-normal max-lg:block">mins</p>
                    </div>

                    <div className='w-[22%] '>
                        <h1 className="text-[3rem] text-[#0045AD] font-bold">10</h1>
                        <p className="text-left text-[1.2rem] text-gray-700 tracking-[.2px] font-normal">seconds</p>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default PVPHero
