function drawRating(vote) {
    if (vote <= 20) return '★☆☆☆☆';
    if (vote <= 40) return '★★☆☆☆';
    if (vote <= 60) return '★★★☆☆';
    if (vote <= 80) return '★★★★☆';
    return '★★★★★';
}

// Проверка работы результата
console.log(drawRating(0) ); // ★☆☆☆☆
console.log(drawRating(1) ); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★