let counter_ = 0;
	let button = document.getElementById("getdata");
		button.addEventListener("click", (e) =>{
			counter_ += 1;

			let request = new XMLHttpRequest();
			if (counter_ <= 1){
			request.open("get", "index.php", 1)
		
			

			var awaits = document.getElementById("await");
				awaits.textContent="Espere.."
			
			
			request.addEventListener("load", (e)=>{
				
				let p = document.createElement("p")
				p.innerHTML = e.target.responseText;
				document.body.appendChild(p);
			},false);

		}

		 let times = setTimeout(()=>{
			
			request.send();	
			awaits.textContent="";
			}, 1000)


		}, false)