    //footer click start
    $(".fotterlist1 h3").click(function(){
        $(".fotterlist1 h3").removeClass("active");
        $(this).addClass("active");
        $(".click").removeClass("active");
        $("#" + $(this).attr("data-click")).addClass("active");
        });
    //footer click end

    function toggleHide(elementId){
        const element = document.getElementById(elementId);
    
        element.classList.toggle("hide-lists");
    }
    
    function toggleHideItems(elementId){
        const element = document.getElementById(elementId);
    
        element.classList.toggle("show-list-items");
        element.classList.toggle("hide-list-items");
    }