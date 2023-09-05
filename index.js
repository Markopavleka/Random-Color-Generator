import chalk from 'chalk';
import randomColor from 'randomcolor';

const color = randomColor(); // a hex code for an attractive color

const height = 9;
const width = 31;

/*for (let i = 0; i <= height; i++) {
  const row = '#'.repeat(width);
  console.log(row);
}*/

console.log(chalk.hex(color)`###############################`);
console.log(chalk.hex(color)`###############################`);
console.log(chalk.hex(color)`####                       ####`);
console.log(
  chalk.hex(color)`####        ` + color + chalk.hex(color)`        ####`,
);
console.log(chalk.hex(color)`####                       ####`);
console.log(chalk.hex(color)`###############################`);
console.log(chalk.hex(color)`###############################`);
