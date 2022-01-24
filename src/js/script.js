let validadorRegras = {
  handleSubmit: (event)=>{
    event.preventDefault()
    let send = true

    let inputs = form.querySelectorAll('input')

    for (let i=0; i<inputs.length; i++){
      let input = inputs[i]
      let check = validadorRegras.checkInput(input)
      if (check!==true){
        send=false
        console.log(check)
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
            if(input.value === ''){
              return 'Campo Vazio'
            }
          break
          case 'min':
            if(input.length < 2){
              
            }
          break
        }
      }
    }
  }
}

let form = document.querySelector('.validador')
form.addEventListener('submit', validadorRegras.handleSubmit)