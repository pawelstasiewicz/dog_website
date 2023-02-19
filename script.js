const URL = 'https://dog.ceo/api/breeds/image/random';
const btn = document.querySelector('button');
const img = document.querySelector('img');

// fetch(URL)
// 	.then((res) => res.json())
// 	.then((data) => console.log(data))
// 	.catch((error) => console.error(err));

async function test() {
	try {
		const res = await fetch(URL);
		const data = await res.json();
		const final = await img.setAttribute('src', data.message);
	} catch {
		console.error('error');
	}
}

btn.addEventListener('click', () => {
	test();
});
