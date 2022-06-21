const agregadosContainer = document.querySelector('.agregados');
const imagenAgregados = document.querySelector('#imagen-agregados');
const ensaladasContainer = document.querySelector('#ensaladas');
const apiUrl = ('https://maf2qxs1f6.execute-api.us-east-1.amazonaws.com/prod/api/menus');



function fetchAgregados() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const menu = data;
            const agregados = menu.agregados;
            console.log(agregados);

            agregados.map(function(agregado) {

                const productImage = agregado.img;
                const productName = agregado.name;
                const productPrice = agregado.price;
                const productDescrip = agregado.description;

                const cardContainer = document.createElement('div');
                cardContainer.classList.add('card-mb-3');

                const bodyCard = document.createElement('div');
                bodyCard.classList.add('card-body');

                const imagenCard = document.createElement('img');
                imagenCard.src = productImage;
                imagenCard.classList.add('card-img');

                const agregadoName = document.createElement('h5');
                agregadoName.classList.add('card-title');
                agregadoName.textContent = productName;

                const agregadoDescrip = document.createElement('p');
                agregadoDescrip.classList.add('card-text');
                agregadoDescrip.textContent = productDescrip;

                const agregadosPrice = document.createElement('p');
                agregadosPrice.classList.add('card-text');
                agregadosPrice.textContent = productPrice;


                cardContainer.appendChild(imagenCard);
                bodyCard.appendChild(agregadoName);
                bodyCard.appendChild(agregadoDescrip);
                bodyCard.appendChild(agregadosPrice);
                agregadosContainer.appendChild(bodyCard);
                agregadosContainer.appendChild(cardContainer);

            });

        });
}

fetchAgregados();









//    agregadosContainer.innerHTML = '<ul>' + agregados.map(function(agregado) {
//         const productImage = agregado.img;
//         const productName = agregado.name;
//         const productPrice = agregado.price;
//         const productDescrip = agregado.description;


//         return '<li>' + productName + ' ' + productPrice + '</li>';

//     }).join('') + '</ul>';