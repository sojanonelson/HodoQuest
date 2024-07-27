import React from 'react'
import ProjectDevelopment from '../../Data/PackageDetails/project-development'
import Footer from '../Footer/Footer'
import PackageDetail from '../Common/PackageDetail'
const Package3 = () => {
  return (
    <div>
    <PackageDetail data={ProjectDevelopment}/>
    <Footer/>

</div>
  )
}

export default Package3