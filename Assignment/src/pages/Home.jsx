import React, { useState } from 'react'
import Layout from '../layout/Layout'
import Section1 from '../layout/Section1'
import BeforeSection1 from '../layout/BeforeSection1';
import Section2 from '../layout/Section2';

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Layout search={search} setSearch={setSearch}>
        <BeforeSection1 />
        <Section1 search={search} />
        <Section2 />
      </Layout>
    </div>
  )
}

export default Home
