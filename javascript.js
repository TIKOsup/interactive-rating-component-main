document.querySelectorAll('.rating-item').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelectorAll('.rating-item').forEach(item1 => {
            if (item1.classList.contains('selected')) {
                item1.classList.remove('selected');
            };
        })
        item.classList.add('selected');
    });
});

function btnSubmit() {
    var rating;

    document.querySelectorAll('.selected').forEach(item => {
        rating = item.getAttribute('value');
    });

    if (rating != null) {
        var ratingState = document.getElementById('rating-state');
        var thankYouState = document.getElementById('thank-you-state');

        console.log(ratingState.classList);
        ratingState.style.display = 'none';
        thankYouState.style.display = 'flex';

        var p = thankYouState.querySelector('#rating-extra');
        p.innerHTML = "You selected " + rating + " out of 5";
    }
}