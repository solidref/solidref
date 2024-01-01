import React, {useEffect, useState} from 'react';
// import {LanguageHierarchy, LanguageHierarchyObject} from '../state';
import LanguageEvolutionChart from './history/LanguageEvolutionChart';
import {CenteredToolbar} from '../Header';
import Typography from '@mui/material/Typography';
import Page from './Page';
import {styled, alpha, Divider, Paper} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

export type HistoryProps = {
  // languageHierarchy?: LanguageHierarchyObject;
};

const Search = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.light, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.light, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  display: 'flex',
  justifyContent: 'right',
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

function History({} /*languageHierarchy*/ : HistoryProps) {
  return <></>;
  // const [search, setSearch] = useState<string>('');
  // const [languages, setLanguages] = useState<LanguageHierarchy>(languageHierarchy?.hierarchy ?? {});

  // const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearch(event.target.value);
  // };

  // useEffect(() => {
  //   const hierarchy = languageHierarchy?.hierarchy ?? {};
  //   if (!search) {
  //     setLanguages(hierarchy);
  //     return;
  //   }
  //   setLanguages(
  //     Object.keys(hierarchy)
  //       .filter(
  //         (key) => key.includes(search) || hierarchy[key]?.children?.filter((item) => item.includes(search)).length,
  //       )
  //       .reduce((acc, cur) => {
  //         return {
  //           ...acc,
  //           [cur]: hierarchy[cur],
  //         };
  //       }, {}),
  //   );
  // }, [search, languageHierarchy]);

  // return (
  //   <>
  //     <CenteredToolbar sx={{justifyContent: 'space-between'}}>
  //       <Typography variant="h2">A History of Programming Languages</Typography>
  //       <Typography variant="h6">Here is a graphic history of programming languages</Typography>
  //     </CenteredToolbar>
  //     <Page>
  //       <Paper elevation={0} style={{display: 'flex', justifyContent: 'right'}} onChange={onSearchChange}>
  //         <Search>
  //           <SearchIconWrapper>
  //             <SearchIcon />
  //           </SearchIconWrapper>
  //           <StyledInputBase placeholder="Search Language…" inputProps={{'aria-label': 'search'}} />
  //         </Search>
  //       </Paper>
  //       <Divider style={{margin: '20px 0'}} />
  //       {/* <LanguageEvolutionChart languages={languages} /> */}
  //     </Page>
  //   </>
  // );
}

export default History;
