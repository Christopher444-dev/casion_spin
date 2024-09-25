// import "./spinwheel";

// init()

// variables
Mybalance=50
Myspins=1

Btn_topup = document.getElementById("top_up")
Btn_get_spin = document.getElementById("get_spin")

Btn_get_spin.addEventListener("click",()=>{
  if (Mybalance < 20){
    console.log("you need to top up")
    return
  }
})
Btn_topup.addEventListener("click",()=>{

})
