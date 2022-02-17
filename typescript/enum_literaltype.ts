//Enum:연관된 아이템들을 함께 묶어서 표현할 수 있는 수단
enum GenderType{
    Male='male', //numeric enum=>string enum
    female='female',
    genderNeutral='genderNeutral',
}
let studentID:number=12345;
let studentName:string='fubao';
let age:number=1;
let gender:string='female';
let subject:string='bamboo';
let courseCompleted:boolean=false;


interface Student{
    readonly studentID:number;
    studentName:string;
    age?:number; 
    subject:string;
    courseCompleted:boolean;
    // gender:GenderType,
    gender:'male'|'female'|'genderNeutral', //리터럴타입
    addComment?:(comment:string)=>string;
};
let student1:Student={
    
    studentID:12345,
    studentName:'fubao',
    // gender:GenderType.female,
    gender:'female',
    subject:'bamboo',
    courseCompleted:false,

}
function getStudentDetails(studentID:number):Student{
    return {
        studentID:12345,
        studentName:'fubao',
        // gender:GenderType.female ,
        gender:'female' ,
        subject:'bamboo',
        courseCompleted:false,
    };
}
function saveStudentDetails(student:Student):void{
    
}
saveStudentDetails(student1);
