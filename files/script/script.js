
//choose one html to be the mail one
//put the jquert script ar html
//conect this script

//portfolioBtn = $('portfolioBtn')
//portfolioBtn = $('portfolioBtn')
//aboutMes = $('#aboutMe')
//contactBtn = $('#contactBtn')

$(document).ready(function(){


  $('#homeBtn').click(function(){
    $('#home').show()
    $('#content').hide()
   $('#head-line-content').text('PROJECTS')
   //const btn = '#homeBtn'
   ChangeBtnActivity('#homeBtn')
 })

 $('#portfolioBtn').click(function(){
  $('#content').show()
  $('#home').hide()
  $('#about-me-holder').hide()
  $('#form-holder').hide()
  $('.port-card').show()
  $('#head-line-content').text('PROJECTS')
   //const btn = '#portfolioBtn'
   ChangeBtnActivity('#portfolioBtn')
})


$('#aboutMe').click(function(){
 $('#content').show()
 $('#home').hide()
 $('#about-me-holder').show()
  $('#form-holder').hide()
  $('.port-card').hide()
  $('#head-line-content').text('ABOUT ME')
  $('#form-holder').append()
 //const btn = '#portfolioBtn'
 ChangeBtnActivity('#aboutMe')

})


$('#contactBtn').click(function(){
  $('#content').show()
  $('#home').hide()
  $('#form-holder').show()
  $('#about-me-holder').hide()
  $('.port-card').hide()
  $('#head-line-content').text('CONTACT ME')
  //const btn = '#contactBtn'
 ChangeBtnActivity('#contactBtn')
})






function ChangeBtnActivity(pressedBtn){
  const BtnArr = ['#homeBtn', '#portfolioBtn', '#aboutMe', '#contactBtn']
  for (let i = 0; i < BtnArr.length; i++) {
    const button = BtnArr[i];
    if(button === pressedBtn){
      $(button).addClass('active')
      console.log("tttt")
    } else  {
      $(button).removeClass('active')
      console.log("tttt2")
    }
  }
}



   

})


// portfolio, about me and contact gona be in one html page like a social media feed.
// my id card at the left will be static
// the small cards at the right (portfoloi page) will be static with changing content (API)
// make a feture can bild a new project card into the html
// when we click on one of them, to cards of what we pushed will go up and the others down on the feed



 
