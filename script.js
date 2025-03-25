function changePhoto() {
    const img = document.getElementById('photo');
    img.style.opacity = 0; // Fade out
    setTimeout(() => {
        img.src = isFirstPhoto ? 'https://iili.io/3TRCLGI.jpg' : 'https://iili.io/3TRqZoN.jpg';
        isFirstPhoto = !isFirstPhoto;
        img.style.opacity = 1; // Fade in
    }, 500); // Wait 0.5 seconds before switching
}
