var products = [
    {
        id:0,
        name:"Apples",
        price:"2.99",
        image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
        color:"red"
    },
    {
        id:1,
        name:"Bananas",
        price:"2.50",
        image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
        color:"gold"
    },
    {
        id:2,
        name:"oranges",
        price:"3.50",
        image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
        color:"orange"
    }
];

function product(item){
    let that = this;
    let html=`<p>Name: ${item.name} <br> Price: $ ${item.price}</p>`;


    this.ele=document.createElement("div");
    // this.eleName=document.createElement("h1");
    this.pic=document.createElement("img");
    this.pic.src=item.image;
    this.ele.appendChild(this.pic);

    this.info=document.createElement("div");
    this.info.innerHTML=html;
    this.ele.appendChild(this.info);

    this.ele.addEventListener("click", function(){
        var popUp = window.popUp(that.pic, that.info);
    })

    this.ele.addEventListener("mouseover", function () {
        that.ele.style.borderColor = item.color;
    });

    this.ele.addEventListener("mouseout", function () {
        that.ele.style.borderColor = "black";
    });


    this.ele.className="product";
    document.body.appendChild(this.ele);
}

function popUp(pic, info) {
    let ele=document.createElement("div");
    ele.className="popUp";

    document.body.appendChild(ele);

    ele.innerHTML = pic.outerHTML + info.innerHTML;

//    now hide the popUp - wiring up the event handler that will hide the pop up
    ele.addEventListener("click", function (){
        ele.style.display="none";
    });
}

for (let i = 0; i < products.length; i++){
    let thisproduct = new product(products[i]);
}
