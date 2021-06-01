document.addEventListener("DOMContentLoaded", async ()=>{
  await ultimaActualizacion()

  await traerCarnetsUpdate()
  
  document.getElementById("actualizarPapurri").addEventListener(("click"),async()=>{
    await updateCarnetNube()
  })
});

async function ultimaActualizacion() {
  await fetch('https://transito.semdatalogicos.com/ultimaactualizacion.php')
  .then(response => response.json())
  .then(async(data)=>{
     console.log(data)
     localStorage.setItem("fechaActualizacion",JSON.stringify(data))
    }).catch(()=>{
    alert("error")
  });  
    
}
async function traerCarnetsUpdate() {
  let objet=JSON.parse(localStorage.getItem("fechaActualizacion"))
  await fetch(`php/traerCarnet.php?fechaAct=${objet.fecha}`)
  .then(response => response.json())
  .then((data)=>{
    console.log(data)
  });
    
}

/* me quede en actualizar los registros en transito.semdatalogicos.com */

/* async function updateCarnetNube() {
  await fetch(`php/traerCarnet.php?fechaAct=${objet.fecha}`)
  .then(response => response.json())
  .then(data => console.log(data));
    
} */


