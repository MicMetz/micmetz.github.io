import Link from 'next/link'
import React from 'react'
import { Layout } from '../components/Layouts/Layout.js'
import { Img, Section, SectionText, SectionTitle } from '../styles/StyledComponents.js'



export default function AboutPage() {

		return ( <Layout >
						<Section nopadding id = "AboutPage" >


								<Section flex >

										<Section row nopadding >
												<Img src = "https://raw.githubusercontent.com/MicMetz/micmetz.github.io/master/public/images/avatar.jpg" />
										</Section >

										<Section row nopadding >
												<SectionTitle main >WhoAmI</SectionTitle >
										</Section >

										<Section row >
												<SectionText >
														<SectionTitle >"I am a perpetual learner."</SectionTitle >
														My name is Michael Metz, and as of right now, I would consider myself, a perpetual
														learner. Or, if the last few years are any indication, a more accurately status I
														could ascribe myself would be as a perpetual
														student.

														<br />
														<br />

														For the last few years, I've been studying computer science at the University of
														Colorado at Boulder (CU Boulder).

														<br />
														<br />

														Not too long ago, I was studying how groups interact and how human social
														relationships form as a Sociology and Information Science focused student at
														multiple New York universities, and colleges, for both my
														undergraduate degrees,
														associate's degrees, and certificates.

														<br />
														<br />

														Next, who knows? I'm open to anything, and never satisfied with just sitting idle,
														I’m always scouring for something.
												</SectionText >
										</Section >

								</Section >

								{/* <SectionDivider /> */}


								<Section flex >
										<Section row >
												<video autoPlay loop muted playsInline controls style = {{ width: '100%' }} >
														<source
																src = "https://raw.githubusercontent.com/MicMetz/micmetz.github.io/master/public/video/troisjs.mp4"
																type = "video/mp4"
														/>
												</video >
										</Section >
										<Section row nopadding >
												<SectionTitle >what I do.</SectionTitle >
										</Section >

										<Section row >

												<SectionText >
														<h3 className = "discriptor" >Computer graphics</h3 >
														<br />

														<div className = "information" >
																<p >
																		For about a year now, I've been developing a steady addiction to 3D graphics, and game
																		development.
																</p >
																<br />
																<p >
																		So far I've explored a few different libraries, and frameworks. And I've used almost
																		every single one of the most popular engines from Unity and Unreal, to Godot and
																		Lumberyard. But so far, I've found that the best
																		fit
																		for me has
																		been <Link href = "https://threejs.org/" >THREE.js</Link >, the <Link
																		href = "https://www.babylonjs.com/"
																>BabylonJS</Link > framework, and a focus on web
																		development.
																</p >
																<br />
																<p >
																		Check out what I've been working on in my <Link
																		href = "/src/pages/Projects"
																>projects</Link > archive.
																</p >

																<br />
														</div >
												</SectionText >
										</Section >

								</Section >


						</Section >
				</Layout >

  )

}
