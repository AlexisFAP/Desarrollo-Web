const Universidades = 
[
    {"nit":"891190346-1","nombre":"Universidad de la Amazonia","dirección":"Calle 17 Diagonal 17 con Carrera 3F","teléfono":"4358231"},
    {"nit":"890980040-8","nombre":"Universidad de Antioquia","dirección":"Calle 67 N.º 53-108","teléfono":"2195755"},
    {"nit":"860028971-9","nombre":"Universidad Catolica de Colombia","dirección":"AV Caracas No. 46 – 72","teléfono":"3071 3072"},
    {"nit":"890901389-5","nombre":"Universidad EAFIT","dirección":"Carrera 49, Cl. 7 Sur #50","teléfono":"2619500"},
    {"nit":"900450297-5","nombre":"Universidad de Medellín","dirección":"Cra. 87 #30-65","teléfono":"5904500"}
];

const Estudiantes = 
    [
    {"identificación":1020497009,"nombre":"Carlos" ,"apellidos":"González Giraldo","edad":15,"semestre_cursando":6,"valor_semestre":4300000,"nit_universidad":"891190346-1"},
    {"identificación":1039102082,"nombre":"Diego", "apellidos":"Álvarez Atamiranda","edad":20,"semestre_cursando":7,"valor_semestre":3500000,"nit_universidad":"890980040-8"},
    {"identificación":1037659569,"nombre":"Juan" , "apellidos":"Moscoso Mesa","edad":21,"semestre_cursando":2,"valor_semestre":4360000,"nit_universidad":"860028971-9"},
    {"identificación":1000018690,"nombre":"Sebastián" ,"apellidos":"Murillo Viafara","edad":23,"semestre_cursando":4,"valor_semestre":3700000,"nit_universidad":"890980040-8"},
    {"identificación":1001687233,"nombre":"Mateo" ,"apellidos":"Pedraza Zapata5","edad":16,"semestre_cursando":3,"valor_semestre":4350000,"nit_universidad":"891190346-1"},
    {"identificación":1193413639,"nombre":"Santiago", "apellidos":"Escobar Escobar","edad":17,"semestre_cursando":7,"valor_semestre":3800000,"nit_universidad":"890980040-8"},
    {"identificación":1000874985,"nombre":"Pedro", "apellidos":"Martínez Marulanda","edad":27,"semestre_cursando":5,"valor_semestre":3900000,"nit_universidad":"860028971-9"},
    {"identificación":1000903050,"nombre":"Mauricio", "apellidos":"Rivera Arias","edad":15,"semestre_cursando":2,"valor_semestre":3950000,"nit_universidad":"900450297-5"},
    {"identificación":1040260872,"nombre":"Michael" ,"apellidos":"Cardenas Quintero","edad":16,"semestre_cursando":7,"valor_semestre":3850000,"nit_universidad":"890901389-5"},
    {"identificación":1000206832,"nombre":"Alexis", "apellidos":"Patiño Agudelo","edad":22,"semestre_cursando":9,"valor_semestre":3500000,"nit_universidad":"891190346-1"},
    {"identificación":1000918870,"nombre":"Alexander", "apellidos":"Restrepo Múnera","edad":21,"semestre_cursando":6,"valor_semestre":3550000,"nit_universidad":"900450297-5"},
    {"identificación":1010027176,"nombre":"Jose", "apellidos":"Posada Bernal","edad":22,"semestre_cursando":9,"valor_semestre":3650000,"nit_universidad":"890901389-5"}
];

/**
 * Ordenar arreglo respecto a el valor del semestre
 * @param {*} arr arreglo Estudiantes
 * @returns arreglo ordenado
 */
const ordernarArreglo = (arr) => {
    return arr.sort(function(a, b) {
        let x = a.valor_semestre; let y = b.valor_semestre;
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    });
}

/**
 * Muestra los 5 estudiantes que tienen el mayor valor del semestre pagado
 * @param {*} arr  arreglo Universidades
 * @param {*} callback funcion que ordena el arreglo
 */
const mostrarMayores = (arr, callback) => {
    console.log("Estos son los 5 estudiantes que tienen el mayor valor del semestre pagado");
    console.log("");
    callback(arr);
    let Estudiantes = callback(arr);
    for(let i=0;i<5;i++){
        console.log(Estudiantes[i].identificación+" "+Estudiantes[i].nombre+" "+Estudiantes[i].apellidos);
    }
    console.log("");
}

/**
 * Muestra las universidades con el promedio del valor del semestre, el promedio se muestra en numeros enteros
 * @param {*} arr arreglo Universidades
 * @param {*} callback funcion que retorna el promedio del valor semestre
 */
const mostarUniversidadesPromedio = (arr, callback) => {
    let promedio = callback(arr);
    console.log("Promedio del valor semestre de las universidades");
    console.log("");
    for(let i=0;i<arr.length;i++){
        console.log(arr[i].nombre + " " + promedio[i]);
    }
    console.log("");
}

/**
 * Retorna un arreglo con el promedio del valor semestre de las universidades, los indices son correspondientes
 * @param {*} arr arreglo Estudiantes
 * @returns arreglo con el promedio del valor del semestre de las universidades
 */
const promedioUniversidades = (arr) => {
    let promedio=[];
    let sum = 0;
    let num = 0;
    arr.forEach(element => {
        Estudiantes.forEach(eleme => {
            if(eleme.nit_universidad == element.nit){
                sum += eleme.valor_semestre;
                num++;
            }
        });
        promedio.push(Math.floor(sum/num));
        sum = 0;
        num = 0;
    });
    return promedio;
}

/**
 * Muestra a los estudiantes menores de edad de cada univeridada
 * @param {*} arr arreglo Universidades
 * @param {*} callback funcion que encuentra a los estudiantes menores de edad de las universidades 
 */
const mostrarMenoresEdad = (arr, callback) => {
    console.log("Estudiantes menores de Edad de las universidades");
    console.log("");
    let estudiantes = callback(arr);
    arr.forEach(element => {
        estudiantes.forEach(elem => {
            if(elem.nit_universidad == element.nit){
                console.log(element.nombre+"-"+elem.nombre+" "+elem.apellidos+" id:"+elem.identificación+" edad: "+elem.edad);
                console.log("");
            }
        });
    });

}

/**
 * Encuentra a los estudiantes menores de edad de las univerisidades
 * @param {*} arr arreglo Estudiantes
 * @returns los estudiantes menores de edad de las Universidades
 */
const menoresEdad = (arr) => {
    let listMenores = [];
    arr.forEach(element => {
        Estudiantes.forEach(elem => {
            if((elem.nit_universidad == element.nit) && elem.edad < 18){
                listMenores.push(elem);
            }
        });
    });
    return listMenores;
}

mostrarMayores(Estudiantes, ordernarArreglo);

mostarUniversidadesPromedio(Universidades, promedioUniversidades);

mostrarMenoresEdad(Universidades, menoresEdad);