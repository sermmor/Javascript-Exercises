// Read Books.
interface Book {
    title: string,
    isRead: Boolean,
}

function isBookRead(books : Book[], titleToSearch : string)
{
    const bookSearched : Book[] = books.filter((b) => b.title === titleToSearch);
    return bookSearched.length == 0 ? false : bookSearched[0].isRead;
}

// -------- Show tests in console.
const books = [
    {title: "Hablemos de Langostas", isRead: true},
    {title: "Rebelión en la Granja", isRead: false},
    {title: "Alguien que anda por ahí", isRead: true},
];

console.log("-- 4. Read Books --");
console.log(isBookRead(books, "Alguien que anda por ahí")); // true
console.log(isBookRead(books, "Rebelión en la Granja")); // false
console.log(isBookRead(books, "Los Pilares que la Tierra")); // false
