import React from 'react'
import PackageDetail from '../Common/PackageDetail'
import Footer from '../Footer/Footer'

import PremiumEconomic from '../../Data/PackageDetails/premium-economic'
const Package1 = () => {
  console.log('PremiumEconomic..')
  return (
    <div>
        <PackageDetail data={PremiumEconomic}/>
        <Footer/>

    </div>
  )
}

export default Package1