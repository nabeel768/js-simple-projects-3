const textArea = document.getElementById('textarea')
const totalCounter = document.getElementById('total-counter')
const remainingCounter=document.getElementById('remaining-counter')

textArea.addEventListener('keyup',()=>{
  updateCounter()
})

function updateCounter(){
  totalCounter.innerHTML= textArea.value.length
  remainingCounter.innerHTML = textArea.getAttribute("maxLength") - textArea.value.length
}