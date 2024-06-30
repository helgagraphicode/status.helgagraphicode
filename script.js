document.addEventListener('DOMContentLoaded', function() {
    const statusElement = document.getElementById('status');
    const loadingElement = document.getElementById('loading');
    
    // Simulasi pengecekan server
    setTimeout(() => {
        const url = 'https://info.helgagraphicode.my.id'; // Ganti dengan URL server yang ingin dicek
        
        fetch(url)
            .then(response => {
                if (response.ok) {
                    statusElement.textContent = 'Server is Online';
                    statusElement.style.color = 'lightgreen';
                } else {
                    statusElement.textContent = 'Server is Offline';
                    statusElement.style.color = 'red';
                }
            })
            .catch(error => {
                statusElement.textContent = 'Server is Offline';
                statusElement.style.color = 'red';
            })
            .finally(() => {
                loadingElement.style.display = 'none';
            });
    }, 2000); // Simulasi loading 2 detik
});
