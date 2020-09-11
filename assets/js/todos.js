// Check off specific todos by clicking

// $("li").click(function() {  }); // it only works for
    // pre-existing elements not for dynamically created elements
    // use on click for dynamically created elements

$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// click on X to delete a todo

$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-edit").click(function() {
    $("input[type='text']").fadeToggle();
});
