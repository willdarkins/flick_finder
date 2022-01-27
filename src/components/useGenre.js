const useGenre = (selectedGenres) => {
    if(selectedGenres.length<1) return '';

    const GenreIds = selectedGenres.map((i) => i.id);

    return GenreIds.reduce((acc, curr)=> acc + ',' + curr);
}

export default useGenre