import React from 'react'
import Button from '@material-ui/core/Button'
import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Components</h1>
    <p>Welcome to the components page.</p>
    <Button color="primary"> Test </Button>
  </Layout>
)

export default SecondPage
