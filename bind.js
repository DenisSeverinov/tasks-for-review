const person = {
	name: 'Denis',
}

const myBind = (fn, context, ...rest) => {
	return function(...args) {
		const unicId = `${Date.now()}`

		context[unicId] = fn

		const result = context[unicId](...rest.concat(args))
		delete context[unicId]

		return result
	}
}

function foo(email, name) {
	console.log(this.name);
	console.log(email);
	console.log(name);
}

myBind(foo, person)('@saasd', '234234234')
myBind(foo, person, '@saasd')('234234234')
myBind(foo, person, '@saasd', '234234234')()