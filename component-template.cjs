const template = (variables, { tpl }) => {
  variables.jsx.openingElement.attributes.push({
    "type": "JSXAttribute",
    "name": {
      "type": "JSXIdentifier",
      "name": "data-testid"
    },
    "value": {
      "type": "StringLiteral",
      "value": `${variables.componentName.replace("Svg", "")}Icon`
    }
  })

  return tpl`
${variables.imports};

${variables.interfaces};

const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);

${variables.exports};
`
}
exports.default = template;