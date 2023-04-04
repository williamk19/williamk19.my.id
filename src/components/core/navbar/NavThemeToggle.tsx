import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/color-mode';
import { IconButton } from '@chakra-ui/react';

export default function NavThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <IconButton
      onClick={() => toggleColorMode()}
      aria-label='Toggle Dark Mode'
      size='md'
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    />
  );
}