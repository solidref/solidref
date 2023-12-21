import {Dispatch, SetStateAction} from 'react';

export const handleChange =
  (panel: string, expanded: string[], setExpanded: Dispatch<SetStateAction<string[]>>) =>
  (event: React.SyntheticEvent, newExpanded: boolean) => {
    console.log(newExpanded);
    if (newExpanded) {
      setExpanded([...new Set([...expanded, panel])]);
    } else {
      setExpanded(expanded.filter((x) => x !== panel));
    }
    console.log(expanded);
  };
