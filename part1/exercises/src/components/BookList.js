export default function BookList() {
   let pageTitle = "FAVORITE BOOKS";
   let book1 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1408303130i/375802.jpg" ;
   let book2 = "//upload.wikimedia.org/wikipedia/en/thumb/8/8b/TheWayOfKings.png/220px-TheWayOfKings.png";
   let book3 = "https://m.media-amazon.com/images/I/51K8lYxL12L.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Enders Game" />
         <img src={book2} alt="The Way of Kings" />
         <img src={book3} alt="Nothing here!" />
      </div>      
   );
}