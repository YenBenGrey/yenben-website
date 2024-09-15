document.getElementById('bbcBtn').addEventListener('click', function() {
    console.log("Button clicked");
    const bbcLink = 'https://www.bbc.co.uk/';
    window.open(bbcLink, '_blank', 'width=800,height=600');
    });