import { configs } from "../config";

// 9.25s tested
export const elevator_travel_time_loop = (current_floor: number, floors: number[]): ElevatorTravelResult => {
    const floors_visited = [current_floor, ...floors]
    let total_travel_time = 0
    
    // test took 9.3s, 9.34
    floors.forEach(floor => {
        total_travel_time += Math.abs(floor - current_floor);
        current_floor = floor;
    })

    return { total_travel_time: total_travel_time * configs.seconds_per_floor, floors_visited}
}



