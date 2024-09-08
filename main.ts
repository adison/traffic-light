input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    i = 1
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    i = 0
})
let status = 0
let loop = 0
let i = 0
i = 1
basic.forever(function on_forever() {
    let x: number;
    
    loop = loop + 1
    if (i == 0) {
        basic.showString("STOP")
        control.waitMicros(1000)
    } else if (status == 0) {
        //  green
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        x = 10
        while (x > 0) {
            basic.pause(1000)
            basic.showString("" + ("" + x))
            x -= 1
        }
        status = 1
    } else if (status == 1) {
        //  yello
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(3000)
        x = 3
        while (x > 0) {
            basic.pause(1000)
            basic.showString("" + ("" + x))
            x -= 1
        }
        status = 2
    } else {
        //  red
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        x = 10
        while (x > 0) {
            basic.pause(1000)
            basic.showString("" + ("" + x))
            x -= 1
        }
        status = 0
    }
    
})
