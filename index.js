import chalk from 'chalk';
import randomColor from 'randomcolor';

const color = randomColor(); // a hex code for an attractive color

console.log(chalk.hex(color)`###############################`);
console.log(chalk.hex(color)`###############################`);
console.log(chalk.hex(color)`####                       ####`);
console.log(
  chalk.hex(color)`####        ` +
    chalk.hex(color)(`${color}`) +
    chalk.hex(color)`        ####`,
);
console.log(chalk.hex(color)`####                       ####`);
console.log(chalk.hex(color)`###############################`);
console.log(chalk.hex(color)`###############################`);
