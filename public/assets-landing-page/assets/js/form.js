const scriptURL = 'https://script.google.com/macros/s/AKfycbxwf0-K2JiiOqu5t8-ujXHEahDRvEcSED1K2kXXaqvSrUMFm6aqiRIvi_0YB16mUwWI/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      console.log('Success!', response);
      alert("Pesan anda sudah kami terima");
      form.reset(); // Reset form setelah berhasil submit
    })
    .catch(error => console.error('Error!', error.message));
});
