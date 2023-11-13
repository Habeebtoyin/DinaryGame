'use client'
import { Component } from "react"
import ActivitiesDetails from "@/data/ActivitiesDetails"


class Recent extends Component {
    constructor() {
        super();

        this.state = {
            data: ActivitiesDetails,
        }
    }

    render() {
        const {data} = this.state

        return (
            <div className="recent shadow-md rounded-[4px] p-6 bg-white max-lg:w-[100%] w-[48%] self-start">
                <h1 className="font-bold text-[2rem]">Recent Activities</h1>
                <div className="mt-[1em]">
                    {<>Coming Soon</>}
                    
                    {
                        // data.map(({id, title, value}) => 
                        //     <div key={id} className="mb-2">
                        //         <div className="inline-block py-3 border-b">
                        //             <div className="flex gap-3 justify-between items-center">
                        //                 <p className="text-[#464D59] ">{title}</p>
                        //                 <p className="">-</p>
                        //                 <p className="text-[#0045AD] ">{value}</p>
                        //             </div>
                        //         </div>
                        //     </div>
                        // )
                    }
                </div>
            </div>
        )

    }
}

export default Recent