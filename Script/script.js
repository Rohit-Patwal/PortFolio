

        function toggleNavbar() {
            var navItems = document.querySelector('.nav-items');
            
            if (navItems.style.top === "-100vh" || navItems.style.top === "") {
                navItems.style.top = 0;
            } else {
                navItems.style.top = "-100vh";
            }
        }
        function hideNavbar() {
            var navItems = document.querySelector('.nav-items');
            navItems.style.top = "-100vh";
        }
        
        window.addEventListener('scroll', function () {
            if (window.innerWidth = 900) {
                hideNavbar();
            }
        });
    


// =============================theme button===========================
const toggle_btn = document.querySelector('#check-btn');

toggle_btn.addEventListener('change', () =>{
    if(toggle_btn.checked){
        document.body.classList.add('dark-mode');
    }else{
        document.body.classList.remove('dark-mode');
    }

})





// =============================active navlink===========================

        const navLinkElm = document.querySelectorAll('.nav-links');
		const sectionElm = document.querySelectorAll('.section');

		let currentSection = '#home';
		window.addEventListener('scroll', () =>{
			sectionElm.forEach(sectionEl => {
				if(window.scrollY >= (sectionEl.offsetTop - 200)){
					currentSection = sectionEl.id;
				}
			})

			navLinkElm.forEach(navLinkEl => {
				if(navLinkEl.href.includes(currentSection)){
					document.querySelector('.active-nav').classList.remove('active-nav');
					navLinkEl.classList.add('active-nav');
				}
			})
		});






