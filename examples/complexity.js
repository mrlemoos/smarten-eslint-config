const a = 'a';
const b = 'b';
const c = 'c';


class C {
  x = a || b || c; // this initializer has complexity = 3
}

alert(C);