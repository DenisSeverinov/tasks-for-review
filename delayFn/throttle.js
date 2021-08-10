function throttle(fn, delay) {
	let isTrottled = false
	let savedThis;
	let savedArgs;
	function wrapper(...rest) {
		if (isTrottled) {
			savedThis = this;
			savedArgs = rest;
			return;
		}

		fn.apply(this, rest)
		isTrottled = true

		setTimeout(() => {
			isTrottled = false
			if (savedArgs) {
				wrapper.apply(savedThis, savedArgs)
				savedArgs = savedThis = null
			}
		}, delay)
	}

	return wrapper;
}
function mouseMove() {
	console.log(new Date());
}

mouseMove = throttle(mouseMove, 3000)

setInterval(mouseMove, 300)