const boxy=document.querySelector('#box');
const image=document.querySelector('#mainImage');
const items=document.querySelectorAll('.menuItem');
const menuBox=document.querySelector('#menuContent');
const happy=document.querySelector('#container');
const innerMenuImages=container.querySelectorAll('.innerImage[src]');

// console.log(innerMenuImages);

let imageArray = ["css/array_image1.jpg","css/array_image2.jpg","css/array_image3.JPG"];

let anotherArray=Array.from(innerMenuImages);
console.log(typeof(anotherArray[0].attributes.src.value));
console.log(anotherArray);
console.log(anotherArray[2].attributes.src.value);

document.querySelector('#menu').addEventListener('click',show);
// document.querySelector('#about').addEventListener('mouseover',change);
// document.querySelector('#about').addEventListener('mouseout',changeBack);

// let arr=Array.from(items).map(element => element.addEventListener('mouseover', changeImage));
let arr=Array.from(items);
// console.log(arr);
arr.map(element => element.addEventListener('mouseover', changeImage));
arr.map(element => element.addEventListener('mouseout', prevImage));
// console.log(arr[0].id);

function show(){
    // boxy.classList.toggle('hidden');

    if(boxy.classList.contains('hidden')){
        boxy.classList.remove('hidden');
        boxy.style.transition= "height 1s ease-in-out";
        boxy.style.transitionDelay="0.2s";
    }
    else{
        boxy.classList.add('hidden')
        boxy.style.transition="height 1s ease-in-out";
        boxy.style.transitionDelay="1.2s";
    }
    if(image.classList.contains('view')){
        image.style.transition="all 0.75s ease-in-out";
        image.classList.remove('view');
        image.style.transitionDelay='0.4s';
    }
    else{
        image.classList.add('view');
        image.style.transition="all 1.2s ease-in-out";
        image.style.transitionDelay='0.89s';
    }

    if(menuBox.classList.contains('close')){
        menuBox.style.transition="all 0.5s ease-in-out";
        menuBox.classList.remove('close');

    }
    else{
        menuBox.classList.add('close');
        menuBox.style.transition="all 1s ease-in-out";
        menuBox.style.transitionDelay='1.5s';
    }
}

function changeImage(mouseover){
    console.log(this.id);
    if(image.classList.contains('view') && arr.length!==0){
        image.classList.remove('view');
        image.style.transition="all 0.4s ease-in-out";

    for(i=0;i<arr.length;i++){
        if(arr[i].id===this.id){
            anotherArray[i].style.transition="all 0.4s ease-in-out";
            anotherArray[i].classList.add('view');
            // image.src=imageArray[i];
            // boxy.style.backgroundImage=imageArray[i];
        }
        // else{
        //     image.src='css/Screen Shot 2022-04-13 at 2.21.14 AM.png';
        // }
    }
}
else{
        image.src='css/main_menu_image.jpg';
    }

}


function prevImage(){

       if(!image.classList.contains('view')){
        image.classList.add('view');
       }
        for(i=0;i<arr.length;i++){
         anotherArray[i].classList.remove('view');
       }
     image.src='css/main_menu_image.jpg';
}



// image.classList.toggle('view');
    // menuBox.classList.toggle('close');
    // if(menuBox.classList.contains('close')){
    //     menuBox.style.transition="all 1s";
    //     // menuBox.style.transitionDelay='2s';
    // }
    // else{
    //     menuBox.style.transition="all 2s ease-in-out";
    // }



    // function change(){
//     document.querySelector('#box').style.backgroundColor='blue'
// }

// function changeBack(){
//     document.querySelector('#box').style.backgroundColor='orange';
// }
