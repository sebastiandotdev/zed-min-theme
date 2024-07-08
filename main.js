import process from "node:process";

const x = "Hola";
const number = 42;
console.log(x);

function myFunction() {
  console.log(x);
}
myFunction();

class MyClass {
  constructor(n) {
    console.log(x);
  }
}

number.toFixed(2);

new MyClass();

function Component() {
  return <div>{x} </div>;
}

function OtherComponent() {
  return (
    <>
      <Component />
      <div> {x} </div>
    </>
  );
}
