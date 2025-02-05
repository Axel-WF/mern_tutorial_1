import { Container, Flex, HStack, Icon, Link } from '@chakra-ui/react'
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si'
import { Copyright } from './Copyright.tsx'
import { Logo } from './Logo'

export const Footer = () => (
  <Container as="footer" py={{ base: '10', md: '12' }} minW={"50%"}>
        <Flex gap="4" alignItems={"center"} justify={"space-between"}>
          <Logo height="32" />
          <HStack>
            {socialLinks.map(({ href, icon }, index) => (
              <Link key={index} href={href} colorpalette="red">
                <Icon size="md">{icon}</Icon>
              </Link>
            ))}
          </HStack>
          <Copyright />
        </Flex>
      
  </Container>
)

const socialLinks = [
  { href: 'https://x.com', icon: <SiX /> },
  { href: 'https://github.com', icon: <SiGithub /> },
  { href: 'https://www.linkedin.com', icon: <SiLinkedin /> },
]

export default Footer