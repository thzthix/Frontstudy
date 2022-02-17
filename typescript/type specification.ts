//타입명시
let studentID:number=12345;
let studentName:string='fubao';
let age:number=1;
let gender:string='female';
let subject:string='bamboo';
let courseCompleted:boolean=false;
function getStudentDetails(studentID:number):{ //변환되는 객체의 구조를 차입으로 지정
    studentID:number;
    studentName:string;
    age:number;
    gender:string;
    subject:string;
    createDate:Date;
}{
    return null;
}
