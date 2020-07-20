function drawRating(vote) {
    return new Array(5)
        .fill("☆")
        .map((i, ind) => vote - 20*ind >= 0 ? "★" : i)
        .join("")
}

// Проверка работы результата
console.log(drawRating(0) ); // ★☆☆☆☆
console.log(drawRating(1) ); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★