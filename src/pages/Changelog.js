import React         from 'react'
import Layout        from "../components/Layouts/Layout.js";
import InDevelopment from "../components/MDX/InDevelopment.js";
import { Title1 }    from "../styles/StyledTypography.js";



export default function Changelog() {
  return (
    <Layout >
      <Title1 >Changelog</Title1 >
      <InDevelopment />
    </Layout >
  );
}
