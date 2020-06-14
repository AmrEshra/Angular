import {FootballCoach} from './FootballCoach';
import { TennisCoach } from './TennisCoach';
import { Coach } from './Coach';

let r = new FootballCoach();
let t = new TennisCoach();

let coachs: Coach[] = [];
// shapes.push(s);
coachs.push(r);
coachs.push(t);

for(let c of coachs){
    console.log(c.getDailyWorkout());
}
