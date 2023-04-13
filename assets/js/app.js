const contact = document.getElementById("contact")
const booking = document.getElementById("booking")

const clearInputs = () => {
	let allIputs = document.querySelectorAll('input')
	let allTextarea = document.querySelectorAll('textarea')
	let allSelects = document.querySelectorAll('select')
	allIputs.forEach((item) => item.value = "")
	allTextarea.forEach((item) => item.value = "")
	allSelects.forEach((item) => item.value = "")
}

contact.addEventListener("click", () => {
	let contactForm = document.getElementById("contactForm")
	contactForm.classList.toggle("show")
	let reservationForm = document.getElementById('reservationForm')
	reservationForm.classList.remove('show')
})

let formC = document.getElementById("formC")
formC.addEventListener("submit", (e) => {
	e.preventDefault()

	let name = document.getElementById("name").value
	let contactEmail = document.getElementById("contactEmail").value
	let contactPhone = document.getElementById("contactPhone").value

	let list = document.getElementById("list")
	let toText = list.options[list.selectedIndex].text

	let explanation = document.getElementById("explanation").value

	if (name === "") {
		alert(`el campo "Nombre" es obligatorio`)
	} else if (contactEmail === "") {
		alert(`el campo "Correo" es obligatorio`)
	} else if (contactPhone === "") {
		alert(`el campo "Teléfono" es obligatorio`)
	} else if (list.value === "") {
		alert(`el campo "Motivo" es obligatorio`)
	} else if (explanation === "") {
		alert(`el campo "Detalles" es obligatorio`)
	} else {
		alert(`Muchas gracias ${name}, hemos recibido su ${toText.toLowerCase()} y enviaremos una pronta respuesta al correo ${contactEmail}`)
	}

	clearInputs()
})

booking.addEventListener("click", () => {
	let reservationForm = document.getElementById('reservationForm')
	reservationForm.classList.toggle('show')
	let contactForm = document.getElementById("contactForm")
	contactForm.classList.remove("show")
})

$(() => {
	$('#formR').submit((e) => {
		e.preventDefault()

		let nameReservation = $("#nameReservation").val()
		let emailReservation = $("#emailReservation").val()
		let phoneReservation = $("#phoneReservation").val()
		let time = $("#time").val()
		let date = $("#date").val()
		let customers = $("#customers").val()

		if (nameReservation === "") {
			alert(`el campo "Nombre" es obligatorio`)
		} else if (emailReservation === "") {
			alert(`el campo "Correo" es obligatorio`)
		} else if (phoneReservation === "") {
			alert(`el campo "Teléfono" es obligatorio`)
		} else if (time === "") {
			alert(`el campo "Hora" es obligatorio`)
		} else if (date === "") {
			alert(`el campo "Fecha" es obligatorio`)
		} else if (customers === "") {
			alert(`el campo "Cantidad de Asistentes" es obligatorio`)
		} else {
			alert(`Estimado: ${nameReservation} agradecemos por reserar con nosotros. Hemos registrado ${customers} asistentes. Se ha enviado el código de confirmación al correo ${emailReservation}
			Gracias por preferirnos`)
		}

		clearInputs()
	})
})

// let formR = document.getElementById("formR")
// formR.addEventListener("submit", (e) => {
// 	e.preventDefault()

// 	let nameReservation = document.getElementById("nameReservation").value
// 	let emailReservation = document.getElementById("emailReservation").value
// 	let phoneReservation = document.getElementById("phoneReservation").value
// 	let time = document.getElementById("time").value
// 	let date = document.getElementById("date").value
// 	let customers = document.getElementById("customers").value

// 	if (nameReservation === "") {
// 		alert(`el campo "Nombre" es obligatorio`)
// 	} else if (emailReservation === "") {
// 		alert(`el campo "Correo" es obligatorio`)
// 	} else if (phoneReservation === "") {
// 		alert(`el campo "Teléfono" es obligatorio`)
// 	} else if (time === "") {
// 		alert(`el campo "Hora" es obligatorio`)
// 	} else if (date === "") {
// 		alert(`el campo "Fecha" es obligatorio`)
// 	} else if (customers === "") {
// 		alert(`el campo "Cantidad de Asistentes" es obligatorio`)
// 	} else {
// 		alert(`Muchas gracias ${nameReservation}, hemos agendado su reserva para ${customers} personas, el día ${date} a las ${time}, Saludos!`)
// 	}

// 	clearInputs()
// })