// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import MongooseConnect from "../../Database/connection"

export default function handler(req, res) {
  MongooseConnect()
  res.status(200).json({ name: 'John Doe' })
}
