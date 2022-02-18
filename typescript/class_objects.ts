class Employee{
    //property
    fullName:string;
    age:number;
    jobTitle:string;
    hourlyRate:number;
    workingHoursPerWeek:number;
    //method
    printEmployeeDetails=():void=>{
        console.log(`${this.fullName}의 직업은 ${this.jobTitle}이고 일주일의 수입은 ${this.hourlyRate*this.workingHoursPerWeek}이다.`); 
    }
}
let employee1=new Employee();
employee1.age=1;
employee1.fullName='fubao';
employee1.hourlyRate=40;
employee1.jobTitle='baby';
employee1.workingHoursPerWeek=35;
employee1.printEmployeeDetails();
