
//choose one html to be the mail one
//put the jquert script ar html
//conect this script


portfolioBtn = $('portfolioBtn')
aboutMes = $('#aboutMe')
contactBtn = $('#contactBtn')

$(document).ready(function(){

    $('#portfolioBtn').click(function(){
        
        $('#about-me-holder').hide()
        $('#form-holder').hide()
        $('.port-card').show()
        $('#head-line-content').text('PROJECTS')
        
        

     })
     
     
     $('#aboutMe').click(function(){
        $('#about-me-holder').show()
        $('#form-holder').hide()
        $('.port-card').hide()
        $('#head-line-content').text('ABOUT ME')
        $('#form-holder').append()
        //$('.port-card').show()

      })
     
      
      $('#contactBtn').click(function(){
        $('#form-holder').show()
        $('#about-me-holder').hide()
        $('.port-card').hide()
        $('#head-line-content').text('CONTACT ME')
      })

})


// portfolio, about me and contact gona be in one html page like a social media feed.
// my id card at the left will be static
// the small cards at the right (portfoloi page) will be static with changing content (API)
// make a feture can bild a new project card into the html
// when we click on one of them, to cards of what we pushed will go up and the others down on the feed



 
