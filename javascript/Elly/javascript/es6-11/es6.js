/**
 * Shorthand property names
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 *
 */

 {
    const ellie1 = {
      name: 'Ellie',
      age: '18',
    };
  
    const name = 'Ellie';
    const age = '18';
  
    // 💩
    const ellie2 = {
      name: name,
      age: age,
    };
  
    // ✨
    const ellie3 = {
      name,
      age,
    };
  
    console.log(ellie1, ellie2, ellie3);
    console.clear();
  }
  
  /**
   * Destructuring Assignment
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
   *
   */
  {
    // object
    const student = {
      name: 'Anna',
      level: 1,
    };
  
    // 💩
    {
      const name = student.name;
      const level = student.level;
      console.log(name, level);
    }
  
    // ✨
    {
      const { name, level } = student;
      console.log(name, level);
  
      const { name: studentName, level: studentLevel } = student;
      console.log(studentName, studentLevel);
    }
  
    // array
    const animals = ['🐶', '😽'];
  
    // 💩
    {
      const first = animals[0];
      const second = animals[1];
      console.log(first, second);
    }
  
    // ✨
    {
      const [first, second] = animals;
      console.log(first, second);
    }
    console.clear();
  }
  
  /**
   * Spread Syntax
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
   *
   */
  {
    const obj1 = { key: 'key1' };
    const obj2 = { key: 'key2' };
    const array = [obj1, obj2];
  
    // array copy
    const arrayCopy = [...array]; // <- 배열을 복사하는 정말 간단한 방법인듯.보통은 foreach나 map으로 가져오는데..
    //또한 arrayCopy는 주소값만 가지고 있는다.
    console.log(array, arrayCopy);
  
    const arrayCopy2 = [...array, { key: 'key3' }];
    obj1.key = 'newKey'; // <- 그래서 key값을 변경하면 해당 주소를 참조한 모든 값들이 변경된다.
    console.log(array, arrayCopy, arrayCopy2);
  
    // object copy
    const obj3 = { ...obj1 }; //배열은 [], object는 {}
    console.log(obj3);
  
    // array concatenation
    const fruits1 = ['🍑', '🍓'];
    const fruits2 = ['🍌', '🥝'];
    const fruits = [...fruits1, ...fruits2];
    console.log(fruits);
  
    // object merge
    const dog1 = { dog: '🐕' };
    const dog2 = { dog: '🐶' };
    const dog = { ...dog1, ...dog2 }; //만약 key가 동일한 object를 병합한다면 같은 제일 뒤에 있는 dog2가 dog1를 덮어쓴다.
    console.log(dog);
    console.clear();
  }
  
  /**
   * Default parameters
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
   */
  {
    // 💩
    {
      function printMessage(message) {
        if (message == null) { //<--보통의 예외처리 방식.
          message = 'default message';
        }
        console.log(message);
      }
  
      printMessage('hello');
      printMessage();
    }
  
    // ✨
    {
      function printMessage(message = 'default message') {
          // <- 인자 다음에 기본적으로 원하는 초기값을 지정해둠으로서 인자가 없는 경우 default를 전달한다.
        console.log(message);
      }
  
      printMessage('hello');
      printMessage();
    }
    console.clear();
  }
  
  /**
   * Ternary Operator
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
   */
  {
    const isCat = true;
    // 💩
    {
      let component;
      if (isCat) {
        component = '😸';
      } else {
        component = '🐶';
      }
      console.log(component);
    }
  
    // ✨
    {
      const component = isCat ? '😸' : '🐶'; //<-훨씬 간단한 방식. 
      console.log(component);
      console.log(isCat ? '😸' : '🐶'); //직접 적용도 가능. 리엑트에서 많이 쓰이고 있다?
    }
    console.clear();
  }
  
  /**
   * Template Literals
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
   */
  {
    const weather = '🌤';
    const temparature = '16°C';
  
    // 💩 보통의 방식으로 +를 이용한다.
    console.log(
      'Today weather is ' + weather + ' and temparature is ' + temparature + '.'
    );
  
    // ✨ `${template Literals}를 이용하면 가독성이 높아진다.
    
    console.log(`Today weather is ${weather} and temparature is ${temparature}.`);
  
  }