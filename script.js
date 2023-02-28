async function countries() {

    const collect = fetch('https://restcountries.com/v3.1/all');

    let response = await collect;

    let conversion = response.json();

    let result = await conversion;

    console.log(result[0]);

    let main_container = document.createElement('div'); /* creating a container div */
    main_container.classList.add('container');
    main_container.style.backgroundColor = ' #1d3e4e';
    main_container.classList.add('my-5');
    let attach = document.querySelector('body');
    attach.insertAdjacentElement('afterbegin', main_container);

    let row = document.createElement('div'); /* creating a row*/      /* new add js */
    row.classList.add('row');
    let attach_row = document.querySelector('.container');
    attach_row.insertAdjacentElement('afterbegin', row);

    for (let i of result) {

        try {

            let column = document.createElement('div'); /* creating a container column */  /* new add to js */
            column.classList.add('col');
            column.classList.add('col-lg-4');
            column.classList.add('col-sm-12');
            let attach_column = document.querySelector('.row');
            attach_column.insertAdjacentElement('afterbegin', column);


            let card = document.createElement('div'); /* creating a card */
            card.style.background = 'linear-gradient(to right , #D3B88C , #3e464a)'; // #D3B88C  #230903
            card.classList.add('card');
            // card.classList.add('mb-5'); // adding bottom margin
            card.classList.add('mt-5');  // adding top margin
            let card_attachment = document.querySelector('.col'); /* Adding card into the container */
            card_attachment.insertAdjacentElement('afterbegin', card);

            let countryName = document.createElement('div'); /* Creating card header */
            countryName.classList.add('card-header');
            countryName.style.backgroundColor = 'black';
            countryName.style.color = 'white';
            countryName.style.textAlign = 'center';
            countryName.innerText = i.name.common;
            card.append(countryName);

            let stick = document.querySelector('.card'); /* Attaching card header into card */
            stick.insertAdjacentElement('afterbegin', countryName);
            stick.style.textAlign = 'center';
            let card_body = document.createElement('div'); /* creating a card-body  */
            card_body.classList.add('card-body');
            stick.insertAdjacentElement('beforeend', card_body); /* Adding card-body below the card */



            let flag = document.createElement('img'); /* Adding flag */
            flag.setAttribute('src', i.flags.svg);
            card_body.append(flag);
            let img_tag = document.querySelector('img');
            img_tag.style.width = '18rem';
            img_tag.style.height = '10rem';

            let capital = document.createElement('p'); // creating <p> for capital
            capital.innerText = 'Capital :' + ' ' + i.capital[0];
            capital.style.color = 'white';
            card_body.append(capital);


            let region = document.createElement('p');  // creating <p> for region
            region.innerText = 'Region :' + ' ' + i.region;
            region.style.color = 'white';
            card_body.append(region);

            let co_ordinates = document.createElement('p');  // creating <p> for latitude & longitude
            co_ordinates.innerText = 'Latlng :' + ' ' + i.latlng;
            co_ordinates.style.color = 'white';
            card_body.append(co_ordinates);

            let button = document.createElement('button'); // creating button
            button.innerText = "Click for Weather";
            button.classList.add('btn');
            button.classList.add('btn-primary');
            // button.classList.add('btn btn-primary');
            button.setAttribute('onclick', 'findWeather(this)');
            card_body.append(button);

            // main_container.append(card); // adding card div into container


        } catch {
            console.log('data insufficient');
        }


    }
}

countries();


async function findWeather(x) {
    var latlng_data = document.querySelector('.card :nth-child(4)').innerText.split(':')[1]; // fetching the latitude & longitude data from latlng in card
    var lat = latlng_data.split(',')[0].trim(); //seperating latitude from latlng_data
    var lon = latlng_data.split(',')[1]; // seperating longitude from latlng_data

    console.log(lat);
    console.log(lon);

    var weather_url = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8f713c61b539971c03d484fde8371548`);
    response2 = await weather_url
    conversion2 = response2.json()
    result2 = await conversion2;
    alert(result2.weather[0].description);
    console.log(result2.weather);
}




