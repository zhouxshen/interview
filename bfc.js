var tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd',
          children: [],
        },
        {
          val: 'e',
          children: [],
        },
      ],
    },
    {
      val: 'c',
      children: [
        {
          val: 'f',
          children: [],
        },
        {
          val: 'g',
          children: [],
        },
      ],
    },
  ],
}

const bfc = (node) => {
  const list = [node];
  while(list.length) {
    const n = list.shift();
    console.log(n.val);
    n.children.forEach(child => {
      list.push(child);
    })
  }
};

console.log(bfc(tree));
