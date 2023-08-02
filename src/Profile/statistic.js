import {
  Box,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import {
  FaRegHandLizard,
  FaRegEdit,
  FaWallet,
  FaRegHandshake,
} from 'react-icons/fa';

function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      //   borderColor={useColorModeValue('gray.800', 'gray.500')}
      backgroundColor={'#1A202C'}
      color={'white'}
      rounded={'lg'}
    >
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontSize={'20px'} fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'16px'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box my={'auto'} color={'white'} alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Statistics() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={'5rem'} px={{ base: 2, sm: 12, md: 17 }}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={'Dipetik Langsung'}
          stat={'Buah Segar dari pohon'}
          icon={<FaRegHandLizard size={'3em'} />}
        />
        <StatsCard
          title={'Harga Terjangkau'}
          stat={'Harga Sesuai Kantong Masyarakat'}
          icon={<FaWallet size={'3em'} />}
        />
        <StatsCard
          title={'Bekerja sama'}
          stat={'Bekerja sama dengan para petani buah'}
          icon={<FaRegHandshake size={'3em'} />}
        />
      </SimpleGrid>
    </Box>
  );
}
