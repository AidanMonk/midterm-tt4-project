import './cards.scss';

import catan from "./assets/images/Teaser_CATAN_0.jpg";
import monopoly from "./assets/images/monopoly-board-game-BF9PYM.jpg";
import ticket2ride from "./assets/images/Ticket-To-Ride-1.jpg";
import codenames from "./assets/images/61-u82sF7bL.jpg";
import pandemic from "./assets/images/811YPz8YufL.jpg";
import carcassonne from "./assets/images/81mj6maLP3L._AC_UF894,1000_QL80_.jpg";
import risk from "./assets/images/1B45E578B86B4A0FAB6E88D8D82C7FDF.jpg";
import clue from "./assets/images/Clue_Classic.jpg";
import azul from "./assets/images/images.jpg";
import dominion from "./assets/images/9152Ik8HZ5L._AC_UF894,1000_QL80_.jpg";
import splendor from "./assets/images/43581-1.jpg";
import wonders from "./assets/images/81YFmxbgZ1L._AC_UF894,1000_QL80_.jpg";




// Array of card data with board game titles, descriptions, price, and images
const cardsData = [
    {
        title: "Settlers of Catan",
        description: "A strategy board game where players collect resources and build settlements to dominate the island of Catan.",
        price: "$45.99",
        image: catan
    },
    {
        title: "Monopoly",
        description: "The classic property trading game where players buy, sell, and trade properties to bankrupt their opponents.",
        price: "$19.99",
        image: monopoly
    },
    {
        title: "Ticket to Ride",
        description: "A train-themed board game where players build railways across the map to complete tickets and earn points.",
        price: "$49.99",
        image: ticket2ride
    },
    {
        title: "Codenames",
        description: "A fun word-based game where players give one-word clues to help their team guess the correct words.",
        price: "$29.99",
        image: codenames
    },
    {
        title: "Pandemic",
        description: "A cooperative board game where players work together as a team to stop global disease outbreaks.",
        price: "$39.99",
        image: pandemic
    },
    {
        title: "Carcassonne",
        description: "A tile-placement game where players build cities, roads, and fields in medieval France.",
        price: "$39.99",
        image: carcassonne
    },
    {
        title: "Risk",
        description: "The classic strategy game of global domination, where players fight for control of continents and countries.",
        price: "$29.99",
        image: risk
    },
    {
        title: "Clue",
        description: "A classic mystery board game where players deduce the murderer, weapon, and location through clues.",
        price: "$24.99",
        image: clue
    },
    {
        title: "Azul",
        description: "A beautiful tile-laying game where players compete to create intricate patterns and score points.",
        price: "$39.99",
        image: azul
    },
    {
        title: "Dominion",
        description: "A deck-building game where players use cards to acquire more cards, aiming to have the most victory points.",
        price: "$44.99",
        image: dominion
    },
    {
        title: "Splendor",
        description: "A game of gem trading and collection where players aim to accumulate the most valuable combinations of gems.",
        price: "$34.99",
        image: splendor
    },
    {
        title: "7 Wonders",
        description: "A card drafting game where players build civilizations by collecting resources and developing structures.",
        price: "$49.99",
        image: wonders
    }
];

// Function to generate card HTML dynamically with board game images, price, and add to cart button
function generateCards() {
    const container = document.getElementById("card-container");

    cardsData.forEach(card => {
        const cardHTML = `
            <div class="col-md-4 mb-4">
                <div class="card p-3 shadow-sm">
                    <img src="${card.image}" class="card-img-top" alt="${card.title}">
                    <div class="card-body">
                        <h5 class="card-title">${card.title}</h5>
                        <p class="card-text">${card.description}</p>
                        <p class="text-muted">${card.price}</p>
                        <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// Call the function to populate the cards
generateCards();
