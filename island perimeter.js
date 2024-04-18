var islandPerimeter = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let perimeter = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                perimeter += 4; // Each land cell contributes 4 to the perimeter

                // Check left and top neighbors
                if (i > 0 && grid[i - 1][j] === 1) {
                    perimeter -= 2; // Subtract 2 for adjacent sides
                }
                if (j > 0 && grid[i][j - 1] === 1) {
                    perimeter -= 2; // Subtract 2 for adjacent sides
                }
            }
        }
    }

    return perimeter;
};
