// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

// export default async (req, res) => {
//   const { method } = req;

//   // This will allow OPTIONS request
//   if (method === "OPTIONS") {
//     return res.status(200).send("ok");
//   }
// };