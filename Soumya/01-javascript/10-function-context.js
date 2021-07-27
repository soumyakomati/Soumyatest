function foo(p,q) {
    console.log(this);
    console.log(p);
    console.log(q);
}

//foo(); context, argumeents are passed
foo.call({x :100},100,200)