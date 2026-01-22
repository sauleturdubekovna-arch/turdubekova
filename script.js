const getDogPhoto = async () =>{
const res = await fetch('https://dog.ceo/api/breeds/image/random')
const dataReady = await res.json()
console.log(dataReady)
let img = document.createElement('img')
img.src = dataReady.message
document.body.append(img)
}
getDogPhoto()
