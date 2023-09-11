import { configs } from "../config";

export let elevator_travel_time_pointer = (current_floor: number, floors: number[]): [number, number[]] => {
    const floors_visited = [current_floor, ...floors]
    let floors_traveled = 0

    // sliding window; tests took 9.36 s
    let starting_floor = current_floor
    let goingDown = floors[0] < floors[1]

    floors.forEach((floor, i) => {
        if (floors[i + 1]) {
            if (floor < floors[i + 1]) { // going up 
                if (goingDown == true) {
                    floors_traveled += Math.abs(starting_floor - floor)
                    starting_floor = floor
                    goingDown = false
                }
            } else { // going down
                if (goingDown == false) {
                    goingDown = true;
                    floors_traveled += Math.abs(starting_floor - floor)
                    starting_floor = floor
                }
            }
        } else {
            floors_traveled += Math.abs(starting_floor - floor)
        }
    })
    return [floors_traveled * configs.seconds_per_floor, floors_visited];
}
