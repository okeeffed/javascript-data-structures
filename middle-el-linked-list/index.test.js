const { LinkedList, Node } = require('./index');

describe('find the middle element of a LinkedList', () => {
  describe('Node class', () => {
    test('should return a Node instance', () => {
      const node = new Node(3);
      expect(node.data).toEqual(3);
      expect(node.next).toEqual(null);
      expect(node.constructor).toEqual(Node);
    });
  });

  describe('LinkedList#createLinkedList', () => {
    test('should return a LinkedList instance', () => {
      // array to set as data for the Node
      const data = [1, 2, 3, 4, 5];
      let nodes = [];
      for (let el of data) {
        nodes.push(new Node(el));
      }

      // create a list
      const ll = new LinkedList();
      for (let node of nodes) {
        ll.push(node);
      }

      expect(ll.length()).toEqual(5);

      data.map((dataPoint, index) => {
        expect(ll.getAt(index).data).toEqual(dataPoint);
      });
    });
  });

  describe('LinkedList#getMiddleElement', () => {
    test('should return the middle element of a LinkedList for an odd number', () => {
      // array to set as data for the Node
      const data = [1, 2, 3, 4, 5];
      let nodes = [];
      for (let el of data) {
        nodes.push(new Node(el));
      }
      // create a list
      const ll = new LinkedList();
      for (let node of nodes) {
        ll.push(node);
      }

      // get middle element back from the list
      const el = ll.getMiddleElement();

      expect(el.data).toEqual(3);
    });

    test('should return the middle element of a LinkedList for an even number', () => {
      // array to set as data for the Node
      const data = [1, 2, 3, 4, 5, 6];
      let nodes = [];
      for (let el of data) {
        nodes.push(new Node(el));
      }
      // create a list
      const ll = new LinkedList();
      for (let node of nodes) {
        ll.push(node);
      }

      // get middle element back from the list
      const el = ll.getMiddleElement();

      expect(el.data).toEqual(3);
    });

    test('should return null for no elements in a list', () => {
      // create a list
      const ll = new LinkedList();

      // get middle element back from the list
      const el = ll.getMiddleElement();

      expect(el).toEqual(null);
    });
  });
});
