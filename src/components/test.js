import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import {
  Box,
  ButtonList,
  Container,
  Flex,
  Heading,
  Kicker,
  Section,
  Subhead,
  Text,
} from "./ui"

export default function Test(props) {
  return (
    <Section>
      <Container>
        <Flex gap={4} variant="responsive">
          <Box width="half">
            ssdfsfsfsdfsdf
          </Box>
          <Box width="half">
            <Subhead as="h2">{props.title}</Subhead>
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment TestContent on Test {
    id
    title
  }
`
