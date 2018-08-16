const containerTitle = document.getElementById('title');
const containerDireccion = document.getElementById('direccion');
const containerHorario = document.getElementById('horario');

btnData.addEventListener('click', () => {
  const ubication = `https://places.cit.api.here.com/places/v1/discover/search?app_id=7ruK6i4yX7FUmmecHtyw&app_code=Kfxkypo1SzkZogn5nO4eag&at=${HEREHQcoordinates.lat},${HEREHQcoordinates.lng}&q=${inputGroupSelect02.value}&pretty`
  fetch(ubication)
  .then(response => response.json())
  .then(explorer => {
    console.log(explorer);
    explorer.results.items.forEach((item)=>{
      let explorer = {
      name: item.title,
      direccion: item.vicinity
    }
    });
    renderInfo(explorer);
  });
});

const renderInfo = (explorer) => {
  contenedorData.innerHTML += `<p class="descriptionFodd"> Nombre Local: ${JSON.stringify(explorer.results.items[0].title)}
  Dirección: ${JSON.stringify(explorer.results.items[0].vicinity)} Calificación: ${JSON.stringify(explorer.results.items[0].averageRating)}</p>`;
}