import {SvgIconProps} from '@mui/material';
import Assemblyscript from './Assemblyscript';
import Coffeescript from './Coffeescript';
import Closurescript from './Closurescript';
import Dart from './Dart';
import GenericCodeIcon from './GenericCodeIcon';
import Elm from './Elm';
import Javascript from './Javascript';
import Purescript from './Purescript';
import Python from './Python';
import Rescript from './Rescript';
import Typescript from './Typescript';

export interface SvgIconByNameProps extends SvgIconProps {
  name: string;
}

function SvgIconByName({name, ...rest}: SvgIconByNameProps) {
  switch (name) {
    case 'assemblyscript':
      return <Assemblyscript {...rest} />;
    case 'coffeescript':
      return <Coffeescript {...rest} />;
    case 'closurescript':
      return <Closurescript {...rest} />;
    case 'dart':
      return <Dart {...rest} />;
    case 'elm':
      return <Elm {...rest} />;
    case 'javascript':
      return <Javascript {...rest} />;
    case 'purescript':
      return <Purescript {...rest} />;
    case 'python':
      return <Python {...rest} />;
    case 'rescript':
      return <Rescript {...rest} />;
    case 'typescript':
      return <Typescript {...rest} />;
    default:
      return <GenericCodeIcon {...rest} />;
  }
}

export default SvgIconByName;
