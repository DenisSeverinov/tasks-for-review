const get = (path, object, fallback) => {
	const keys = path.split('.');
	let keyIndex = 0;

	while (keyIndex < keys.length) {
		object = object[keys[keyIndex++]]
		if (object === undefined) return fallback || undefined;
	}

	return object
};

const obj = { foo: { bar: { baz: 'apple' } } };

// Реализовать функцию get. Пример работы ниже

// get('foo', obj) => { bar: { baz: 'apple' } }
// get('foo.bar', obj) => { baz: 'apple' }
// get('foo.bar.baz', obj) => 'apple'
// get('foo.bar.baz.kek.lol.z', obj) => undefined
// get('foo.bar.baz.kek', obj, 'яблоко') => 'яблоко'
console.log(get('foo', obj));
console.log(get('foo.bar', obj));
console.log(get('foo.bar.baz', obj));
console.log(get('foo.bar.baz.kek.lol.z', obj));
console.log(get('foo.bar.baz.kek', obj, 'яблоко'));