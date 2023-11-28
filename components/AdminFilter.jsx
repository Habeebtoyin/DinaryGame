'use client'
import { usePathname } from "next/navigation"

const AdminFilter = ({onFilter, onRefresh}) => {

    const pathname = usePathname();

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value
        onFilter(selectedValue)
    } 
    return (
        <div>
            {
                pathname === '/admin/leaderboard' &&
                <div className="flex justify-end items-center">
                    <div>Filter By</div>
                    <div className="mx-5">
                        <select name="" id="" className="bg-white outline-none p-1 px-2 rounded-sm" onChange={handleSelectChange}>
                            <option value="all">All Game Modes</option>
                            <option value="Denary">Denary</option>
                            <option value="PVP">PVP</option>
                            <option value="Endless">Endless</option>
                        </select>
                    </div>
                    {/* <div className="bg-white p-1 rounded-sm cursor-pointer" onClick={onRefresh}>Refresh</div> */}
                    <input className="bg-white outline-none p-1 px-2 rounded-sm" type="date" />
                </div>
            }

            {
                pathname === '/admin/nft-minting' &&
                <div className="flex justify-end items-center">
                    <div>Filter By</div>
                    <div className="mx-5">
                        <select name="" id="" className="bg-white outline-none p-1 px-2 rounded-sm" onChange={handleSelectChange}>
                            <option value="all">All NFT Types</option>
                            <option value="Master">Master NFT</option>
                            <option value="Legendary">Legendary NFT</option>
                        </select>
                    </div>
                    {/* <div className="bg-white p-1 rounded-sm cursor-pointer" onClick={onRefresh}>Refresh</div> */}
                    <input className="bg-white outline-none p-1 px-2 rounded-sm" type="date" />
                </div>
            }

            {
                pathname === '/admin/rewards' &&
                <div className="flex justify-end items-center">
                    <div>Filter By</div>
                    <div className="mx-5">
                        <select name="" id="" className="bg-white outline-none p-1 px-2 rounded-sm" onChange={handleSelectChange}>
                            <option value="all">All Reward Types</option>
                            <option value="NFT">NFT</option>
                            <option value="ZBC">ZBC</option>
                            <option value="BTC">BTC</option>
                            <option value="ETH">ETH</option>
                            <option value="LEUM">LEUM</option>
                        </select>
                    </div>
                    {/* <div className="bg-white p-1 rounded-sm cursor-pointer" onClick={onRefresh}>Refresh</div> */}
                    <input className="bg-white outline-none p-1 px-2 rounded-sm" type="date" />
                </div>
            }
        </div>
    )
}

export default AdminFilter