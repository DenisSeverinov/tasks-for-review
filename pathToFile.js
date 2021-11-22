// Написать функцию getFilesPath,
// которая выводит пути до всех вайлов в виде массива
// Пример работы ниже

// getFilesPath(folder)

// [
//   '/root/a/foo.js',
//   '/root/b/foo.js',
//   '/root/b/bar.js',
//   '/root/c/e/f/baz.js',
// ]

const folder = {
  name: 'root',
  folders: [
    {
      name: 'a',
      files: ['foo.js'],
    },
    {
      name: 'b',
      files: ['foo.js', 'bar.js'],
    },
    {
      name: 'c',
      folders: [
        { name: 'd', files: [] },
        { name: 'e', folders: [{ name: 'f', files: ['baz.js'] }] },
      ],
    },
  ],
};

const getFilesPath = (folder, currentPath = '/', filesPath = []) => {
	currentPath += folder.name + '/';

	folder.files?.forEach(item => {
		filesPath.push(`${currentPath}${item}`)
	})

	if (!folder.folders?.length) return filesPath;
	return folder.folders?.flatMap(item => getFilesPath(item, currentPath, [...filesPath]))
}

console.log(getFilesPath(folder));
