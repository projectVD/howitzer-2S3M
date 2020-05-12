
const app = {
  pages: [],
  show: new Event('show'),
  init: function(){
    app.pages = document.querySelectorAll('.page');
    app.pages.forEach(pg => {
      pg.addEventListener('show', app.pageShown)
    })

    document.querySelectorAll('.nav-links').forEach(link => {
      link.addEventListener('click', app.nav);
    })

    history.replaceState({}, 'Home', '#home');
    window.addEventListener('popstate', app.poppin)
  },
  nav: function(ev){
    ev.preventDefault();
    let curentPage = ev.target.getAttribute('data-target');
    document.querySelector('.active').classList.remove('active');
    document.getElementById(curentPage).classList.add('active');
    history.pushState({}, curentPage, `#${curentPage}`);
    document.getElementById(curentPage).dispatchEvent(app.show);
    goTop();
    hideModalWindow();
    hideSidebar();
  },
  pageShown: function(ev){
    const headerTitle = document.querySelector('.screen-title');
    const blockPage = document.getElementById('book');
    const instructionPage = document.getElementById('instruction');
    const aboutPage = document.getElementById('about');
    const daysPages = document.querySelectorAll('.days');

    console.log('Page', ev.target.id)

    bookButtons.style.display = 'none';

    if (blockPage.classList[1] == 'active') {
      headerTitle.innerHTML = 'Гаубиця 2С3М'
    }
    if (instructionPage.classList[1] == 'active') {
      headerTitle.innerHTML = 'Інструкція'
    }
    if (aboutPage.classList[1] == 'active') {
      headerTitle.innerHTML = 'Про додаток'
    }

    daysPages.forEach(elem => {
      if (elem.classList[2] == 'active') {
        bookButtons.style.display = 'block';
      } 
    });    

    if (daysPages[0].classList[2] == 'active') {
      headerTitle.innerHTML = 'День перший'
    }
    if (daysPages[1].classList[2] == 'active') {
      headerTitle.innerHTML = 'День другий'
    }
    if (daysPages[2].classList[2] == 'active') {
      headerTitle.innerHTML = 'День третій'
    }
    if (daysPages[3].classList[2] == 'active') {
      headerTitle.innerHTML = 'День четвертий'
    }
    if (daysPages[4].classList[2] == 'active') {
      headerTitle.innerHTML = 'День п\'ятий'
    }
    if (daysPages[5].classList[2] == 'active') {
      headerTitle.innerHTML = 'День шостий'
    }
    if (daysPages[6].classList[2] == 'active') {
      headerTitle.innerHTML = 'День сьомий'
    }
    if (daysPages[7].classList[2] == 'active') {
      headerTitle.innerHTML = 'День восьмий'
    }
    if (daysPages[8].classList[2] == 'active') {
      headerTitle.innerHTML = 'День дев\'ятий'
    }
    if (daysPages[9].classList[2] == 'active') {
      headerTitle.innerHTML = 'День десятий'
    }


  },
  poppin: function(ev){
    console.log(location.hash, 'popstate event');
    let hash = location.hash.replace('#', '');
    document.querySelector('.active').classList.remove('active');
    document.getElementById(hash).classList.add('active');
    document.getElementById(hash).dispatchEvent(app.show);
  }
}

document.addEventListener('DOMContentLoaded', app.init);

scaleImg()

function scaleImg() {
  const img = document.querySelectorAll('img')

  img.forEach(elem => {
    elem.onclick = function() {
      this.classList.toggle('scaleImg')
    }
  })
}


function goTop() {
  window.scrollTo( {
    top: 0,
  })
}


const bookButtons = document.querySelector('.book-buttons');


let lastScrollTop = 0;
window.onscroll = onScroll;

function onScroll (e) {
	let top = window.pageYOffset;
	if (lastScrollTop > top) {
		bookButtons.style.transform = 'translateY(0)'

	} else if (lastScrollTop < top) {
    bookButtons.style.transform = 'translateY(100%)';
	}
	lastScrollTop = top;
}


const darkScreen = document.querySelector('.dark');
const sidebarPanel = document.querySelector('.sidebar');
const modalWindow = document.querySelector('.modal');
const menuBtn = document.getElementById('menu-btn');
const infoBtn = document.getElementById('info-btn');


menuBtn.onclick = showSidebar

infoBtn.onclick = showModalWindow

darkScreen.onclick = () => {
  hideSidebar()
  hideModalWindow()
};



function showModalWindow() {
  showDarkScreen()
  modalWindow.style.display = 'block'
}

function hideModalWindow() {
  hideDarkScreen();  
  modalWindow.style.display = 'none'
}

function showDarkScreen() {
  darkScreen.style.opacity = '1'
  darkScreen.style.zIndex = '950'
  darkScreen.style.transform = 'scale(1)'
  document.body.style.overflow = 'hidden'
}

function hideDarkScreen() {
  darkScreen.style.opacity = '0'
  document.body.style.overflow = 'visible'
  setTimeout(scale, 500)

  function scale() {
    darkScreen.style.transform = 'scale(0)'
  }
}

function showSidebar() {
  sidebarPanel.style.transform = 'translateX(0)'
  showDarkScreen()
}

function hideSidebar() {
  sidebarPanel.style.transform = 'translateX(-100%)'
  hideDarkScreen()
}