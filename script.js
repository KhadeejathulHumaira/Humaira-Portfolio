const sections = document.querySelectorAll('.section')
const control=document.querySelectorAll('.control')


control.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        // Grab the element that has active-btn at instance
        //then it is removed from that element.
        const currBtn=document.querySelector('.active-btn')
        currBtn.classList.remove('active-btn')
        // This will remove the active class of current section
        const activeSection=document.querySelector('.active')
        activeSection.classList.remove('active')
        let value=e.currentTarget.classList
        value.add('active-btn')
        document.getElementById(btn.dataset.id).classList.add('active')
        
        // if(!value.contains('active-btn')){
        //     value.add('active-btn')
        //     console.log(e.currentTarget.dataset.id)
        //    document.getElementById(btn.dataset.id).classList.add('active')  
        // }
    })
    
})