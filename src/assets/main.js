
const API = 'https://api.themoviedb.org/3/search/movie?api_key=5a27c4a22138e4f74c2ca6d00739688c&language=en-US&query=Star Wars'

const content = document.getElementById('content')

const options = {
	method: 'GET',
	"Content-Type": "application/json"
};


async function getData() {
    try {
        const resp = await fetch(API,options);
        const data = await resp.json();
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
  
}

getData().then(resp =>{
    //console.log(resp)
    let view = 
    `
    ${resp.results.map(item => `

        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="https://image.tmdb.org/t/p/w300/${item.poster_path}" alt="" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-white">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${item.title}
                </h3>
            </div>
        </div>
    `)}
    

    `
    content.innerHTML = view
})