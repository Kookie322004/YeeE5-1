let area = 0;
		let length = 0;
		let width = 0;
		let rugs = 0;
		function varFunc()
		{
			length = document.getElementById('lengthval').value;
			console.log(length);
		
			 width = document.getElementById('widthval').value;
			 console.log(width);
		
		}
		
		function calculateFunc()
		{
			area = length*width;
			document.getElementById('areaval').innerHTML = area;
		}
		
		function sqrMetersFunc()
		{
			rugs = area/2;
			document.getElementById('rugsam').innerHTML = rugs;
		}