function navToPage(destination){
    // var url = '/main';
    // switch(destination) {
    //     case "poomsae":
    //         break;
    //     case "sparring":
    //         break;
    //     case "references":
    //         break;
    //     case "about":
    //         break;
    // }
    var url = '/main/' + destination + '.html';
    location.href = url;
};