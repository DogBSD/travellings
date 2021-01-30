function travelling() {
    var url = new Array();

    url[0] = "https://www.wygdbb.com";
    url[1] = "https://shumeipai.nxez.com";
    url[2] = "https://www.lxx1.com";
    url[3] = "https://mikuq.com";
    url[4] = "http://www.pengzhihui.xyz";
    url[5] = "http://catbsd.com";



    //修正概率
    url[6] = "https://github.com/DogBSD/travellings";


    var ints = parseInt(Math.random() * (url.length));
    window.location = url[ints];
}
