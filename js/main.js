var uniqueCards = [
  {
    cardId: 1,
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    cardId: 2,
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    cardId: 3,
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    cardId: 4,
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }

];

let idxArray = [];
let cards = [];
let countPairs = 0;
let prevIdx = 0;

cards = scrambleCards(uniqueCards.concat(uniqueCards));

function flipCard(event) {
  let idx = event.target.getAttribute('id');
  let firstIdx = 0;

  idxArray.push(cards[idx].cardId);
  event.target.setAttribute('src', cards[idx].cardImage);
  countPairs++;

  if (countPairs == 2) {
    firstIdx = prevIdx;
    setTimeout(() => {

      if (compareCards(idxArray[0], idxArray[1])) {
        alert('Perfect Match! Congrats!');

        idxArray = [];
        document.getElementById(firstIdx).remove();
        document.getElementById(idx).remove();

      } else {
        confirm('Sorry keep trying');
        idxArray = [];

        document.querySelectorAll('.card').forEach(elem => {
          elem.setAttribute('src', 'images/back.png');
        });
      }

      countPairs = 0;

    }, 1000);
  }
  prevIdx = idx;
}

function compareCards(id1, id2) {
  return (id1 === id2 ? true : false);
}

function scrambleCards(cardArray) {
  return cardArray.sort(() => Math.random() * 2 - 1);
}

document.querySelector(".card-row").addEventListener("click", (event) => {
  flipCard(event)
});



