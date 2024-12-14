document.getElementById("form_registro").addEventListener("submit", function(event){
    event.preventDefault();
    
    const nombres = document.getElementById("nombres_apellidos").value;
    const nacionalidad = document.getElementById("nacionalidad").value;
    const edad = document.getElementById("edad").value;

    if(edad < 18){
        alert("Debe ser mayor de 18 años para participar del evento");
        return;
    }
    if(nacionalidad!=="Peruano"){
        alert("Solo los peruanos son seran admitidos al evento");
        return;
    }

    const tablebody = document.getElementById("tablebody");
    tablebody.innerHTML=`
        <tr>
            <td>${nombres}</td>
            <td>${nacionalidad}</td>
            <td>${edad}</td>
        </tr>
    `;

    document.getElementById("tablas_datos").style.display="block";
});