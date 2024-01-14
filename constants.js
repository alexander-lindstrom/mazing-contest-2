//Grid
export const height = 34
export const width = 18
export const innerHeight = 16;
export const outerHeight = 9;

//Terrain
export const empty = 0
export const noBuild = -1
export const noPassNoBuild = -2

//Towers
export const blockTower = 1
export const sellableBlockTower = 2
export const clapTower = 3
export const sellableClapTower = 4
export const upgradedBlockTower = 5

//Random generation
export const maxClap = 3
export const minClap = 0
export const maxBlock = 17
export const minBlock = 5
export const minGold = 5
export const maxGold = 20
export const minLumber = 0
export const maxLumber = 3

//Start/Goal
export const startX = 0
export const startY = 8
export const stopX = height-1
export const stopY = 9

//Simulation
export const clapRange = 3.5 //Squares
export const clapDuration = 5.0 //Seconds
export const clapCooldown = 5.0 //Seconds
export const normalSpeed = 4.8 //Squares per second
export const clapSpeed = normalSpeed/2 //Squares per second
export const dt = 1/50 //Seconds
export const maxIter = 100000 //Iterations