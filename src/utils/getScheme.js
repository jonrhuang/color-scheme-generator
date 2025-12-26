
export async function getScheme(seedColor, scheme) {
  const baseUri = 'https://www.thecolorapi.com'
  const colorApiRes = await fetch(`${baseUri}/scheme?hex=${seedColor}&mode=${scheme}`)
    .then(res => res.json())
  return colorApiRes.colors
}
