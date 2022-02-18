class Employee{
    //property
    // private _fullName:string; //_:비공개 멤버 표시
    // private _age:number;
    // private _jobTitle:string;
    // private _hourlyRate:number;
    // private _workingHoursPerWeek:number;
    
    //Get과 Set키워드를 사용하여 Getter와 Setter를 선언

    constructor(    private _fullName:string, //객체가 생성될 때, constructor의 배개변수로 전달된 값은, 객체의 property값으로 자동으로 그 값이 초기화되고 할당됨
                    private _age:number,
                    private _jobTitle:string,
                    private _hourlyRate:number,
                    private _workingHoursPerWeek?:number){

    }
    //method
    get fullName(){
        return this._fullName;
    }
    set fullName(value:string){
        this._fullName=value;
    }
    printEmployeeDetails=():void=>{
        console.log(`${this._fullName}의 직업은 ${this._jobTitle}이고 일주일의 수입은 ${this._hourlyRate*this._workingHoursPerWeek}이다.`); 
    }
}
let employee1=new Employee('fubao',1,'baby',40,35);
employee1.printEmployeeDetails();
console.log(employee1.fullName); //getter 호출
employee1.fullName='aibao'; //setter호출
// Access Modifiers(접근 제한자) :클래스 속 멤버 변수(프로퍼티)와 메소드에 적용될 수 있는 키워드
// 클래스 외부로부터의 접근을 통제
// public:클래스의 외부에서 접근 가능 (public멤버를 노출시키기 위해서 public키워드를 명시할 필요 없음)
// private:클래스 내에서 접근가능, 외부에서 접근 불가능
// protected: 클래스 내부, 그리고 상속받은 자식 클래스에서 접근 가능
