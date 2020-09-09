const ProductName = ['Picture 1', 'Picture 2', 'Picture 3'];
const ProductImage = ['https://ekit.co.uk/GalleryEntries/ecommerce_solutions_and_services/MedRes_Product-presentation-2.jpg', 'https://ekit.co.uk/GalleryEntries/ecommerce_solutions_and_services/MedRes_Product-presentation-2.jpg', 'https://ekit.co.uk/GalleryEntries/ecommerce_solutions_and_services/MedRes_Product-presentation-2.jpg']


for(let i = 0; i < ProductName.length; i++)
{
    console.log("Test");
    document.getElementById('header').innerHTML = document.getElementById('header').innerHTML + "<li>" + ProductName[i] + "<img src="+ ProductImage[i] + ">"+ "</li>";
}


