namespace easyrobot{
    
    //% blockId=motorRun block="run %motor at %speed=motorSpeedPicker|\\%||for %value %unit"
    //% weight=100 blockGap=8
    //% group="Move"
    //% motor.fieldEditor="motors"
    //% motor.fieldOptions.decompileLiterals=1
    //% expandableArgumentMode=toggle
    //% help=motors/motor/run
    export function runMotor(motor: control.Component, speed: number, value: number = 0, unit: MoveUnit = MoveUnit.MilliSeconds) {
        (motor as motors.MotorBase).run(speed, value, unit);
    }
}
