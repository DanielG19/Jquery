$(() => {
    //only divs with poem-stanza class
    $('div.poem-stanza').addClass('highlight');
    //only author class
    $('.author').addClass('highlight');
    //Chaining, only paragraph1 id
    $('#paragraph1').css('color','crimson').css('background-color','yellow').slideUp(2000).slideDown(2000);
   });
   
   //with javascript
   /*
   window.onload = function() {
    const divs = document.getElementsByTagName('div');
    const hasClass = (elem, cls) =>
    new RegExp(` ${cls} `).test(` ${elem.className} `);
    for (let div of divs) {
    if (hasClass(div, 'poem-stanza') && !hasClass(div, 'highlight')) {
    div.className += ' highlight';
    }
    }
   };*/