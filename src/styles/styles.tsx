export const linkHoverStyles = (
  pathname: string,
  linkname: string,
  colorMode: string,
) => {
  return {
    '&': {
      position: 'relative',
    },

    ':after': {
      position: 'absolute',
      bottom: '0',
      left: '0%',
      height: '2px',
      width: pathname === linkname ? '100%' : '0%',
      backgroundColor: colorMode === 'light' ? '#000' : '#fff',
      display: 'block',
      content: '""',
      transition: '0.3s',
    },

    '&:hover': {
      textDecoration: 'none',
    },

    '&:hover:after': {
      width: '100%',
      textDecoration: 'none',
    },
  };
};

export const linkMenuStyles = (
  pathname: string,
  linkname: string,
  colorMode: string,
) => {
  const bgColor = colorMode === 'light' ? 'blackAlpha.200' : 'whiteAlpha.200';
  return {
    '&': {
      background: pathname === linkname ? bgColor : 'none',
      transition: 'all .4s ease-in-out',
      textDecoration: 'none',
    },

    '&:hover': {
      textDecoration: 'none',
      background: colorMode === `dark` ? `whiteAlpha.200` : `blackAlpha.200`,
    },
  };
};
