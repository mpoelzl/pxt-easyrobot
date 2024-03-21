//% weight=100 color=#DC22E1 block="Easy Robot" blockId="Easy Robot" icon="\uf0e7"
namespace easyrobot{

    //% blockId=runEasyMotor block="run %motor at %speed=motorSpeedPicker|\\%||for %value %unit"
    //% weight=1000 
    //% group="Move"
    //% motors.fieldEditor="motors"
    //% motors.fieldOptions.decompileLiterals=1
    //% expandableArgumentMode=toggle
    //% inlineInputMode=inline
    //% help=motors/motor/run
    export function runMotor(motor: motors.Motor, speed: number, value: number = 0, unit: MoveUnit = MoveUnit.MilliSeconds) {
        motor.run(speed, value, unit);
    }
}
