const api = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCxULoUHhi7STRs9dr7Lvm7Q&part=snippet%2Cid&order=date&maxResults=5';
const content = null || document.querySelector('#content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '88e28c4c60mshd0a0d4c11d8522cp1b7340jsn1be3e62af2bc',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const fetchData = async (urlApi) => {
    const res = await fetch(urlApi, options);
    const data = await res.json();
    console.log(data);
    return data;
}

(async () => {
    try{ 
        const videos = await fetchData(api);
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
        <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
            </h3>
        </div>
        </div>
        `).slice(0,4).join('')}
        `;
        // content.innerHTML = view;
        content.innerHTML = view;
    } catch (err) {
        console.log(err);
    }
})();