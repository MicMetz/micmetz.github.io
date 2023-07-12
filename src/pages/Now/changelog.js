import React          from 'react';
import Header         from '../../components/Layouts/Header.js';
import Layout         from '../../components/Layouts/Layout.js';
import TitleWithCount from '../../components/MISC/TitleWithCount.js';
import { Title2 }     from '../../styles/StyledTypography.js';




function ChangeCatalogue() {
  return ( <div ></div > );
}


export default function Changelog() {
  return (
    <Layout >
      <Header title = 'Changelog' />
      <header style = {{ marginBottom: 'var(--space-xl)' }} >
        <TitleWithCount >Changelog</TitleWithCount >
        <Title2 >
          Changes to the site.
        </Title2 >
      </header >
      <ChangeCatalogue />
    </Layout >
  );
}

