function Calculadora(){

    this.display= document.querySelector('.display')

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    };

    this.pressionaEnter= () => {
        this.display.addEventListener('keypress', event => {
            if(event.keyCode === 13){
                this.realizaConta()
            }
        })
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click',  event => {
            const el = event.target;
            if(el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
            if(el.classList.contains('btn-clear')) this.clearDisplay();
            if(el.classList.contains('btn-del')) this.deleteCaractere()
            if(el.classList.contains('btn-eq')) this.realizaConta()
            

        });
    };

    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
        this.display.focus()
    }

    this.clearDisplay = () => this.display.value='';


    this.deleteCaractere = ()=>  this.display.value = this.display.value.slice(0, -1);


    this.realizaConta = () => {
        try{
            let conta = eval(this.display.value)
            if(!conta){
                alert('Conta inválida!')
                return;
            }
            this.display.value = conta
        }catch(e){
            alert('Conta inválida!')
            return;
        }
    };
}

const calculadora = new Calculadora()
calculadora.inicia()