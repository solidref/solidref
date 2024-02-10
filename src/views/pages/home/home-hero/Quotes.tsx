import React from 'react';
import Slider from 'react-slick';

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import {
  Avatar,
  Box,
  Card,
  CardContent,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';

export default function Quotes() {
  const theme = useTheme();

  const sliderOpts = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const quotes: Array<{
    quote: string;
    image: string;
    name: string;
    on: string;
  }> = [
    {
      quote: 'Leave the code better than you found it.',
      image: '/home/authors/Uncle_Bob_400x400.png',
      name: 'Robert C. Martin (Uncle Bob) ',
      on: 'Clean Code',
    },
    {
      quote:
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      image: 'https://martinfowler.com/img/mf-dallas.jpg',
      name: 'Martin Fowler',
      on: 'Refactorign',
    },
    {
      quote: 'Make it work, make it right, make it fast.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Kent_Beck_1.jpg/220px-Kent_Beck_1.jpg',
      name: 'Kent Beck',
      on: 'Simplicity',
    },
    {
      quote: 'Abstraction is the key in the heart of software engineering.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Grady_Booch%2C_CHM_2011_2_cropped.jpg/220px-Grady_Booch%2C_CHM_2011_2_cropped.jpg',
      name: 'Grady Booch',
      on: 'Abstraction',
    },
    {
      quote: 'Technical debt is like a loan shark; it compounds interest daily.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Ward_Cunningham_-_Commons-1.jpg/220px-Ward_Cunningham_-_Commons-1.jpg',
      name: 'Ward Cunningham',
      on: 'Technical Debt',
    },
    {
      quote: 'Design patterns should be viewed as a toolkit of adaptable schemes for solving common design problems.',
      image: 'https://avatars.githubusercontent.com/u/172399?v=4',
      name: 'Erich Gamma',
      on: 'Flexibility',
    },
    {
      quote:
        'Designing software is about designing something beyond its initial creation; it’s designing for its evolution.',
      image: '/home/authors/Rebecca-Wirfs-Brook.png',
      name: 'Rebecca Wirfs-Brock',
      on: 'Design',
    },
    {
      quote: 'Design patterns are breadcrumbs of knowledge scattered throughout the forest of software development.',
      image:
        'https://media.licdn.com/dms/image/C4E03AQFuZ8mZE-S85Q/profile-displayphoto-shrink_200_200/0/1516232658736?e=2147483647&v=beta&t=i2isTTY-M_7M1baFxwd9hLxGfyO15cHhTvIL8J9zqmk',
      name: 'Ralph Johnson',
      on: 'Patterns',
    },
    {
      quote: 'Any design, no matter how complex, can be seen as a series of decisions taken to solve a larger problem.',
      image: 'https://martinfowler.com/img/mf-dallas.jpg',
      name: 'Martin Fowler',
      on: 'Software Design',
    },
    {
      quote: 'The best way to predict the future is to invent it.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Alan_Kay_%283097597186%29_%28cropped%29.jpg',
      name: 'Alan Kay',
      on: 'Object-Oriented Programming',
    },
  ];

  return (
    <Slider {...sliderOpts}>
      {quotes.map((item, i) => (
        <Card
          key={i}
          sx={{
            backgroundColor: 'transparent',
            height: '250px',
            boxShadow: 0,
          }}
        >
          <CardContent>
            <Box component={Typography} variant={'h6'} fontWeight={400} marginBottom={2}>
              <Typography variant="h4" color="textPrimary">
                <FormatQuoteIcon style={{color: theme.palette.secondary.main}} />
              </Typography>
              <Typography variant="h6" color="textPrimary" fontStyle={'italic'}>
                {item.quote}
              </Typography>
            </Box>
            <Box width={1}>
              <Box component={ListItem} disableGutters width={'auto'} padding={0}>
                <ListItemAvatar>
                  <Avatar src={item.image} />
                </ListItemAvatar>
                <Box
                  component={ListItemText}
                  primary={item.name}
                  secondary={
                    <>
                      on <Typography fontStyle={'italic'}>{item.on}</Typography>
                    </>
                  }
                  margin={0}
                />
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Slider>
  );
}
