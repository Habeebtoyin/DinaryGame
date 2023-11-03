import Link from "next/link"
import Image from "next/image"

const AdminPopularGames = () => {
    return (
        <div className="bg-white border border-slate-300 p-5 rounded-[5px] w-[28%] max-lg:w-[100%]">
            <h1 className="font-bold text-[1.2rem]">Most Popular Games</h1>
            <div className="flex justify-between items-end">
                <div>
                    <p className="text-center text-[#6E7887]" >5</p>
                    <div>
                        <Image
                            src="/assets/images/Rectangle1.png"
                            alt="Dyelum Logo"
                            width={70}
                            height={70}
                        />
                    </div>
                    <p className="text-center text-[#6E7887]" >A</p>
                </div>

                <div>
                    <p className="text-center text-[#6E7887]" >3</p>
                    <div>
                        <Image
                            src="/assets/images/Rectangle3.png"
                            alt="Dyelum Logo"
                            width={70}
                            height={70}
                        />
                    </div>
                    <p className="text-center text-[#6E7887]" >B</p>
                </div>

                <div>
                    <p className="text-center text-[#6E7887]" >10</p>
                    <div>
                        <Image
                            src="/assets/images/Rectangle2.png"
                            alt="Dyelum Logo"
                            width={70}
                            height={70}
                        />
                    </div>
                    <p className="text-center text-[#6E7887]" >C</p>
                </div>
            </div>

            <div className="grid max-lg:grid-cols-1 grid-cols-2 gap-6 my-[1em]">
                <div className="flex items-center">
                    <p className="bg-[#EA8D26] px-3 py-1 text-center text-white rounded-sm">A</p>
                    <p className="ml-3">Denary</p>
                </div>
                <div className="flex items-center">
                    <p className="bg-[#59E6F6] px-3 py-1 text-center text-white rounded-sm">B</p>
                    <p className="ml-3">PVP</p>
                </div>
                <div className="flex items-center">
                    <p className="bg-[#0045AD] px-3 py-1 text-center text-white rounded-sm">C</p>
                    <p className="ml-3">Endless</p>
                </div>
            </div>
        </div>
    )
}

export default AdminPopularGames