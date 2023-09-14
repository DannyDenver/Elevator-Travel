import { describe, expect, test } from '@jest/globals';
import { elevator_travel_time_loop } from '../src/elevator_travel_loop';
import { elevator_travel_time_functional } from '../src/elevator_travel_functional';
import { elevator_travel_time_pointer } from '../src/elevator_travel_pointers';
import { elevator_travel_time_recursive } from '../src/elevator_travel_recursive';

describe('elevator travel time', () => {
    [elevator_travel_time_loop, elevator_travel_time_functional, elevator_travel_time_pointer, elevator_travel_time_recursive].forEach(fn => {
        test('function works', () => {
            expect(fn(12, [2, 9, 1, 32])).toStrictEqual({total_travel_time: 560, floors_visited: [12, 2, 9, 1, 32]})
        })
        test('function works', () => {
            expect(fn(5, [1, 8, 4, 1])).toStrictEqual({total_travel_time: 180, floors_visited: [5, 1, 8, 4, 1]})
        })

        test('function works', () => {
            expect(fn(6, [5, 2, 8, 1])).toStrictEqual({total_travel_time: 170, floors_visited: [6, 5, 2, 8, 1]})
        })
    })
})
