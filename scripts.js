//Eventos:
//1 Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
console.log('hola');

//console.log(document.getElementsByTagName("a"));
let a = document.getElementsByTagName("a");
for (let i = 0; i < a.length; i++) {
    a[i].removeAttribute('href');
}

//2 Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:
//2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.

//2.1
let figure = document.querySelectorAll("img");

        figure.forEach((img)=> {
            img.addEventListener("click", function() {
                img.src = `assets/magic-${1+ Math.round(Math.random() * 5)}.gif`;
            console.log("Click"); 
            });
        
         
        }); 
//2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

let p = document.querySelectorAll("p");
        p.forEach((parrafo)=> {
            parrafo.addEventListener("click", function() {
                parrafo.style.backgroundColor = "red";
                parrafo.style.color = "white";
            console.log("Click"); 
            });
        
         
        }); 

//2.3 Bloques de article o section: Cambia el color de fondo.
let art = document.querySelectorAll("article");
    art.forEach((elem)=> {
        elem.addEventListener("click", function() {
        elem.style.backgroundColor = "green";
    console.log("Click"); 
    });       
}); 

//section
let sect = document.querySelectorAll("section");
    sect.forEach((sec)=> {
        sec.addEventListener("click", function() {
        sec.style.backgroundColor = "blueviolet";
    console.log("Click"); 
    });       
}); 
/* 3. Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.

    3.1 Imágenes: Cambia la imagen por el gif `abracadabra.gif`.
*/
let figur = document.querySelectorAll("img");


        figur.forEach((img2)=> {
            let prevsource = img2.src;
            img2.addEventListener("mouseover", function() {
                img2.src = `assets/abracadabra.gif`; 
                
            console.log("mouseover"); 
            });

            img2.addEventListener("mouseout", function() {
                img2.src = prevsource;
            console.log("mouseout"); 
            });
         
        }); 
    

    //3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
    let p3 = document.querySelectorAll("p");
        p.forEach((parrafo)=> {
            parrafo.addEventListener("mouseover", function() {
                parrafo.style.background = 'linear-gradient(300deg, #e66465 0%, #9198e5 87%)';
                parrafo.style.color = "white";
            console.log("mouseover"); 
            });
        
         
        }); 
    //3.3 Bloques de `article` o `section`: Color de fondo distinto al de párrafo.*/
    let sect2 = document.querySelectorAll("section");
    sect2.forEach((sec2)=> {
        sec2.addEventListener("mouseover", function() {
        sec2.style.background = "background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);";
    
    });       
}); 
    let art2 = document.querySelectorAll("article");
    art2.forEach((ar2)=> {
        ar2.addEventListener("mouseover", function() {
        ar2.style.backgroundColor = "black";
        
    });       
}); 





