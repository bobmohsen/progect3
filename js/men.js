let shoppeng = document.querySelector('.shoppeng img')

let cntar = document.querySelector('.cntar')// دي الرقم الي هيبان في عدد المشتريات كام 

let liast = document.querySelector('.liast') // دي الي في كل البكس بتاع المنتاجات 
let card = document.querySelector('.card') // ده الي في الحاجات الي انا اشترتها 
let clos = document.querySelector('.clos')// 
let listCard = document.getElementById('listCard')//دي ul الي هضيف فيها الال اي في المشتريات الي في سلت المشتريات 
let total = document.querySelector('.total')// دي اجمالي اسعار الي اشتريته 

// start actev
shoppeng.addEventListener('click',function(){

    card.classList.add('actev')
    console.log('kkkkkkkkk');
})
onclick

clos.addEventListener('click',function(){
    card.classList.remove('actev')
    console.log('kkkkkkkkk');
})
// end actev

let objecs = [

    {
        id:1,
        img: 'img1.jpg' ,
        name: 'prodact',
        pris:1200,
        del: 1500

    },{
        id:2,
        img: 'img2.jpg',
        name: 'prodact',
        pris:1500,
        del: 1800


    },{
        id:3,
        img: 'img3.jpg',
        name: 'prodact',
        pris:200,
        del: 300


    },{
        id:4,
        img: 'img4.jpg',
        name: 'prodact',
        pris:300,
        del: 500


    },{
        id:5,
        img: 'img5.jpg',
        name: 'prodact',
        pris:250,
        del: 500


    },{
        id:6,
        img: 'img6.jpg',
        name: 'prodact',
        pris:150,
        del: 300


    },{
        id:7,
        img: 'img7.jpg',
        name: 'prodact',
        pris:220,
        del: 400


    },{
        id:8,
        img: 'img8.jpg',
        name: 'prodact',
        pris:400,
        del: 800


    },{
        id:9,
        img: 'img9.jpg',
        name: 'prodact',
        pris:320,
        del: 600


    }
]

let databas = []
// databas.push(objecs)
// staet دي فنكشن بتعت بضيف المنتاجات في الصفحه 
function addtoliast(){

    objecs.forEach(function(e,i){

        let div = document.createElement('div')
        div.className = 'item'
        div.innerHTML = `
        <img src="./img/${e.img}" alt="">
                    <h1>${e.name}</h1>
                    <div class="price"><del class="del">${e.del}</del>${e.pris}</div>
                    <button onclick="addbtnn(${i})  " class="btnn" >abb to car</button>
        `
               liast.appendChild(div)

    })         


}

addtoliast()

function addbtnn(e){

    if(databas[e]== null){
        databas[e]=objecs[e]
        databas[e].cntar = 1
    }
    addtocard()
}

function addtocard(){

    listCard.innerHTML = ''
    let totalpris = 0
    let totalcunt = 0

    databas.forEach(function(e,i){
totalpris = totalpris + e.pris
totalcunt = totalcunt + e.cntar
        if( e != null){
        let li = document.createElement('li')
        li.innerHTML = `
        <div id="img"> <img src="./img/${e.img}" alt=""></div>
        <div class="name"> ${e.name}</div>
        <div class="press">${e.pris}</div>
        <button onclick="des(${i} , ${e.cntar + 1})" class="pls">+</button>
        <div class="cunt"> ${e.cntar}</div>
        <button onclick="des(${i} , ${e.cntar - 1})"  class="ecwl">-</button>
        `
        listCard.appendChild(li)
        }

    })
    total.innerHTML = totalpris
    cntar.innerHTML = totalcunt
}


function des(e,i){

    if( i == 0){ // لو رقم العنصر = صفر اعملي احزفلي العنصر نفسه 
        delete databas[e]
    }else{ 
databas[e].cntar = i
databas[e].pris = i * objecs[e].pris;
    }
    addtocard()
}

