import { NextApiResponse, NextApiRequest } from 'next'

import { twClient } from '@/lib/axios'
import { TwitterTweetProps } from '@/types'
import { encodeUrl } from '@/utils/converter'

const getTwitterUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query

  const { data } = await twClient.get<TwitterTweetProps>(
    `users/${process.env.TWITTER_ID}?${encodeUrl(query)}`
  )

  return res.status(200).json(data)
}

export default getTwitterUser
