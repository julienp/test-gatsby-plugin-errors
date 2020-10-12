exports.onPreInit = ({ reporter }) => {
  reporter.setErrorMap({
    333333: {
      text: context => `Error text is "${context && context.message}"`,
      level: "ERROR",
      category: "USER",
      docsUrl: `https://www.gatsbyjs.org/docs/gatsby-cli/#new`,
    },
  })
}

exports.sourceNodes = ({
  actions,
  createNodeId,
  createContentDigest,
  reporter,
  ...other
}) => {
  reporter.info(`Miaow 😸`)
  reporter.panic({
    id: `333333`,
    context: {
      message: `Oh noes`,
    },
    error: new Error(`whoops0`),
  })
  const nodeData = {
    title: "Test Node",
    description: "Testing the node ",
  }
  const newNode = {
    ...nodeData,
    id: createNodeId("TestNode-testid"),
    internal: {
      type: "TestNode",
      contentDigest: createContentDigest(nodeData),
    },
  }
  actions.createNode(newNode)
}
