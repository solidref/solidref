import React, {useEffect, useState} from 'react';
import Link from '@mui/material/Link';
import Paper, {PaperProps} from '@mui/material/Paper';
import {styled} from '@mui/material/styles';

import SvgIconByName from '../../icons/SvgIconByName';
import {Button, Menu, MenuItem} from '@mui/material';
import ContentLoader from 'react-content-loader';
import {normalizeLanguageName} from '../../utils/language';

const LanguagePaper = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const LanguageButton = styled(Button)(({theme}) => ({
  '&:hover': {
    backgroundColor: 'transparent', // Remove hover background color
  },
  '&:active': {
    backgroundColor: 'transparent', // Remove active (clicked) background color
  },
  textTransform: 'none',
}));

const TextPaper = styled(Paper)(({theme}) => ({
  background: 'transparent',
  ...theme.typography.body2,
  padding: '0 0 0 10px',
}));

export interface LanguageItemProps extends PaperProps {
  loading?: boolean;
  language: string;
  subLanguages?: string[];
}

function toCamelCase(inputString: string): string {
  return inputString.toLowerCase().replace(/(.)/, (match, group1) => {
    return group1.toUpperCase();
  });
}

// Function to parse color in various formats (hex, rgb, rgba)
function parseColor(colorString: string) {
  // Remove whitespace and convert to lowercase
  const sanitizedColorString = colorString.replace(/\s/g, '').toLowerCase();

  // Check if the color is in hex format (#RRGGBB or #RRGGBBAA)
  if (sanitizedColorString.startsWith('#')) {
    const hexColor = sanitizedColorString.slice(1);
    const hasAlpha = hexColor.length === 8;
    const channelLength = hasAlpha ? 2 : 2;
    const hexChannels = [0, 0, 0, 0].map((_, index) =>
      parseInt(hexColor.substr(index * channelLength, channelLength), 16),
    );
    const alpha = hasAlpha ? hexChannels.splice(3, 1)[0] / 255 : 1;

    return {
      r: hexChannels[0],
      g: hexChannels[1],
      b: hexChannels[2],
      a: alpha,
    };
  }

  // Check if the color is in rgba format (rgba(r, g, b, a))
  if (sanitizedColorString.startsWith('rgba(')) {
    const rgbaMatches = sanitizedColorString.match(/rgba\(([^)]+)\)/);
    if (rgbaMatches && rgbaMatches[1]) {
      const rgbaValues = rgbaMatches[1].split(',').map((value) => parseFloat(value.trim()));
      if (rgbaValues.length === 4) {
        return {
          r: rgbaValues[0],
          g: rgbaValues[1],
          b: rgbaValues[2],
          a: rgbaValues[3],
        };
      }
    }
  }

  // Check if the color is in rgb format (rgb(r, g, b))
  if (sanitizedColorString.startsWith('rgb(')) {
    const rgbMatches = sanitizedColorString.match(/rgb\(([^)]+)\)/);
    if (rgbMatches && rgbMatches[1]) {
      const rgbValues = rgbMatches[1].split(',').map((value) => parseInt(value.trim()));
      if (rgbValues.length === 3) {
        return {
          r: rgbValues[0],
          g: rgbValues[1],
          b: rgbValues[2],
          a: 1,
        };
      }
    }
  }

  return null; // Invalid color format
}

function LanguageItem({language, loading = false, subLanguages = [], ...rest}: LanguageItemProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [dominantColor, setDominantColor] = useState<string>('#FFF');
  const [fadedColor, setFadedColor] = useState<string | null>(null);
  const opacityPercentage = 10; // Adjust this value to control the opacity percentage
  useEffect(() => {
    // Function to calculate the faded color
    const calculateFadedColor = () => {
      if (dominantColor) {
        // Parse the color to ensure it's in a consistent format
        const parsedColor = parseColor(dominantColor);

        if (parsedColor) {
          const {r, g, b, a} = parsedColor;

          // Calculate the faded color with reduced opacity
          const fadedColor = `rgba(${r}, ${g}, ${b}, ${a * (opacityPercentage / 100)})`;

          setFadedColor(fadedColor);
        }
      }
    };

    // Call the calculateFadedColor function when the predominant color changes
    calculateFadedColor();
  }, [dominantColor, opacityPercentage]);

  const colorId = `color-panel-${language}-${Math.random()}`;
  useEffect(() => {
    // Function to calculate the predominant color within the component
    const calculatePredominantColor = () => {
      const container = document.getElementById(colorId); // Replace with your container ID or element reference

      // Check if the container element exists
      if (container) {
        const elementList = container.querySelectorAll<HTMLElement>('*'); // Get all elements within the container

        const colorCounts: Record<string, number> = {}; // Object to store color counts

        // Function to check if a color is white or black (ignoring alpha)
        const isWhiteOrBlack = (color: string) => {
          const lowercaseColor = color.toLowerCase();
          return (
            lowercaseColor === 'white' ||
            lowercaseColor === 'black' ||
            lowercaseColor.match(/rgba?\(0, 0, 0/gi) ||
            lowercaseColor.match(/rgba?\(255, 255, 255/gi)
          );
        };

        // Loop through all elements within the container
        elementList.forEach((element) => {
          const computedStyle = window.getComputedStyle(element);

          // Extract the color from computed style (e.g., background-color, fill, stroke, etc.)
          const color =
            element.getAttribute('stop-color') ||
            computedStyle.fill ||
            computedStyle.stroke ||
            computedStyle.backgroundColor;

          // Ignore white and black colors
          if (color && !isWhiteOrBlack(color) && color.indexOf('url(') === -1) {
            colorCounts[color] = (colorCounts[color] || 0) + 1;
          }
        });

        // Find the color with the highest count
        let maxColor: string = '#FFF';
        let maxCount = 0;
        for (const color in colorCounts) {
          if (colorCounts[color] > maxCount) {
            maxColor = color;
            maxCount = colorCounts[color];
          }
        }

        setDominantColor(maxColor);
      }
    };

    // Call the function when the component mounts
    calculatePredominantColor();
  }, [colorId]);

  if (loading) {
    return (
      <LanguagePaper>
        <ContentLoader viewBox="0 0 380 40">
          <rect x="8" y="8" rx="5" ry="5" width="24" height="24" />
          <rect x="40" y="12" rx="4" ry="4" width="100" height="16" />
        </ContentLoader>
      </LanguagePaper>
    );
  }

  if (!subLanguages.length || !subLanguages.filter((l) => l !== language).length) {
    return (
      <Link href={`/by-language/${normalizeLanguageName(language)}`}>
        <LanguagePaper {...rest} id={colorId} style={{backgroundColor: fadedColor || dominantColor}}>
          <SvgIconByName name={language} />
          <TextPaper elevation={0}>{toCamelCase(language)}</TextPaper>
        </LanguagePaper>
      </Link>
    );
  }

  return (
    <LanguagePaper {...rest} id={colorId} style={{backgroundColor: fadedColor || dominantColor}}>
      <LanguageButton
        disableRipple
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <SvgIconByName name={language} />
        <TextPaper elevation={0}>{toCamelCase(language)}</TextPaper>
      </LanguageButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {[...new Set([...subLanguages, language])].sort().map((language) => (
          <MenuItem onClick={handleClose} style={{width: '300px'}}>
            <Link href={`/by-language/${normalizeLanguageName(language)}`}>
              <LanguagePaper {...rest} elevation={0} style={{background: 'transparent', height: 'auto'}}>
                <SvgIconByName name={language} />
                <TextPaper elevation={0}>{toCamelCase(language)}</TextPaper>
              </LanguagePaper>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </LanguagePaper>
  );
}

export default LanguageItem;
