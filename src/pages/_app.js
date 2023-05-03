import { useRouter } from "next/router";
import Theme from '../styles/theme';




export default function App( { Component, pageProps } ) {
	const router = useRouter();

	return (
		<>
			<Theme >
				<Component Component key = {router.asPath} {...pageProps} />
			</Theme >
		</>
	);
}
