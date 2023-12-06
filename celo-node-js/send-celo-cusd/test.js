const object1 = [{ a: 'somestring', b: 42, c: false }];

object1[0].a; // "somestring"
object1[0].b; // 42
object1[0].c; // false

console.log(object1[0].a, object1[0].b, object1[0].c);

object1.forEach(element => {
  console.log("some...",element.a);
});