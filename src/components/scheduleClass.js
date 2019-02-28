class Schedule{

	//takes string n and dictionary s
	//dictionary should be time : name of activity
	constructor(n, s){

		this.title = n;
		this.schedule = s;

	}

	getSchedule(){
		return this.schedule;
	}

	getName(){
		return this.title;
	}
	getTime(index){
		return this.schedule[index];
	}

	removeActivity(time){
		delete this.schedule[time];
	}

	addActivity(time, activity){
		this.schedule[time]=activity;
	}
}

export default Schedule;
