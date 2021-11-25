const useername = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementByIdlementId('error')
form.addEventListener('submit',(s) =>{
    let messages=[]
    if (name.value ---''|| name.value == null){
        messages.push('Username is required')
    }
if(messages.length > 0){

    e.preventDefault()
    errorElement.innertext = messages.join(',')
}
})