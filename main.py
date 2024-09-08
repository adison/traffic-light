def on_button_pressed_a():
    global i
    i = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global i
    i = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

status = 0
loop = 0
i = 0
i = 1

def on_forever():
    global loop, status
    loop = loop + 1
    if i == 0:
        basic.show_string("STOP")
        control.wait_micros(1000)
    elif status == 0:
        # green
        pins.digital_write_pin(DigitalPin.P0, 1)
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P2, 0)
        x = 10
        while x > 0:
            basic.pause(1000)
            basic.show_string("" + str(x))
            x -= 1
        status = 1
    elif status == 1:
        # yello
        pins.digital_write_pin(DigitalPin.P0, 0)
        pins.digital_write_pin(DigitalPin.P1, 1)
        pins.digital_write_pin(DigitalPin.P2, 0)
        basic.pause(3000)
        x = 3
        while x > 0:
            basic.pause(1000)
            basic.show_string("" + str(x))
            x -= 1
        status = 2
    else:
        # red
        pins.digital_write_pin(DigitalPin.P0, 0)
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P2, 1)
        x = 10
        while x > 0:
            basic.pause(1000)
            basic.show_string("" + str(x))
            x -= 1
        status = 0
basic.forever(on_forever)
