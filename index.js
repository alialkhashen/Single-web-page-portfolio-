const form = document.getElementById('recommendation-form');
const recommendationList = document.querySelector('.recommendations');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newRecommendation = document.getElementById('new-recommendation').value;

    if (newRecommendation.trim() !== '') {
        const newCard = document.createElement('div');
        newCard.className = 'recommendation-card';
        newCard.textContent = newRecommendation;
        recommendationList.insertBefore(newCard, form);

        alert('Your recommendation has been added!');

        form.reset();
    } else {
        alert('Please enter a recommendation.');
    }
});