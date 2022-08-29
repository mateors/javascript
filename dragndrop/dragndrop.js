console.log("Drag and drop test...");

let dragOverItem;

const draggables = document.querySelectorAll('.container');
const dragListItems = document.querySelectorAll('.row');

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', dragStart);
});

dragListItems.forEach(item => {
  item.addEventListener('dragover', dragOver);
  item.addEventListener('drop', dragDrop);
  item.addEventListener('dragenter', dragEnter);
  item.addEventListener('dragleave', dragLeave);
});



let dragItem;
let starty=0;
let mouseupdown="down";

document.addEventListener("mousedown", function(e){

    starty=e.clientY;
    console.log(e.clientY);

});

function dragStart(e) {
    // console.log('Event: ', 'dragstart');
    let dragStartIndex = e.target.getAttribute('data-id');
    console.log("dragStartIndex",dragStartIndex);
    dragItem=e.target;
   
    
  }
  
  function dragEnter() {
    console.log('Event: ', 'dragenter');
    //this.classList.add('over');
  }
  
  function dragLeave() {
    console.log('Event: ', 'dragleave');
    //this.classList.remove('over');
  }
  
  function dragOver(e) {
    // console.log('Event: ', 'dragover');
    e.preventDefault();
    console.log("dragOver",this.getAttribute('data-id'));
    
    if(e.clientY<starty){
        mouseupdown="up";
    }else{
        mouseupdown="down";
    }
    console.log(e.clientY,mouseupdown);
  }

  function dragDrop(e) { //drop

      const dragEndIndex = this.getAttribute('data-id');
      //console.log('Drop after: ', dragEndIndex, e.target.parentNode);
      console.log(dragListItems, e.target.parentNode);
    //swapItems(dragStartIndex, dragEndIndex);

    

    //draggables.removeChild(e.target.parentNode);
    //document.getElementById("container").removeChild(e.target.parentNode);

    //document.getElementById("container").appendChild(dragItem);

    document.getElementById("container").removeChild(dragItem);

    if(mouseupdown=="down"){

        document.getElementById("container").insertBefore(dragItem, e.target.parentNode.nextSibling); //after
    }

    if(mouseupdown=="up"){
        document.getElementById("container").insertBefore(dragItem, e.target.parentNode);
    }

    starty=0;
    mouseupdown="down";
    //element.parentNode.insertBefore(newElement, element.nextSibling);

 
  }
/*

window.addEventListener("drag", function(e){

    //console.log("drag", e.target);

});

window.addEventListener("dragstart", function(e){

    console.log("dragstart", e.target);

});


window.addEventListener("dragover", function(e){

    //console.log("dragover", e.target);
    e.preventDefault();
    dragOverItem=e.target;

});

window.addEventListener("dragend", function(e){

    let id=e.target.getAttribute('data-id');

    console.log(Object.getOwnPropertyNames(e.target))

    console.log("dragend", e.target, id);

});

window.addEventListener("click", function(e){

    var images = Array.prototype.slice.call(document.getElementById('container').children);

    var index = images.indexOf(e.target);
    console.log(images, e.target.attributes);

    for (const obj of e.target.attributes) {
        console.log(obj, obj.name, obj.value);
    }
   
   console.dir(e.target.closest(".row").parentElement.children[0].attributes);

   //document.getElementById('container').children

//    console.log(document.getElementById('container').children);

//    const index = Array.from(document.getElementById('container').children).indexOf(e.target);
//    console.log(index);

});


window.addEventListener("drop", function(e){

    e.preventDefault();
    console.log("drop", typeof e.target);
    console.dir(e.target); //HTMLDivElement

    let elm=e.target.children[0];
    let repElm=e.target.children[2];

    console.log("typeof",typeof elm,e.target);


    e.target.insertAdjacentElement('afterend', elm)

    //e.target.removeChild(elm);

    //e.target.replaceChild(elm, repElm); //new, old
    //e.target.appendChild(elm);

    //element.parentNode.insertBefore(newElement, element.nextSibling);

    // for (const iterator of e.target.children) {
    //     console.log(iterator, typeof iterator);
    // }
   

    //for (const [key, value] of Object.entries(e.target.elements)) {
        //console.log(`${key}: ${value}`);
      //}

    // e.target.forEach(element => {
    //     console.log(element);
    // });

});

*/