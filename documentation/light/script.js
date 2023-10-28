function scrollToElement(id, tp=true) {
    var monBloc = document.getElementById(id);
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var targetY = monBloc.getBoundingClientRect().top + scrollTop - (tp?75:100);
    window.scrollTo({
        top: targetY,
        behavior: "smooth"
    });
}

document.querySelector('.action-to-top').addEventListener('click', function() {
    document.querySelector('.action-to-top').classList.toggle('actived');
    setTimeout(() => document.querySelector('.action-to-top').classList.toggle('actived'), 1000);
});

function redirectToSite(url) {
    window.open(url, "_blank");
}

function downloadCode(url) {
  fetch(url)
    .then(response => {
      if (response.ok) return response.text();
      throw new Error("Erreur lors de la récupération du fichier.");
    })
    .then(text => {
      var downloadFile = document.createElement('a');
      downloadFile.setAttribute('href', "data:text/plain;charset=utf-8," + encodeURIComponent(text));
      downloadFile.setAttribute('download', "Megs-Dueling_LIGHT_1.2.1.txt");
      downloadFile.click();
    })
    .catch(error => {
      console.error(error);
    });
}
