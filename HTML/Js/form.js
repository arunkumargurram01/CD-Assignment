function check(){
        
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    //using regex for email validation
    const str = /@gmail.com$/;
    let emailcheck;
    if(str.test(email)){
        emailcheck = false;
    }else{
        emailcheck = true;
    }

    const q11 = document.getElementById("q11");
    const q12 = document.getElementById("q12" );
    const q21 = document.getElementById("q21");
    const q22 = document.getElementById("q22");
    const q31 = document.getElementById("q31");
    const q32 = document.getElementById("q32");
    const tarea = document.getElementById("tarea").value;
    const con1 = (q11.checked==false && q12.checked == false)
    const con2 = (q21.checked==false && q22.checked == false)
    const con3 = (q31.checked==false && q32.checked == false)


    if(name=='' || emailcheck || con1 || con2 || con3 ){
        alert(`You Missed Some details  or given Invalied details `)
    }else{

        const arr = [q11,q12,q21,q22,q31,q32];
        const seletedRadio = [];

        for(let i=0; i<=5; i++){
            if(arr[i].checked){
                seletedRadio.push(arr[i].value)
            }
        }
        alert(
            `
             Name       : ${name}\n
             Email      : ${email}\n
             qes1       : ${seletedRadio[0]}\n
             qes2       : ${seletedRadio[1]}\n
             qes3       : ${seletedRadio[2]}\n
             suggestion : ${tarea}
            `
        )

    }
}
