
function ListNode (val) {
  let _val = val;
  this.next = null;

  this.value = function value() {
    return _val;
  }

}

function addLists (list1, list2) {

  const numberFromList = (list) => {
    let arr = [];
    let next = list;

    while(next) {
      arr.push(next.value());
      next = next.next;
    }

    return Number(arr.reverse().join(''));
  }

  const listFromNum = (number) => {
    let arr = [...String(number)];

    let tail = new ListNode(arr[0]);
    let list;

    for (let i = 1; i < arr.length; i++) {
      list = new ListNode(arr[i]);
      list.next = tail;
      tail = list;
    }

    return list;
  }
  return listFromNum(numberFromList(list1) + numberFromList(list2));
}