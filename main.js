const bannerBtn = document.getElementById("btn-banner");

bannerBtn.onclick = async () => {
    let counter = 0;
    while (counter != 1000) {
            await window.scrollTo(null, counter);
            counter+=0.5;
    }
}