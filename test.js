const test = require("ava")
const { default: getClientXY } = require("esm")(module)(".")

require("browser-env")()

test("main", t => {
	t.deepEqual(getClientXY(new MouseEvent("click", {
		clientX: 1,
		clientY: 2
	})), [1, 2])

	t.deepEqual(getClientXY(new TouchEvent("click", {
		touches: [{
			clientX: 1,
			clientY: 2
		}],
		targetTouches: [{
			clientX: 1,
			clientY: 2
		}]
	})), [1, 2])

	t.deepEqual(getClientXY(new TouchEvent("click", {
		touches: [],
		changedTouches: [{
			clientX: 1,
			clientY: 2
		}]
	})), [1, 2])
})
