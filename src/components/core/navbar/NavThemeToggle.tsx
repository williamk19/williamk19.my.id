import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';

export default function NavThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleToggleColorMode = () => {
    toggleColorMode();
  }

  return (
    <IconButton
      onClick={handleToggleColorMode}
      aria-label='Toggle Color Mode'
      size='md'
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    />
  );
}