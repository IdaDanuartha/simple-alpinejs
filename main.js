document.addEventListener('alpine:init', () => {
    Alpine.store('siswa', {
        tahun: 2023,
        nama: ['Danu', 'Novel', 'Putri', 'Artha']
    })
})