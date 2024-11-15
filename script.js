const facts = [
    "You are 20 years old, entering the exciting phase of early adulthood.",
    "You love brush calligraphy, showcasing your creative and artistic side.",
    "Coding is one of your interests, highlighting your affinity for technology.",
    "You enjoy spending time at beaches, oceans, seas, and lakes.",
    "You have a passion for exploring serene water bodies."
];

document.getElementById('revealFactBtn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').textContent = facts[randomIndex];
});
