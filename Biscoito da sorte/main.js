window.onload = function(){

    const screen1 = document.querySelector(".screen1");
    const screen2 = document.querySelector(".screen2");
    const btn = document.querySelector("#btn");
    const btnTry= document.querySelector("#btnTry");
    const phrases = document.querySelector(".phrasesOfCoockie");
    const phrasesOfCookie = [
        "You will have a great day today!",
        "Good things are coming your way!",
        "Expect a positive change in your life soon!",
        "You are loved and appreciated by those around you.",
        "A pleasant surprise is in store for you.",
        "Your hard work will soon be rewarded.",
      ];   
    let xAttempts = 1;
    
    

    btn.addEventListener('click', () => {
        document.querySelector(".screen1").classList.add("hide");
        document.querySelector(".screen2").classList.remove("hide");
        phrases.innerText = phrasesOfCookie[Math.round(Math.random() * 5)]
      })

   
    btnA.addEventListener('click', function(){
        screen1.classList.remove('hide')
        screen2.classList.add('hide')        
    })

    
    
    console.log(btn)


}
window.onload = function(){

    const screen1 = document.querySelector(".screen1");
    const screen2 = document.querySelector(".screen2");
    const btn = document.querySelector("#btn");
    const btnA = document.querySelector("#btnA");
    const phrases = document.querySelector(".phrasesOfCoockie");
    const phrasesOfCookie = [
      "Viver não é esperar que a tempestade passe, mas aprender a dançar na chuva. ",
        "A felicidade é encontrar a certeza de que a vida não está passando inutilmente. ",
        "Se você não seguir em frente, jamais conhecerá o final da história. ",
        "Delete tudo o que não te serve, carregue só o que for bom para você. ",
        "vAgradece ao dia recebido, a tudo de bom que você tem na vida. Agradece a oportunidade.",
        "O sol nasce para todos, é por isso que precisamos continuar tentando todos os dias.",
      ];   
    let xAttempts = 1;
    
    

    btn.addEventListener('click', () => {
        document.querySelector(".screen1").classList.add("hide");
        document.querySelector(".screen2").classList.remove("hide");
        phrases.innerText = phrasesOfCookie[Math.round(Math.random() * 5)]
      })

   
    btnA.addEventListener('click', function(){
        screen1.classList.remove('hide')
        screen2.classList.add('hide')        
    })

    
    
    console.log(btn)


}



