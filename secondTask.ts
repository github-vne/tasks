interface IItem {
  name: string;
  timeout: number;
}

const run = (arr: IItem[]): void => {
  let delay = 0;
  arr.forEach(({name, timeout}) => {
    setTimeout(() => {
      console.log(name);
    }, delay + timeout);
    delay += timeout;
  });
};

const example1: IItem[] = [
  {name: 'first', timeout: 3000},
  {name: 'second', timeout: 5000},
  {name: 'third', timeout: 2000},
];

const example2: IItem[] = [
  {name: 'first', timeout: 1000},
  {name: 'second', timeout: 0},
  {name: 'third', timeout: 1000},
];

run(example1);
run(example2);
