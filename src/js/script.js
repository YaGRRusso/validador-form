let validadorRegras = {
  handleSubmit: (event)=>{
    event.preventDefault()
    let send = true

    let inputs = form.querySelectorAll('input')

    validadorRegras.clearErrors()

    for (let i=0; i<inputs.length; i++){
      let input = inputs[i]
      let check = validadorRegras.checkInput(input)
      if (check!==true){
        send=false
        validadorRegras.showError(input, check)
      }
    }

    if (send){
      form.submit()
    }
  },
  checkInput: (input)=>{
    let rules = input.getAttribute('data-rules')

    if (rules !== null){
      rules = rules.split('|')
      for (let k in rules){
        let details = rules[k].split('=')
        switch (details[0]) {
          case 'required':
            if(input.value == ''){
              return 'Campo Vazio'
            }
          break
          case 'min':
            if(input.value.length < details[1]){
              return 'Poucos nmr'
            }
          break
        }
      }
    }
  },
  showError: (input, error)=>{
    input.style.borderColor = '#F00'

    let errorElement = document.createElement('div')
    errorElement.classList.add('error')
    errorElement.innerHTML = error

    input.parentElement.insertBefore(errorElement, input.nextElementSibling)
  },
  clearErrors: ()=>{
    let errorElements = document.querySelectorAll('.error')
    for (i=0; i<errorElements.length;i++){
      errorElements[i].remove()
    }
  }
}

let form = document.querySelector('.validador')
form.addEventListener('submit', validadorRegras.handleSubmit)