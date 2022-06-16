// let inp = document.createElement('input')
// let body = document.body

// inp.setAttribute('placeholder', 'text')
// inp.setAttribute('type', 'password')

// body.append(inp)
// let arr = [
//     'one',
//     'two',
//     'diyor',
//     'maxmud',
//     'aziz',
//     'Tulkin',
//     'Baxrul',
//     'Baxrul',
//     'Baxrul',
// ]

// for(let i = 0; i <= 10; i++) {
//     let div = document.createElement('div')
//     let img = document.createElement('img')
//     let h3 = document.createElement('h3')
//     let p = document.createElement('p')

//     div.classList.add('item')
//     img.src = './Coin 1.png'
//     h3.innerHTML = arr[i]
//     p.innerHTML = "In the various levels there will also be special coins, more difficult to take, which will provide you with bonuses in tokens or game NFTs!"

//     div.append(img,h3,p)
//     body.append(div)
// }

// div.classList.add('item')
// img.src = './Coin 1.png'
// h3.innerHTML = arr[i]
// p.innerHTML = "In the various levels there will also be special coins, more difficult to take, which will provide you with bonuses in tokens or game NFTs!"

// div.append(img, h3, p);
// body.append(div);

// let img = document.createElement("img");
// let h3 = document.createElement("h3");
// let p = document.createElement("p");

let body = document.body;
let div = document.createElement("div");
let div_2 = document.createElement("div");
let left = document.createElement("div");
let right = document.createElement("div");


div.classList.add("item");
div_2.classList.add("item_2");
left.classList.add("left");
right.classList.add("right");

let h3 = document.createElement("h3");
let p = document.createElement("p");
let btn = document.createElement("button");
// div.append(item_div_left, item_div_right)
h3.innerHTML = "Why invest in SpiderShiba Inu?";
p.innerHTML = "in case you have lived in a cave in the last few months we will give you a brief summary of what happened in crypto industry";
btn.innerHTML = "Learn more about SpiderShiba"

let left_m = document.createElement("div");
left_m.classList.add('set_left')

let right_m_t = document.createElement('div')
let right_m_b = document.createElement('div')

let img = document.createElement('img')
let img_2 = document.createElement('img')
let h3_2 = document.createElement('h3')
let h3_3 = document.createElement('h3')
let p_2 = document.createElement('p')
let p_3 = document.createElement('p')

h3_2.innerHTML = 'Massive trend'
h3_3.innerHTML = '100% of value, 0% of memecoin!'
p_2.innerHTML = 'Shiba inu has invaded the market with an infinity of other meme coins that collect thousands of BNB and after the launch they make mind-boggling numbers!'
p_3.innerHTML = 'We took the best from this trend and have decided to ride this tremendous wave success in Shiba Inu tokens, not only by launching a coin, but by creating a real NFT game p2e'

right_m_t.classList.add('r_set', 'mar')
right_m_b.classList.add('r_set')

let r_set_m_t = document.createElement('div')
let r_set_m_b = document.createElement('div')

img.src = "./img/img_t.png"
img_2.src = "./img/img_b.png"

right_m_t.append(img, r_set_m_t)
right_m_b.append(img_2, r_set_m_b)
r_set_m_t.append(h3_2, p_2)
r_set_m_b.append(h3_3, p_3)


left_m.append(h3, p, btn);
left.append(left_m)
right.append(right_m_t, right_m_b)

div_2.append(left, right)
div.append(div_2);
body.append(div);