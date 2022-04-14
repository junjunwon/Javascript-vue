/**
 * 관련 강의 영상: https://youtu.be/36HrZHzPeuY
 */
/**
 * Optional Chaining (ES11)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 */
 {
    const person1 = { 
      name: 'Ellie',
      job: {
        title: 'S/W Engineer',
        manager: {
          name: 'Bob',
        },
      },
    };
    const person2 = {
      name: 'Bob',
    };
  
    // 💩💩💩💩💩💩
    {
      function printManager(person) {
        console.log(person.job.manager.name);
      }
      printManager(person1);
      // printManager(person2);
    }
  
    // 💩💩💩
    {
      function printManager(person) {
        console.log(
          person.job
            ? person.job.manager
              ? person.job.manager.name
              : undefined
            : undefined
        );
      }
      printManager(person1);
      printManager(person2);
    }
  
    // 💩
    {
      function printManager(person) {
        console.log(person.job && person.job.manager && person.job.manager.name); //<-코드가 계속 중복
      }
      printManager(person1);
      printManager(person2);
    }
  
    // ✨
    {
      function printManager(person) {
        console.log(person.job?.manager?.name); // Optional Chaining으로 요즘 가장 핫한 코딩방식 중 하나!
      }
      printManager(person1);
      printManager(person2);
    }
    console.clear();
  }
  
  /**
   * Nullish Coalescing Operator (ES11)
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
   */
  {
    // Logical OR operator
    // false: false, '', 0, null, undefined
    {
      const name = 'Ellie';
      const userName = name || 'Guest';
      console.log(userName);
    }
  
    {
      const name = null;
      const userName = name || 'Guest';
      console.log(userName);
    }
  
    // 💩
    {
      const name = '';
      const userName = name || 'Guest'; //<-name이 null이거나 undefined인 경우만 guest를 사용하고 싶은데, 사용자가 아무 이름도 사용하고 싶지 않아도 guest를 사용해야되는 오류.
      console.log(userName);
  
      const num = 0;
      const message = num || 'undefined'; // 0을 출력하고 싶어도 undefined를 호출. 
      console.log(message);
    }
  
    // ✨ 좀더 명확하게 출력하고 싶을때는 Nullish Coalescing Operator!
    {
      const name = '';
      const userName = name ?? 'Guest'; //name이 있다면 name, name에 값이 없다면 guest
      console.log(userName);
  
      const num = 0;
      const message = num ?? 'undefined'; //위에와 동일.
      console.log(message);
    }
  }