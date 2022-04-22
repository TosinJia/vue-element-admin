// src\icons\svg\
const req = require.context('../../icons/svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys()

// ./(.*).svg
const re = /\.\/(.*)\.svg/

const svgIcons = requireAll(req).map(i => {
  console.log('src\\views\\icons\\svg-icons.js', i)
  return i.match(re)[1]
})

export default svgIcons
