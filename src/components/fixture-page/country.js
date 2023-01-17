fetch('../data/country.json')
    .then(response => response.json())
    .then(data => {
        data.response.sort((a, b) => {
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0;
        });
        data.response.forEach(function(data) {
            countries.innerHTML +=`
                <div class="flex p-2">
                    <span class="my-auto"><img src="${data.flag}" width="30px" class="rounded-sm"/></span>
                    <span class="ml-2 text-sm text-gray-300 hover:text-sky-600 cursor-pointer">${data.name}</span>
                </div>`
        })
    });
