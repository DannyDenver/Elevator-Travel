import { configs } from "../config";

// 9.25s tested
export let elevator_travel_time_loop = (current_floor: number, floors: number[]): [number, number[]] => {
    const floors_visited = [current_floor, ...floors]
    let floors_traveled = 0
    
    // test took 9.3s, 9.34
    floors.forEach(floor => {
        floors_traveled += Math.abs(floor - current_floor);
        current_floor = floor;
    })

    return [floors_traveled * configs.seconds_per_floor, floors_visited];
}



