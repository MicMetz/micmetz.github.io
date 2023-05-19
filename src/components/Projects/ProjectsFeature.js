import React from 'react';

import { Card, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, Intro } from './ProjectsFeatureStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents/StyledComponents.js';
import { RecentProjects } from '../../constants/constants';




export const ProjectsFeature = () => (
  <Section nopadding id = "projects" >
    <SectionDivider />
    <SectionTitle main >Featured Work</SectionTitle >
    <GridContainer >
      {RecentProjects.map( ( value, idx ) => {
        return (
          <Card key = {idx} >
            <Img src = {value.image} style = {{ minHeight: '35%', maxHeight: '35%', position: 'relative', top: '0' }} />
            <TitleContent >
              <HeaderThree title="true" >{value.name}</HeaderThree >
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

