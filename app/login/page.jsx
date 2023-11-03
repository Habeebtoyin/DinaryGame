import Link from "next/link"
const Login = () => {
    return (
        <div className="hero hero-bg bg-cover max-lg:bg-left bg-center mt-[3.7rem] px-[10%] relative text-white min-h-[42vw] flex items-center">
            <form action="" className="my-5 bg-white text-black max-lg:w-[100%] w-[40%] p-4 rounded-[5px]">
                
                <p className="font-semibold text-[1.2rem]">Welcome!</p>

                <div className="my-6">
                    <h1 className="font-bold text-[2rem]">Sign in to Indices</h1>
                    <p className="font-semibold text-[1.2rem]">Enter your details below</p>
                </div>

                <div>
                    <div className="mb-3">
                        <label className="block mb-2 font-semibold text-[1.2rem]" >User name</label>
                        <input placeholder="Enter your user name" type="text" className="border border-black w-[100%] p-3 rounded-[3px] outline-none" />
                    </div>
                    <div className="mb-3 relative">
                        <label className="block mb-2 font-semibold text-[1.2rem]" >Password</label>
                        <input placeholder="Enter your password" type="text" className="border border-black w-[100%] p-3 rounded-[3px] outline-none" />
                        <i className="bx bx-low-vision absolute text-[1.2rem] right-3 top-[60%]"></i>
                    </div>
                    <div className="mb-3 flex justify-between">
                        <div className="flex w-[50%]">
                            <input type="checkbox" />
                            <label className="ml-[.5rem] text-[1rem]" >Remember me</label>
                        </div>
                        <div className="w-[45%]">
                            <p className="text-right">Forgot Password?</p>
                        </div>
                    </div>
                    <div className="mb-3">
                        <input type="submit" value="Login" className="block w-[100%] text-white my-[1rem] bg-[#0045AD] px-5 py-3 rounded-[4px]"/>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default Login