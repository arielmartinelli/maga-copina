let imagenes = ["assets/img1.jpg", "assets/img2.jpg", "assets/img3.jpg", "assets/img4.jpg", "assets/img5.jpg"];
let indiceImagen = 0;

function mostrarInvitacion() {
    Swal.fire({
        title: 'Maga, te invito a una vuelta en moto 🏍️',
        text: 'Este finde estreno la patente y me encantaría que vengas conmigo a Copina.',
        icon: 'info',
        confirmButtonText: 'Me encanta 💙',
        showCancelButton: true,
        cancelButtonText: 'No puedo 😢'
    }).then((result) => {
        if (result.isConfirmed) {
            window.open('https://wa.me/3516121498?text=Si%20quiero%20😠😤', '_blank');
        } else {
            document.getElementById('señuelo').classList.add('hidden');
            document.getElementById('imagenes').classList.remove('hidden');
            indiceImagen = 0;
            document.getElementById('imagenActual').src = imagenes[indiceImagen];
            document.getElementById('imagenActual').classList.remove('hidden');
        }
    });
}

function siguienteImagen() {
    indiceImagen++;
    if (indiceImagen < imagenes.length) {
        document.getElementById('imagenActual').src = imagenes[indiceImagen];
    } else {
        Swal.fire('Bueno, me rindo 😂', 'Cuando quieras, te espero.', 'info').then(() => {
            document.getElementById('imagenes').classList.add('hidden');
        });
    }
}