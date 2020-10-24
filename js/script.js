

function onClickTab(){
    document.getElementById('programming').addEventListener('click', ()=>{
        openCourseTab(event, 'Programming')
    })
    
    document.getElementById('business').addEventListener('click', ()=>{
        openCourseTab(event, 'Business')
    })
    
    document.getElementById('artificial').addEventListener('click', ()=>{
        openCourseTab(event, 'Artificial')
    })
    
    document.getElementById('cloud').addEventListener('click', ()=>{
        openCourseTab(event, 'Cloud')
    })
    
    
    document.getElementById('autonomous').addEventListener('click', ()=>{
        openCourseTab(event, 'Autonomous')
    })
    
    document.getElementById('design').addEventListener('click', ()=>{
        openCourseTab(event, 'Design');
    })
    
    document.getElementById('photography').addEventListener('click', ()=>{
        openCourseTab(event, 'Photography');
    })
    
    document.getElementById('development').addEventListener('click', ()=>{
        openCourseTab(event, 'Development');
    })


}


onClickTab();


function openCourseTab(event, courseTab){

   let i, courselink, coursetab;
   
   coursetab = document.getElementsByClassName('tabcontent');

   for(i = 0; i < coursetab.length; i++){
       coursetab[i].classList.remove('active_tab');
   }

    courselink = document.getElementsByClassName('courses_link');
    for(i = 0; i < courselink.length; i++){
       //  courselink[i].className = courselink[i].className.replace(" active", "");
       courselink[i].classList.remove('active')
    }

    document.getElementById(courseTab).classList.add('active_tab');
   // event.currentTarget.className += " active";
   event.currentTarget.classList.add('active')
    console.log(event.currentTarget.className)
}

$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });


  const navSlide = ()=>{
      const burger = document.querySelector('.burger');
      const nav = document.querySelector('.list');

       const navLinks = document.querySelectorAll('.nav-links li');

      burger.addEventListener('click',()=>{
          nav.classList.toggle('nav-active')

          navLinks.forEach((link, index)=>{
              if(link.style.animation){
                  link.style.animation = '';
              }else{
                  link.style.animation = `navLinkFade 0.2s ease forwards ${index/7 + 0.3}s`
              }
          })

          burger.classList.toggle('toggle');
      })

  }

  navSlide();