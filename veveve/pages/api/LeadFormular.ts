// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { LFQ } from "../../components/model/LeadFormularModel";

export default function questions(
  req: NextApiRequest,
  res: NextApiResponse<LFQ[]>
) {
  let price: LFQ[] = [
    new LFQ(
      1,
      "Hvor lang tid har i været i gang?",
      "0-1 år",
      10,
      "1-3 år",
      50,
      "3+ år",
      100
    ),
    new LFQ(
      2,
      "Har i allerede brugt penge på betalt annoncering?",
      "ja",
      100,
      "nej",
      10
    ),
    new LFQ(
      3,
      "Hvad sælger i?",
      "Ecommerce",
      100,
      "Services (Håndværk, revisor, læge etc)",
      50,
      "andet",
      10
    ),
    new LFQ(
      4,
      "Har i lavet opsætning konverteringsporing",
      "ecommerce konvertinger",
      100,
      "målkonventeringer",
      50,
      "ved ikke",
      10
    ),
  ];

  res.status(200).json(price);
}
