import CoverImage                             from "/public/images/photography/QuietWeek.jpg"
import Image                                  from 'next/image'
import Link                                   from 'next/link'
import React                                  from 'react'
import { Layout }                             from '../components/Layouts/Layout.js'
import UnderlineHoverLink                     from "../components/Links/UnderlineHoverLink.js";
import { Spacer }                             from "../components/MISC/Spacer.js";
import { Section, SectionText, SectionTitle } from '../styles/StyledComponents.js'




export default function AboutPage() {

  return (
    <Layout >
      <Section nopadding id = "AboutPage" >

        <Section row nopadding >
          <Image src = {CoverImage} alt = "Quiet Week" />
        </Section >

        <Section row nopadding >
          <SectionTitle main >Who Am I</SectionTitle >
        </Section >

        <Spacer size = "large" />

        <Section row >
          <SectionText >
            <SectionTitle >"I am a perpetual learner."</SectionTitle >
            <Spacer />
            My name is Michael Metz, and as of right now, I would consider myself, a perpetual
            learner. Or, if the last few years are any indication, a more accurately status I
            could ascribe myself would be as a perpetual
            student.
            <Spacer />
            For the last few years, I've been studying computer science at the University of
            Colorado at Boulder (CU Boulder).
            <Spacer />
            Not too long ago, I was studying how groups interact and how human social
            relationships form as a Sociology and Information Science focused student at
            multiple New York universities, and colleges, for both my
            undergraduate degrees, associate's degrees, and certificates.
            <Spacer />
            Next, who knows? I'm open to anything, and never satisfied with just sitting idle,
            I’m always scouring for something.
          </SectionText >
        </Section >

        <Spacer size = "3xlarge" />

        <Section row >
          <video autoPlay loop muted playsInline controls style = {{ width: '100%' }} >
            <source
              src = "/video/troisjs.mp4"
              type = "video/mp4"
            />
          </video >
        </Section >

        {/* <Spacer size = "medium"/> */}

        <Section row nopadding >
          <SectionTitle >What Do I Do?</SectionTitle >
        </Section >

        <Spacer size = "large" />

        <Section row >
          <SectionText >
            <SectionTitle >Computer graphics</SectionTitle >
            <Spacer />
            For about a year now, I've been developing a steady addiction to 3D graphics, and game
            development.
            <Spacer />
            So far I've explored a few different libraries, and frameworks. And I've used almost
            every single one of the most popular engines from Unity and Unreal, to Godot and
            Lumberyard. But so far, I've found that the best fit for me has been{' '}
            <Link href = "https://threejs.org/" >THREE.js</Link >,{' '}
            the{' '}
            <Link href = "https://www.babylonjs.com/" >BabylonJS</Link >{' '}
            framework, and a focus on web
            development.
            <Spacer />
            Check out what I've been working on in my{' '}
            <UnderlineHoverLink href = "/src/pages/Projects" >projects archive.</UnderlineHoverLink >{' '}

            <Spacer />
          </SectionText >
        </Section >

      </Section >
    </Layout >

  )

}
