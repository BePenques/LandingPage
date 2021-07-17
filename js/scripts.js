const form = document.getElementById('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    let data ={
        name,
        email
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let secondsec = document.getElementById('second-sec');

    let loading = `<h3> Enviando... <h3>`;

    let concluded = `<h3> Obrigado! <h3>`;

    setTimeout(()=>{
        secondsec.innerHTML = concluded;
    },1000);

    
    secondsec.innerHTML = loading;

})