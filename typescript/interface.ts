//타입명시
let studentID:number=12345;
let studentName:string='fubao';
let age:number=1;
let gender:string='female';
let subject:string='bamboo';
let courseCompleted:boolean=false;

let student1={
    
        studentID:12345,
        studentName:'fubao',
        gender:'female',
        subject:'bamboo',
        courseCompleted:false,
    
}

interface Student{
    readonly studentID:number;
    studentName:string;
    age?:number; //선택적 프로퍼티: 있어도 되고 없어도 됨
    gender:string;
    subject:string;
    courseCompleted:boolean;
    //addComment(comment:string):string
    addComment?:(comment:string)=>string;
}
//Readonly프로퍼티는 읽기 전용 프로퍼티로 객체 생성시 할당된 프로퍼티의 값을 바꿀 수 없다.
//인터페이스를 타입으로 가지는 값은 인터페이스의 구조를 그 값으로 가지도록 강제된다.
function getStudentDetails(studentID:number):Student{
    return {
        studentID:12345,
        studentName:'fubao',
        gender:'female',
        subject:'bamboo',
        courseCompleted:false,
    };
}
function saveStudentDetails(student:Student):void{
    //student.studentID=2;
}
saveStudentDetails(student1);
