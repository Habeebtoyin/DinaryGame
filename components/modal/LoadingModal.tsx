import React from "react";
import ClaimUiComp from "../ClaimUiComp";
export default function LoadingModal() {
	return (
		<ClaimUiComp
			linkName=""
			title="Transaction Has been submitted "
			actionFunction={() => null}
			desc="Loading .....  Please Wait"
			image=""
		/>
	);
}
