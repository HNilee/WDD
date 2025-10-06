$(document).ready(function() { //Menunggu kode HTML rendering untuk mengimplementasikan JS ini berjalan
    let books = [];

    //Mengambil data dari JSON
    $.getJSON("data/book.json", function(data) {
        console.log("Books loaded:", data);
        books = data;
        displayBooks(books); //Menampilkan seluruh buku
        
    }).fail(function(jqxhr, textStatus, error) {
        console.error("Error loading books:", textStatus, error);
    });

    //Fungsi dari search
    $("#searchInput").on("keyup", function() {
        let keyword = $(this).val().toLowerCase();
        
        // Jika search kosong, munculin semua buku
        if (keyword === "") {
            displayBooks(books);
            return;
        }
        
        let filtered = books.filter(book =>
            book.judul.toLowerCase().includes(keyword) ||
            book.penulis.toLowerCase().includes(keyword) ||
            book.kategori.toLowerCase().includes(keyword) ||
            book.tahun.toLowerCase().includes(keyword)
        );

        displayBooks(filtered);
    });
    
    // Memunculkan isi buku sebagai card
    function displayBooks(booksToDisplay) {
        let cardContainer = $("#bookContainer");
        cardContainer.empty();
        
        //No books found
        if (booksToDisplay.length === 0) {
            cardContainer.html("<p class='no-results'>No books found. Please try a different search.</p>");
            return;
        }
        
        //Template card untuk setiap data buku
        booksToDisplay.forEach(book => {
            let card = `
            <div class="card" style="width: 18rem;">
                <img src="${book.cover}" class="card-img-top" alt="${book.judul}">
                <div class="card-body">
                    <h5 class="card-title">${book.judul}</h5>
                    <p class="card-text">
                        <strong>Author:</strong> ${book.penulis}<br>
                        <strong>Year:</strong> ${book.tahun}<br>
                        <strong>Category:</strong> ${book.kategori}
                    </p>
                </div>
                </div>
            `;
            cardContainer.append(card);
        });
    }
});