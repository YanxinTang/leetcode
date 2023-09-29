const path = require('path');
const argv = require('minimist')(process.argv.slice(2));
const fs = require('fs/promises');

const SRC_DIR = path.resolve(__dirname, '../problems');

let name;
if (argv._.length <= 0) {
  console.log('请输入题目');
  process.exit(1);
} else if (argv._.length > 1) {
  console.log('参数过多');
  process.exit(1);
} else {
  name = String(argv._[0]);
}

const testFileTemplate = `import func from '.';

test.each([
  {
    input: [],
    want: '',
  }
])('($#)', ({ input, want }) => {
  expect(func.apply(null, input)).toBe(want);
});
`;

async function newProblems(name) {
  const questionDir = path.join(SRC_DIR, name);
  await fs.mkdir(questionDir);
  await fs.writeFile(path.join(questionDir, 'index.js'), '');
  await fs.writeFile(path.join(questionDir, 'index.test.js'), testFileTemplate);
  return '创建成功';
}

newProblems(name).then(console.log, console.error);
