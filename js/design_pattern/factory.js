function Developer(name) {
    this.name = name;
    this.type = "Developer";
}

function Tester(name) {
    this.name = name;
    this.type = "Tester";
}

function EmployeeFactory() { 
    this.create = (name, type) => {
        switch (type) {
            case 1: 
                return new Developer(name);
            case 2:
                return new Tester(name);
        }
    }
}

function say() {
    console.log("Hi, my name is " + this.name + " & " + "i am a " + this.type);
}

const employeeFactory = new EmployeeFactory();
const employee = [];

employee.push(employeeFactory.create("Swatantra",1));
employee.push(employeeFactory.create("Swapnil", 2));


employee.forEach(emp => {
    say.call(emp);
})