module.exports = {
  '**/*.(ts|tsx)': () => 'npm tsc --noEmit',
  '**/*.(ts|tsx|js)': (filenames) => [
    `npm eslint --fix ${filenames.join(' ')}`,
    `npm prettier --write ${filenames.join(' ')}`,
  ],

  '**/*.(md|json)': (filenames) =>
    `npm prettier --write ${filenames.join(' ')}`,
}
