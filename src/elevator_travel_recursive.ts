import { configs } from "../config";

// 9.25s tested
export let elevator_travel_time_recursive = (current_floor: number, floors: number[]): [number, number[]] => {
    const floorz = [current_floor, ...floors];

    let travel_time = (floors: number[]): number => {
        //how does it exit
        if (floors.length == 1) {
            return 0
        }

        return Math.abs(floors[0] - floors[1]) + travel_time(floors.slice(1))
    }

    return [travel_time(floorz) * configs.seconds_per_floor, floorz]
}
