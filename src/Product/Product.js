import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';
import '../bgstyle.css';
import cardData from './dataproduct.json';

const CardList = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </SimpleGrid>
  );
};

const Card = ({ heading, description, imageURL }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      bgColor={'white'}
      shadow={'dark-lg'}
      textAlign={'center'}
    >
      <Stack align={'center'} spacing={2}>
        <Flex w={230} h={150}>
          <Image src={imageURL} w={'100%'} h={'100%'} alt={heading} />
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'} fontWeight={'bold'}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default function gridListWith() {
  return (
    <Box py={'5rem'} id="Product" className="bg-layanan">
      <Stack spacing={4} as={Container} maxW={'4xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Produk Kami
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          Berikut ini beberapa produk dari kami
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex
          flexWrap="wrap"
          gridGap={6}
          justify="center"
          px={{ base: '2rem', md: 0 }}
        >
          <CardList />
        </Flex>
      </Container>
    </Box>
  );
}
