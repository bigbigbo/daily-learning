function ListNode(val) {
  this.val = val;
  this.next = null;
}

function List(value) {
  let i = 0;
  let list = new ListNode(value[i])
  let pointer = list;

  while (value.length - 1 > i) {
    pointer.next = new ListNode(value[++i]);
    pointer = pointer.next;
  }

  return list
}