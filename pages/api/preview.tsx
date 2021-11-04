export default async function preview(req, res) {
  const { postType, postId } = req.query;

  let previewUrl = "";

  if (postType) {
    previewUrl = `/preview/${postId}?postType=${postType}`;
  } else {
    previewUrl = "/";
  }

  res.writeHead(307, { Location: previewUrl });
  res.end();
}
