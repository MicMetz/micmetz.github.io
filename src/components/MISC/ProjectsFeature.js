import { ProjectsData } from "@/posts/data/ProjectsData.js";
import React from 'react';
import styled from "styled-components";
import { Section, SectionTitle } from '../../styles/StyledComponents.js';



export const ProjectsFeature = () => (
		<Section nopadding id = "projects" >
				<SectionTitle main >Featured Work</SectionTitle >
				<GridContainer >
						{ProjectsData.map( ( value, idx ) => {
								return (
										<Card key = {idx} >
												<Img src = {value.image} style = {{ minHeight: '35%', maxHeight: '35%', position: 'relative', top: '0' }} />
												<TitleContent >
														<HeaderThree title = "true" >{value.name}</HeaderThree >
														<Hr />
												</TitleContent >
												<Intro >{value.description}</Intro >
												<br />
												<br />
												<br />
												<div >
														<TitleContent >Features</TitleContent >
														<TagList >
																{value.tags?.map( ( t, i ) => {
																		return <Tag key = {i} >{t}</Tag >;
																} )}
														</TagList >
												</div >
												<div >
														<TagList style = {{ position: 'relative', bottom: '0' }} >
																{value.technologies?.map( ( t, i ) => {
																		return <Tag key = {i} style = {{ position: 'relative', paddingBottom: '0' }} >
																				{t}
																		</Tag >;
																} )}
														</TagList >
												</div >
												<UtilityList style = {{ position: 'relative', bottom: '0' }} >
														<ExternalLinks href = {value.code} >Code</ExternalLinks >
														<ExternalLinks href = {value.demo} >Demo</ExternalLinks >
												</UtilityList >
										</Card >
								);
						} )}
				</GridContainer >
		</Section >
);



const Img = styled.img`
  width: 100%;
  max-height: 50%;
  object-fit: cover;
  overflow: hidden;
`

const GridContainer = styled.section`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${( props ) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem 0;
  }
`;


const Card = styled.div`
  display: block;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  max-width: 450px;
  max-height: 850px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  @media ${( props ) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;


const TitleContent = styled.div`
  position: relative;
  text-align: center;
  z-index: 20;
  width: 100%;
  color: #dce3e7;
  font-size: 2rem;
`;


const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 1.5rem 0;
  font-size: ${( props ) => props.title ? '3rem' : '2rem'};
`;

const Hr = styled.hr`
  width: 5rem;
  height: 0.2rem;
  margin: 0.5rem auto;
  border: 0;
  background: #d0bb57;
`;

const Intro = styled.div`
  width: 98%;
  margin: 0 auto;
  padding: 2rem 1rem;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 2rem;
  font-style: italic;
  line-height: 2rem;
`;


const CardInfo = styled.p`
  width: 100%;
  padding: 0 1rem;
  color: #dce3e7;
  line-height: 24px;
  font-size: 2rem;
  text-align: left;
  @media ${( props ) => props.theme.breakpoints.sm} {
    padding: .3rem

  }
`;


const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;

  &:hover {
    background: #801414;

  }
`;

const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
`;

const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1rem;
`
