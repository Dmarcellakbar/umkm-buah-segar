import { Box, Container, Heading, Text, Stack } from '@chakra-ui/react';

import '../bgstyle.css';
import Statistics from './statistic';

export default function Profile() {
  return (
    <Box px={4} py={'8rem'} id="profile" className="bg-profile">
      <Stack
        spacing={4}
        as={Container}
        maxW={'6xl'}
        textAlign={'center'}
        className="bg-profile-text"
      >
        <Heading fontSize={'3xl'}>UMKM BUAH SEGAR</Heading>
        <Text color={'black'} fontSize={'18px'}>
          UMKM buah segar ini melayani penjualan buah mulai dari grosir, eceran,
          dengan kualitas buah istimewa dan segar.
        </Text>
      </Stack>

      <Statistics />
    </Box>
  );
}
