import { configs } from "../config";

//tests took 9.16s,9.8, 9.1 // functional programming
export let elevator_travel_time_functional = (current_floor: number, floors: number[]): [number, number[]] => {

    return [[current_floor, ...floors].reduce(
        (floors_traveled, current_floor, index) => floors_traveled + ([current_floor, ...floors][index + 1] ?
            Math.abs((current_floor - [current_floor, ...floors][index + 1]) * configs.seconds_per_floor)
            : 0), 0), [current_floor, ...floors]]
}
