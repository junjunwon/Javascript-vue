{
    // Logical OR operator
    // || : false: false, '', 0, null, undefined
    // ?? : null, undefined
  // ✨ 좀더 명확하게 출력하고 싶을때는 Nullish Coalescing Operator!
  {
    const name = false;
    const userName = name ?? 'undefined'; //name이 있다면 name, name에 값이 없다면 guest
    console.log(userName);

    const num = '';
    const message = num ?? 'undefined'; //위에와 동일.
    console.log(message);
  }
    
  }