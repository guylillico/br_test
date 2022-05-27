export const size = {
  sm: "576",
  md: "768",
  lg: "992",
  xl: "1200",
  xxl: "1460",
  xxxl: "1600"
}

const device = Object.keys(size).reduce((acc, cur) => {
  acc[cur] = `(min-width: ${size[cur]}px)`
  return acc
}, {})

export default device
