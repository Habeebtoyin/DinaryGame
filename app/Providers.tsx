import React from "react";
import ClientProvider from "./clientProvider";
import { GlobalProvider } from "./GlobalProvider";
import ToastProvider from "./ToasterProvider";
export default function Providers({ children }: any) {
	return (
		<>
			<ClientProvider>
				<GlobalProvider>
					<ToastProvider>{children}</ToastProvider>
				</GlobalProvider>
			</ClientProvider>
		</>
	);
}
