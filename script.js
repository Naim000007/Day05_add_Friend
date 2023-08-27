const unkonw = document.getElementById('unknow')
const btn = document.getElementById('btn')
let count = 0
btn.addEventListener('click', function(){
    if(count ===0){
        unkonw.textContent= "Friend"
        btn.textContent = "Remove Friend"
        count++;
    }
    else{
        unkonw.textContent ="Unknown Friend"
        btn.textContent = "Add Friend"
        count = 0
    }

})