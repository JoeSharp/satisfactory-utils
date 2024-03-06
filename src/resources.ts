import { Resource } from "./types";

export const RESOURCES: Resource[] = [
  {
    name: 'Iron Ore',
    requires: [],
    image: 'https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/8/87/Iron_Ore.png'
  },
  {
    name: 'Copper Ore',
    requires: []
  },
  {
    name: 'Copper Ingot',
    requires: ['Copper Ore'],
    image: 'https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/0/00/Copper_Ingot.png'
  },
  {
    name: 'Iron Ingot',
    requires: ['Iron Ore'],
    image: 'https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/0/0a/Iron_Ingot.png'
  },
  {
    name: 'Iron Plate',
    requires: ['Iron Ingot'],
    image: 'https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/5/51/Iron_Plate.png'
  },
  {
    name: 'Iron Rod',
    requires: ['Iron Ingot'],
    image: 'https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/5/5f/Iron_Rod.png'
  },
  {
    name: 'Screws',
    requires: ['Iron Rod'],
    image: 'https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/5/59/Screw.png'
  },
  {
    name: 'Reinforced Plate',
    requires: ['Screws', 'Iron Plate'],
    image: 'https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/2/29/Reinforced_Iron_Plate.png'
  },
{
    name: 'Rotor',
    requires: ['Screws', 'Iron Rod'],
    image: 'https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/3/3d/Rotor.png'
  },
{
    name: 'Smart Plating',
    requires: ['Rotor', 'Reinforced Plate'],
    image: 'https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/d/d5/Smart_Plating.png'
  }
]

