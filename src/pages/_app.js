import Footer from "@/components/Footer/Footer.js";
import Navigation from "@/components/Navigation/Navigation.js";

import React from "react";
import Theme from '../themes/theme.js';



export default function App( { Component, pageProps, router } ) {
		// const [ posts, setPosts ] = useState( [] );
		// const [ notes, setNotes ] = useState( [] );
		// const [ projects, setProjects ] = useState( [] );
		// const [ essays, setEssays ] = useState( [] );
		//
		//
		// useEffect( () => {
		// 		const data = getStaticProps();
		//
		// 		setPosts( data );
		// 		setNotes( data.noteFilePaths );
		// 		setProjects( data.projectFilePaths );
		// 		setEssays( data.essayFilePaths );
		// }, [] );



		return (
				<>
						<Theme >
								<container >
										<Navigation />
										<Component Component key = {router.route} {...pageProps} />
										<Footer />
								</container >
						</Theme >
				</>
		);
}




