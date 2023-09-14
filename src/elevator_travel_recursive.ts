import { configs } from "../config";

// 9.25s tested
export const elevator_travel_time_recursive = (current_floor: number, floors: number[]): ElevatorTravelResult => {
    const floors_visited = [current_floor, ...floors];

    let travel_time = (floors: number[]): number => {
        //how does it exit
        if (floors.length == 1) {
            return 0
        }

        return Math.abs(floors[0] - floors[1]) + travel_time(floors.slice(1))
    }

    return {total_travel_time: travel_time(floors_visited) * configs.seconds_per_floor, floors_visited}
}
