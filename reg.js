const scriptURL="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdcvjofAL_vjj8gNHzV7rlXg9E05ickVjH-d5bflhaxlAPhRA/formResponse"
	const form=document.forms['Submit_to_google_sheets']

	form.addEvenListener('submit',e =>{
		e.preventDefault()
		fetch(scriptURL,{method: 'POST', body: new FormData(form)})
		.then(response => console.log ('Success!',response))
		.catch(error => console.error('Error!',error.message))
	if(alert('your email has been recorded'))
		else{
			setTimeout("location.reload(true);",700);
		}

			})
		
