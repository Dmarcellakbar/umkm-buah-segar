import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import './Navbar.css';
import { Link } from 'react-scroll';
import Name from './Name';

const NavLink = props => {
  return (
    <>
      <Link to="section1" smooth={'true'}>
        <button className="glow-on-hover">
          <b>Home</b>
        </button>
      </Link>

      <Link to="section2" smooth={'true'}>
        <button className="glow-on-hover">
          <b>Profile</b>
        </button>
      </Link>

      <Link to="section3" smooth={'true'}>
        <button className="glow-on-hover">
          <b>Product</b>
        </button>
      </Link>

      <Link to="section4" smooth={'true'}>
        <button className="glow-on-hover">
          <b>Testimonial</b>
        </button>
      </Link>
    </>
  );
};

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={'#1A202C'}
        px={4}
        width={'100%'}
        zIndex={'100'}
        position={'fixed'}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ lg: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <a href="/">
              <Name />
            </a>
          </HStack>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'none', lg: 'flex' }}
          >
            <NavLink />
          </HStack>
          {/* <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex> */}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ lg: 'none' }}>
            <Stack as={'nav'} spacing={4} align={'center'}>
              <NavLink />
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
