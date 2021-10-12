function curry(fn) {
	return function foo(...rest) {
		if (rest.length >= fn.length) {
			return fn.apply(this, rest)
		} else {
			return function bar(...args) {
				return foo.apply(this, rest.concat(args))
			}
		}
	}
}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3) ); // 6, всё ещё можно вызывать нормально
console.log(curriedSum(1)(2,3) ); // 6, каррирование первого аргумента
console.log(curriedSum(1)(2)(3) ); // 6, каррирование всех аргументов