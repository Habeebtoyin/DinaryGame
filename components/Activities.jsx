'use client'
import Recent from './Recent'
import Earn from './Earn'

const Activities = () => {
    return (
        <div className="flex max-lg:flex-col max-lg:gap-2 justify-between px-[10%] max-lg:px-[5%] max-lg:pt-[2rem] pt-[5rem] pb-[3rem]">

            <Recent />            

            <Earn />

        </div>
    )
}

export default Activities