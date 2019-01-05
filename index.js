class LinkList{
	constructor(){
		this.length = 0;
		this.head = null;
	}

	insert(index, value){
		if(index < 0 || index > this.length){
			throw new Error('Index Error');
		}

		const newNode = { value };

		if(index == 0){
			newNode.next = this.head;
			this.head = newNode;
		}

		else {
			const node = this._find(index - 1);
			newNode.next = node.next;
			node.next = newNode;
		}
		this.length++;
	}

	remove(index){
		if(index < 0 || index >= this.length){
			throw new Error('Index Error');
		}

		if(index == 0){
			this.head = this.head.next;
		}

		else {
			const node = this._find(index - 1);
			node.next = node.next.next;
		}
		this.length--;
	}

	_find(index){
		let node = this.head;
		for(let i = 0; i < index; i++){
			node = node.next;
		}
		return node;
	}
}

const listA = new LinkList();

listA.insert(0, 'A');
listA.insert(1, 'B');
listA.insert(2, 'C');
listA.insert(3, 'D');
listA.insert(4, 'E');


// Reverses the order of the supplied linked list and returns a new linked list in reverse order

function inverter(linklist){
  let content = new LinkList();
  let node = linklist.head;
  
  if(node == null){
    return linklist;
  }
  
  while(node !== null){
    //By always inserting at the head, we can be sure that whatever goes in last will actually be first
    content.insert(0, node.value);
    node = node.next;
  }
  return {
    original: linklist,
    inverse: content
  };
}

function relocate(current, target, list){
  if(list.head == null){
    return list;
  }
  let position = 0;
  let node = list._find(current);
  while(position < target && node !== null){
    console.log(node)
    position++;
    node = node.next;

  }
  return list;
}

const tester = relocate(2, 4, listA);
const inverseListA = inverter(listA);
// console.log(inverseListA);
