$("#Menu a").on("click", function () {
    var position = $(this)
    .parent().position();
    var width = $(this)
    .parent().width();
    $("#Menu .liquid1").css({ opacity: 1, left: +position.left, width: width });
    });
    
    var myVar;
    function myFunction() {
    myVar = setTimeout(showPage, 5000);
    }
    
    function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
    }