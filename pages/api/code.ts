import type { NextApiRequest, NextApiResponse } from "next";

if (!process.env.RAYCAST_REDIRECT_URL) {
  throw new Error("RAYCAST_REDIRECT_URL env variable is not set");
}

export default function authorize(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;
  const url = `${process.env.RAYCAST_REDIRECT_URL}&code=${query.code}&state=${query.state}`;
  res.redirect(url);
}
