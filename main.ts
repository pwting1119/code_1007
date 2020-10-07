for (let index = 0; index <= 4; index++) {
    led.plot(0, index)
    led.plot(4, index)
    led.plot(index, 4)
    led.plot(index, 0)
}
basic.forever(function () {
	
})
