import Image from "next/image";
import AdminNavBarTitle from "./AdminNavBarTitle";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const AdminNavBar = ({ activeUpdate }) => {
	const toggleDropdown = () => {
		activeUpdate((prev) => !prev);
	};

	return (
		<div className="bg-white shadow-sm fixed flex justify-between items-center w-[80%] left-[20%] px-8 py-2 z-[1000] max-lg:w-[100%] max-lg:left-0">
			<AdminNavBarTitle />

			<div className=" w-[13%] flex items-center justify-between max-lg:hidden">
				<div className="max-lg:hidden">
					<Image
						src="/assets/images/search.png"
						alt="Dyleum Logo"
						width={17}
						height={17}
					/>
				</div>

				<div className="max-lg:hidden">
					<Image
						src="/assets/images/Vector7.png"
						alt="Dyleum Logo"
						width={17}
						height={17}
					/>
				</div>

				<div className="flex items-center justify-between">
					<div>
						<Image
							src="/assets/images/img.png"
							alt="Dyleum Logo"
							width={30}
							height={30}
						/>
					</div>
					<i className="ml-2 bx bx-chevron-down text-[1.2rem]"></i>
				</div>
			</div>
			<ConnectButton />

			{/* <div className="max-lg:block hidden" onClick={toggleDropdown}>
                <i className="ml-2 bx bx-menu text-[1.5rem]"></i>
            </div> */}
		</div>
	);
};

export default AdminNavBar;
