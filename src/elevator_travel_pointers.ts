import { configs } from "../config";

// sliding window; tests took 9.36 s
export const elevator_travel_time_pointer = (current_floor: number, floors: number[]): ElevatorTravelResult => {
    let total_travel_time = 0

    let starting_floor = current_floor
    let goingDown = floors[0] < floors[1]

    floors.forEach((floor, i) => {
        if (floors[i + 1]) {
            if (floor < floors[i + 1]) { // going up 
                if (goingDown == true) {
                    total_travel_time += Math.abs(starting_floor - floor);
                    starting_floor = floor;
                    goingDown = false;
                }
            } else { // going down
                if (goingDown == false) {
                    total_travel_time += Math.abs(starting_floor - floor);
                    starting_floor = floor;
                    goingDown = true;
                }
            }
        } else {
            total_travel_time += Math.abs(starting_floor - floor)
        }
    })

    return { total_travel_time: total_travel_time * configs.seconds_per_floor, floors_visited: [current_floor, ...floors]};
}
