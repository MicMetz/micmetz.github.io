import Header from "../../components/Layouts/Header.js";
import { Layout } from "../../components/Layouts/Layout.js";
import { Title1, Title2 } from "../../styles/StyledTypography.js";



export default function Topics() {
		return (
				<>
						<Header title = "Topics by Maggie Appleton" />
						<Layout >
								<header >
										<Title1 >Topics</Title1 >
										<Title2 >Good</Title2 >
								</header >
								<p >Topics, yeah?</p >
						</Layout >
				</>
		);
}
