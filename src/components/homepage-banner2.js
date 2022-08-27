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

export default function HomepageBanner2(props) {
  return (
    <Section>
      <Container>
        <Flex gap={4} variant="responsive">
          <Box width="half">
            ssdfsfsfsdfsdf
          </Box>
          <Box width="half">
            <Subhead as="h2">{props.heading}</Subhead>
            <Text>{props.text}</Text>
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageBanner2Content on HomepageBanner2 {
    id
    heading
    text
  }
`
