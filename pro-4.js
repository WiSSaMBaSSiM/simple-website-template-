function scrollToElement(targetId) {
    var target = document.getElementById(targetId);
    if (!target) return; // Check if the target element exists
    var currentPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var targetPosition = target.getBoundingClientRect().top + currentPosition;
    var scrollInterval = setInterval(function() {
        var currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (currentScrollPosition >= targetPosition) {
            clearInterval(scrollInterval);
        } else {
            window.scrollBy(0, 10); // Adjust the scroll speed by changing the value (e.g., 10)
        }
    }, 10); // Adjust the interval for smoother or slower scrolling
}

document.getElementById('b1').addEventListener('click', function() {
    scrollToElement('services');
});

document.getElementById('b2').addEventListener('click', function() {
    scrollToElement('portfolio');
});
document.getElementById('b3').addEventListener('click', function() {
    scrollToElement('about');
});
document.getElementById('b4').addEventListener('click', function() {
    scrollToElement('contacts');
});
function goToWebsite ()
{
    window.location.href = 'http://127.0.0.1:5500/pro-4.html'
}
document.getElementById('logo').onclick =goToWebsite;