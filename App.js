
 let countEl = document.getElementById("count") //pass argument
 let savEl = document.getElementById("save-el")
 let count = 0

 function increment() {
           console.log("clicked")
           count += 1
  countEl.textContent = count
 }


 function save() {
          let countStr = count + " - "
          savEl.textContent += countStr
      
            console.log(count)
            countEl.textContent = 0
            count = 0
 }

