$(function() {
    $('.slider').slick({
        centerMode: true,        
        slidesToShow: 3,          
        slidesToScroll: 1,        
        infinite: true,           
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,        
                    centerPadding: '40px',  
                    arrows: true          
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,       
                    centerPadding: '20px',  
                    arrows: true         
                }
            }
        ]
    });
});
