// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to the John Archive
Each puzzle solved opens a door
every puzzle revels more 
using videos audio and photos`;
};


// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const bluddy = async (args: string[]): Promise<string> => {
  return `have layers`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const specs = async (args: string[]): Promise<string> => {
  return `fucking numbskull`;
};

export const andrew = async (args: string[]): Promise<string> => {
  return `'the baba grandma`;
};

export const babygrandma = async (args: string[]): Promise<string> => {
  return `'how did you even fid this also andrew likes cock?`;
};

export const rocco = async (args?: string[]): Promise<string> => {
  return `is fat.`;
};

export const Jordan = async (args?: string[]): Promise<string> => {
  return `es a oger.`;
};

export const Chayce = async (args?: string[]): Promise<string> => {
  return `is a lazy peice of shit.`;
};

export const guager = async (args?: string[]): Promise<string> => {
  return `It's Me`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};


export const Ock = async (args?: string[]): Promise<string> => {
  return `montbuel`;
};

export const jordab = async (args?: string[]): Promise<string> => {
  return `ey em not jordab.`;
};

export const brompton_cocktail = async (args?: string[]): Promise<string> => {
  return `how did you even find this one`;
};

export const lost = async (args?: string[]): Promise<string> => {
  return `https://www.youtube.com/watch?v=-4Ug-Axl7Lg&list=RD-4Ug-Axl7Lg&start_radio=1`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
     ██╗██████╗██╗  █████╗   ██╗     █████╗██████╗ ████████╗  ██████╗   █████████╗   ███╗   █████████████████╗
     ████╔═══████║  ██████╗  ██║    ██╔══████╔══████╔════██║  ██████║   ████╔════╝   ████╗  ████╔════╚══██╔══╝
     ████║   ███████████╔██╗ ██║    █████████████╔██║    ███████████║   ███████╗     ██╔██╗ ███████╗    ██║   
██   ████║   ████╔══████║╚██╗██║    ██╔══████╔══████║    ██╔══████╚██╗ ██╔██╔══╝     ██║╚██╗████╔══╝    ██║   
╚█████╔╚██████╔██║  ████║ ╚████║    ██║  ████║  ██╚████████║  ████║╚████╔╝███████ ██ ██║ ╚███████████╗  ██║   
 ╚════╝ ╚═════╝╚═╝  ╚═╚═╝  ╚═══╝    ╚═╝  ╚═╚═╝  ╚═╝╚═════╚═╝  ╚═╚═╝ ╚═══╝ ╚══════╚═╚  ═╝  ╚═══╚══════╝  ╚═╝   
                                                                                                            

Welcome to the John Archive
Please enter the password to progress
`;
};
