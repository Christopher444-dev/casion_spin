const sectors = [
  { color: "#FFBC03", text: "#333333", label: "20" },
  { color: "#FF5A10", text: "#333333", label: "100" },
  { color: "#FFBC03", text: "#333333", label: "60" },
  { color: "#FF5A10", text: "#333333", label: "0" },
  { color: "#FFBC03", text: "#333333", label: "1000" },
  { color: "#FF5A10", text: "#333333", label: "500" },
  { color: "#FFBC03", text: "#333333", label: "10" },
  { color: "#FF5A10", text: "#333333", label: "50" },
  // { color: "#AA5F20", text: "#333333", label: "Dalale" },
];

const events = {
  listeners: {},
  addListener: function (eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(fn);
  },
  fire: function (eventName, ...args) {
    if (this.listeners[eventName]) {
      for (let fn of this.listeners[eventName]) {
        fn(...args);
      }
    }
  },
};
//constants variables
const balance = {
  amount:50,
  spins:1
}
const rand = (m, M) => Math.random() * (M - m) + m;
const tot = sectors.length;
const spinEl = document.querySelector("#spin");
const ctx = document.querySelector("#wheel").getContext("2d");
const dia = ctx.canvas.width;
const rad = dia / 2;
const PI = Math.PI;
const TAU = 2 * PI;
const arc = TAU / sectors.length;

const friction = 0.991; // 0.995=soft, 0.99=mid, 0.98=hard
let angVel = 0; // Angular velocity
let ang = 0; // Angle in radians

let spinButtonClicked = false;

const getIndex = () => Math.floor(tot - (ang / TAU) * tot) % tot;

function drawSector(sector, i) {
  const ang = arc * i;
  ctx.save();

  // COLOR
  ctx.beginPath();
  ctx.fillStyle = sector.color;
  ctx.moveTo(rad, rad);
  ctx.arc(rad, rad, rad, ang, ang + arc);
  ctx.lineTo(rad, rad);
  ctx.fill();

  // TEXT
  ctx.translate(rad, rad);
  ctx.rotate(ang + arc / 2);
  ctx.textAlign = "right";
  ctx.fillStyle = sector.text;
  ctx.font = "bold 30px 'Lato', sans-serif";
  ctx.fillText(sector.label, rad - 10, 10);
  //

  ctx.restore();
}

function rotate() {
  const sector = sectors[getIndex()];
  ctx.canvas.style.transform = `rotate(${ang - PI / 2}rad)`;

  spinEl.textContent = !angVel ? "SPIN" : sector.label;
  spinEl.style.background = sector.color;
  spinEl.style.color = sector.text;
}

function frame() {
  // Fire an event after the wheel has stopped spinning
  if (!angVel && spinButtonClicked) {
    const finalSector = sectors[getIndex()];
    events.fire("spinEnd", finalSector);
    spinButtonClicked = false; // reset the flag
    return;
  }

  angVel *= friction; // Decrement velocity by friction
  if (angVel < 0.002) angVel = 0; // Bring to stop
  ang += angVel; // Update angle
  ang %= TAU; // Normalize angle
  rotate();
}

function engine() {
  frame();
  requestAnimationFrame(engine);
}

function init() {
  sectors.forEach(drawSector);
  rotate(); // Initial rotation
  engine(); // Start engine
  spinEl.addEventListener("click", () => {
    if (balance.spins <= 0){
      alert("you have no spins")
      return
    }

    if (!angVel) angVel = rand(0.25, 0.45);
    spinButtonClicked = true;
    balance.spins--
    update_balance()
  });
}

init();

events.addListener("spinEnd", (sector) => {
  // console.log(`Woop! You won ${sector.label}`);
  let modelbox= document.getElementById("modal-box")
  document.getElementById("md_succes").innerHTML=`Woop! You won . ${sector.label}`
  document.querySelector(".overlay").classList.add("active")
  modelbox.classList.add("active")
});
const update_balance = ()=>{
  // balance.amount= balance.amount+amount
  document.getElementById("balance").innerHTML=balance.amount
  document.getElementById("spins").innerHTML=balance.spins
}
const btn_claim = document.getElementById("btn_claim")
btn_claim.addEventListener("click", ()=>{
  win=sectors[getIndex()]
  balance.amount += parseInt(win.label)
  update_balance()
  let modelbox= document.getElementById("modal-box")
  document.querySelector(".overlay").classList.remove("active")
  modelbox.classList.remove("active")
})

const btn_claim_spin = document.getElementById("btn_claim_spin")

btn_claim_spin.addEventListener("click", ()=>{
  const input =  document.getElementById("spin_number").value || 0
  const decut = input*20
  // console.log(`${decut}`)
  if(balance.amount < decut){
    alert("you don't enough balance")
  }else{
    balance.amount -= decut
    balance.spins += parseInt(input)
    update_balance()
  }
  let modelbox= document.getElementById("modal-box-spin")
  document.querySelector(".overlay").classList.remove("active")
  modelbox.classList.remove("active")
  document.getElementById("spin_number").value=""

})
const btn_top_up = document.getElementById("top_up")
btn_top_up.addEventListener("click", ()=>{
  // amount =
})

const btn_get_spin= document.getElementById("get_spin")
btn_get_spin.addEventListener("click", ()=>{
  console.log('running')
  let modelbox= document.getElementById("modal-box-spin")
  // document.getElementById("md_succes").innerHTML=`Woop! You won . ${sector.label}`
  document.querySelector(".overlay").classList.add("active")
  modelbox.classList.add("active")
})

