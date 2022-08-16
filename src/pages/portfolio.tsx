import { NextPage } from 'next'

import { Portfolio } from '@/features/Portfolio'
import { AppHead } from '@/components/Element/Head'

const PortfolioPage: NextPage = () => {
  return (
    <>
      <AppHead
        title="Portfolioページ"
        description="しまぶーのポートフォリオのポートフォリオページです"
      />
      <Portfolio />
    </>
  )
}

export default PortfolioPage
