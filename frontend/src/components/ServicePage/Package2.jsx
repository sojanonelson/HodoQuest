import React from 'react'
import PackageDetail from '../Common/PackageDetail'
import Footer from '../Footer/Footer'
import Premium from '../../Data/PackageDetails/premium'
const Package2 = () => {
  return (
    <div>
        <PackageDetail data={Premium}/>
        <Footer/>

    </div>
  )
}

export default Package2