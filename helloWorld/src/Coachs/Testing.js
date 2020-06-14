"use strict";
exports.__esModule = true;
var FootballCoach_1 = require("./FootballCoach");
var TennisCoach_1 = require("./TennisCoach");
var r = new FootballCoach_1.FootballCoach();
var t = new TennisCoach_1.TennisCoach();
var coachs = [];
// shapes.push(s);
coachs.push(r);
coachs.push(t);
for (var _i = 0, coachs_1 = coachs; _i < coachs_1.length; _i++) {
    var c = coachs_1[_i];
    console.log(c.getDailyWorkout());
}
