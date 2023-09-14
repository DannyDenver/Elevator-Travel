import { configs } from "../config";

//tests took 9.16s,9.8, 9.1 // functional programming
export const elevator_travel_time_functional = (current_floor: number, floors: number[]): ElevatorTravelResult => {

    return {
        total_travel_time: [current_floor, ...floors].reduce(
            (floors_traveled, current_floor, index) => floors_traveled + ([current_floor, ...floors][index + 1] ?
                Math.abs((current_floor - [current_floor, ...floors][index + 1]) * configs.seconds_per_floor)
                : 0), 0), floors_visited: [current_floor, ...floors]
    }
}
