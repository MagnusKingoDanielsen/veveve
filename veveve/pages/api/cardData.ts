// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type CardData = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CardData>
) {
  res.status(200).json({ name: "John Doe" });
}
