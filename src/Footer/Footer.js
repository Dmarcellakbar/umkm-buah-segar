import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Image,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-scroll';
const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      border={'1px'}
      borderColor={'white'}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bgColor: 'aqua',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box bgColor={'#1a202c'} color={'white'}>
      <Container as={Stack} maxW={'6xl'} py={10} align={'center'}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr ' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <a href="/">
              <Box
                border={'1px'}
                borderColor={'white'}
                borderRadius={'2xl'}
                p={3}
                w={200}
                boxShadow={'dark-lg'}
              >
                <Image src="logobuah.jpg" />
              </Box>
            </a>
            <Text fontSize={'sm'}>
              © 2023 UMKM BUAH MALANG. All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>UMKM BUAH MALANG</ListHeader>
            <Link to="section1" smooth={'true'}>
              <button>Home</button>
            </Link>
            <Link to="section2" smooth={'true'}>
              <button>Profile</button>
            </Link>
            <Link to="section4" smooth={'true'}>
              <button>Product</button>
            </Link>
            <Link to="section6" smooth={'true'}>
              <button>Testimonials</button>
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
