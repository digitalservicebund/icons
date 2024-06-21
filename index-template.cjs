const path = require("path");
const camelCase = require("camelcase");

const formatExportName = (name) => {
  if (/[-]/g.test(name) && /^\d/.test(name)) {
    return `Svg${camelCase(name, { pascalCase: true })}`
  }

  if (/^\d/.test(name)) {
    return `Svg${name}`
  }

  return camelCase(name, { pascalCase: true })
}

const indexTemplate = (paths) => {
  const exportEntries = paths.map(({ path: filePath }) => {
    const basename = path.basename(filePath, path.extname(filePath))
    const exportName = formatExportName(basename)
    return `export { default as ${exportName} } from './${basename}.js'`
  })
  return exportEntries.join('\n')
}

exports.default = indexTemplate;