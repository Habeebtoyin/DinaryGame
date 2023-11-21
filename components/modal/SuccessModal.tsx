import React from "react";
import ClaimUiComp from "../ClaimUiComp";
export default function SuccessModal({ desc }: { desc: string }) {
	//  "s
	return (
		<ClaimUiComp
			title="Congratulations!"
			desc={desc}
			actionFunction={() => {}}
			linkName=""
			image=""
		/>
	);
}
