{
    let dropDownBtn = document.querySelectorAll('.drop-down');
    if(dropDownBtn.length) {
        dropDownBtn.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                this.classList.toggle('_open');
                _slideToggle(this.nextElementSibling, 300);
            })
        })

        document.addEventListener('click', (e) => {
            if(!e.target.closest('.drop-down')) {
                dropDownBtn.forEach(btn => {
                    btn.classList.remove('_open');
                    _slideUp(btn.nextElementSibling, 300);
                })
            }
        })
    }
}