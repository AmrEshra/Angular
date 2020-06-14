import {Coach} from './Coach';

export class TennisCoach implements Coach{

    getDailyWorkout(): string {
        return `Go Tennis Team`;
    }

}
