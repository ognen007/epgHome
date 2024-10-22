import { Box, Flex, Img } from '@chakra-ui/react'
import Collaborators from "../../assets/collaborators.png"

export const Sponsors = () => {
  return (
    <Flex w={"100%"} h={"auto"}>
      <Img w={"100%"} h={"auto"} src={Collaborators}/>
    </Flex>
  )
}
