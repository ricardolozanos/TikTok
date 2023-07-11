function createColumns() {
  const screenWidth = window.innerWidth;
  const columnWidth = 12;
  const numColumns = Math.ceil(screenWidth / columnWidth);

  document.body.textContent = ""; // Clear existing columns

  for (let i = 0; i < numColumns; i++) {
    const column = document.createElement("div");
    column.className = "column";
    
    for (let j = 0; j < Math.ceil(window.innerHeight / columnWidth); j++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.textContent = generateRandomCharacter();
      column.appendChild(cell);
    }
    
    document.body.appendChild(column);
  }
}

function generateRandomCharacter() {
  const characters1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const characters2 = "☻☺♥♦♣◘•○♠♀☼♪♫☂☾☽✿✪✯✰❀✦✧❤❥❂✶✷✸✹✺✻✼❄❅❆✽✾✿❁❃❇❈❉❊❋❄❅❆❇❈❉❊❋";
  const characters3 = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ";
  const spaces = " ".repeat(200);
  const characters = characters1+characters2+spaces;
  return characters.charAt(Math.floor(Math.random() * characters.length));
}

function updateColumns() {
  const columns = document.querySelectorAll(".column");
  const numColumns = columns.length;

  for (let i = 0; i < numColumns; i++) {
    const column = columns[i];
    const cells = column.querySelectorAll(".cell");
    const numCells = cells.length;

    // Move cells down by one position
    for (let j = numCells - 1; j > 0; j--) {
      cells[j].textContent = cells[j - 1].textContent;
    }

    // Add random letter at the top
    cells[0].textContent = generateRandomCharacter();
  }
}

function handleResize() {
  createColumns(); // Recreate columns on window resize
}

// Initial creation of columns
createColumns();

// Update columns every second
setInterval(updateColumns, 100);

// Handle window resize event
window.addEventListener("resize", handleResize);