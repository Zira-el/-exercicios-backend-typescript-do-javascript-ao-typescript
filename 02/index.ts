const books: string[] = [
  "Guerra e Paz",
  "A Montanha Mágica",
  "Cem Anos de Solidão",
  "Dom Quixote",
  "A Divina Comédia",
]

const findBooks = ((books: string[], findBook: string): string => {
  const position: number = books.indexOf(findBook);

  if (position !== -1) {
    return `Livro encontrado na posição ${position + 1}`
  }

  return `Livro não encontrado.`
});

console.log(findBooks(books, "a menina que roubava livros"));
console.log(findBooks(books, "Dom Quixote"));