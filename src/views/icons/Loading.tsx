import {styled, keyframes} from '@mui/system';

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const prixClipFix = keyframes`
  0% { clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0); }
  50% { clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0); }
  75%, 100% { clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%); }
`;

const LoaderBase = styled('div')(() => ({
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  position: 'relative',
  animation: `${rotate} 1s linear infinite`,
}));

const Ring = styled('div')(({theme}) => ({
  content: '""',
  boxSizing: 'border-box',
  position: 'absolute',
  inset: '0px',
  borderRadius: '50%',
  border: `5px solid ${theme.palette.primary.main}`,
  animation: `${prixClipFix} 2s linear infinite`,
  '&:nth-of-type(2)': {
    inset: '8px',
    transform: 'rotate3d(90, 90, 0, 180deg)',
    borderColor: `${theme.palette.secondary.main} transparent transparent transparent`, // Example usage of theme for color
  },
}));

// Adjusted Loader component to include Ring components as children
const Loader = () => (
  <LoaderBase>
    <Ring />
    <Ring />
  </LoaderBase>
);

export default Loader;
