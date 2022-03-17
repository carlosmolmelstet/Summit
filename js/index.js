var speakers = [
    {
        id: "tooltip-Albert-Tate",
        text: '<p>Fundador e Pastor da Fellowship Church; Apresentador do Albert Tate podcast.<span> Tema:</span> Encontre seu ritmo.  </p>'
    },
    {
        id: "tooltip-bianca-juarez-olthoff",
        text: '<p>Pastora na The Father’s House; Fundadora e presidente da In The Name of Love; Autora best-seller.<span> Tema:</span> A escolha de liderar.   </p>'
    },
    {
        id: "tooltip-Craig-Groeschel",
        text:  '<p>Fundador e pastor títular da Life.Church; Autor best-seller; Champion do Summit. <span> Tema:</span>  Expandindo sua capacidade de liderança.  </p>' 
    },
    {
        id: "tooltip-Francesca-Gino",
        text: '<p>Cientista social e comportamental; Especialista em liderança e professora da Harvard Business Scholl; Autora best seller.<span> Tema:</span> Talento rebelde.  </p>'
    },
    {
        id: "tooltip-Ibukun-Awosika",
        text: '<p>Fundadora e CEO do “The Chair Centre Group”; Ex-presidente do First Bank Nigeria Limited.<span> Tema:</span> O poder da escolha do líder.  </p>' 
    },
    {
        id: "tooltip-Jamie-Kern-Lima",
        text:  '<p>Fundadora da IT Cosmetics; Autora best-seller; Ex-CEO da L’Oréall.<span> Tema:</span> Resiliência para empreender.   </p>' 
    },
    {
        id: "tooltip-Juliet-Funt",
        text:  '<p>CEO e Fundadora da White Space at work; Autora.<span> Tema:</span> Um minuto para pensar.  </p>'
    },
    {
        id: "tooltip-Malcolm-Gladwell",
        text: '<p>Redator da revista The New Yorker; Ex-repórter de Ciência e Medicina do The Washington Post; Autor best-seller.<span> Tema:</span> A urgência de exercer a liderança.  </p>' 
    },
    {
        id: "tooltip-michelle-poler",
        text: '<p>Fundadora da Hello Fears; Empreendedora social; Autora.<span> Tema:</span> O ritmo da liderança.  </p>' 
    },
    {
        id: "tooltip-Richard-Montanez",
        text: '<p>Criador do Flamin’Hot Cheetos; Ex-vice-presidente da PepsiCo; Filantropo e autor.<span> Tema:</span> Inovação e impacto.  </p>' 
    },
    {
        id: "tooltip-Rick-Wilkerson",
        text: '<p>Co-fundador da Conferência VOUS de liderança; Pastor da VOUS Church; Autor.<span> Tema:</span> A labuta da liderança.  </p>'
    }, {
        id: "tooltip-shola-richards",
        text: '<p>Fundador e CEO do Go Together Global; Especialista em civilidade no ambiente de trabalho; autor best-seller.<span> Tema:</span> Civilidade e liderança.  </p>'
    }
]

$(document).ready(function () {
    $(".testimonial-carousel").slick({
        infinite: !0,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: !1,
        arrows: true,
        prevArrow: $(".testimonial-carousel-controls .prev"),
        nextArrow: $(".testimonial-carousel-controls .next"),
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    for(var item of speakers) {
        $(`#${item.id}`).tooltipster({
            content: item.text,
            animation: 'grow',
            contentAsHTML: true,
            delay: 116,
            theme: 'tooltipster-summit',
            touchDevices: false,
            trigger: 'hover'
        });
    }

    $( ".sidebar-nav a" ).click(function() {
        $( ".sidebar-nav" ).removeClass("active")
      });

      $(".wrapper-sidebar").hover(function(){
        $(".sidebar-nav").addClass("active")
        }, function(){
        $(".sidebar-nav").removeClass("active")
      });

});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var navbar = $("#navbar")
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.addClass("scroll")
  } else {
    navbar.removeClass("scroll")
  }
}



