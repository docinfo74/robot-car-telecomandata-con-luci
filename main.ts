radio.onReceivedNumber(function (receivedNumber) {
    Motore = receivedNumber
})
let Motore = 0
basic.showIcon(IconNames.Happy)
radio.setGroup(100)
basic.forever(function () {
    basic.showNumber(Motore)
    if (Motore == 0) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, 50)
    } else if (Motore == 1) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 50)
    } else if (Motore == 2) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, 50)
    } else if (Motore == 3) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Right, 50)
    } else if (Motore == 4) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Stop, 50)
    } else {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Stop, 50)
    }
})
basic.forever(function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
    basic.pause(500)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
    basic.pause(500)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Blue)
    basic.pause(500)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
    basic.pause(500)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Cyan)
    basic.pause(500)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Pinkish)
    basic.pause(500)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Yellow)
    basic.pause(500)
})
