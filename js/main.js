(() => {

	console.log("Awesome SVG Proeject - Javascript Starts Here");

	let svgImage = document.querySelectorAll('.svg-img');

	function logSVG() 
	{
		console.log(this.id);
	}

	function clickEvent()
	{
		this.classList.toggle("selected");
	}

	svgImage.forEach(image => image.addEventListener('mouseover', logSVG));

})();