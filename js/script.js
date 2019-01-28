let tabBox = document.querySelector('#tab-box');
let tabs = [].slice.call(document.querySelectorAll('#tab-box > .columns > .column > .tabs > ul > li'));
let imgs = [].slice.call(document.querySelectorAll('#tab-box > .columns > .column > img'));

function clearTabs() {
  tabs.forEach(tab => {
    tab.classList.remove('is-active');
  });
  imgs.forEach(img => {
    img.classList.add('img-hidden');
  })
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    clearTabs();
    tab.classList.add('is-active');
    let index = tabs.indexOf(tab);
    imgs[index].classList.remove('img-hidden');
  });

})

//[1].className += 'is-active'
