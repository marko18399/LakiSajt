function myFunction() {
   
    document.getElementById('ime').value = '';
    document.getElementById('mejl').value = '';
    document.getElementById('poruka').value = '';
    
    var x = document.forms["forma"]["ime"]["mejl"]["poruka"].value;
    if(x == "")
    {
        alert("Polja moraju biti popunjena");
        return false;
    }
    
}
function klik() {
    window.open("https://www.facebook.com/Hemag-doo-Ivanjica-349382902591810/?hc_ref=ARQ4vi0U0e6wwUmnXheCbyGj10ojL-2moGWyGaGrhENrDjh2BTt8q-aemd1gHCP9c3E&__tn__=kC-R");
}


