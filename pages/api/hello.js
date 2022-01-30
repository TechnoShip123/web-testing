// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// API directory is for setting up routes that only apply to the server...
// As a result, the code here won't increase client-side javascript.

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
