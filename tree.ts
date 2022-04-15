
interface Tree {
  right: Tree | null;
  left: Tree | null;
  name: string;
}

test("invert three nodes", () => {
  const tree = {
    left: {
      left: {
        left: null,
        right: null,
        name: "c"
      },
      right: {
        right: null,
        left: {
          right: null,
          left: null,
          name: "h"
        },
        name: "g"
      },
      name: "b"
    },
    right: {
      left: null,
      right: {
        left: null,
        right: null,
        name: "d"
      },
      name: "e"
    },
    name: "a"
  };

  invertTree(tree);

  expect(tree).toEqual({
    right: {
      right: {
        left: null,
        right: null,
        name: "c"
      },
      left: {
        right: {
          right: null,
          left: null,
          name: "h"
        },
        left: null,
        name: "g"
      },
      name: "b"
    },
    left: {
      right: null,
      left: {
        left: null,
        right: null,
        name: "d"
      },
      name: "e"
    },
    name: "a"
  });
});
