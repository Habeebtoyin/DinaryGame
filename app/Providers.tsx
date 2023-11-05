import React from "react";
import ClientProvider from "./clientProvider";
import { GlobalProvider } from "./GlobalProvider";

export default function Providers({ children }: any) {
	return (
		<>
			<ClientProvider>
				<GlobalProvider>{children}</GlobalProvider>
			</ClientProvider>
		</>
	);
}
