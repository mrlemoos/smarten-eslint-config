function foo(n) {
  if (n <= 0) {
    return;
  }

  arguments.callee(n - 1);
}

alert(typeof foo);

[1, 2, 3, 4, 5].map(function (n) {
  return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});