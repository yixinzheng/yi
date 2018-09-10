
function hcbanner(imgaclassname,imgspanclassname,left,right,speed) {
    var imgid=0;
    var imga=$(imgaclassname);
    var imgspan=$(imgspanclassname);
    var lenghtimg=imga.length;
    // var speed=3000;
    //console.log(lenghtimg);
    imga.css({"z-index":-1,opacity:0});
    imga.eq(0).css({"z-index":2,opacity:1});
    imgspan.eq(0).addClass("nuw-hover");

    //圆点轮播
    imgspan.click(function(){
        var spanid=$(this).index();
        imgspan.eq(imgid).removeClass("nuw-hover");
        imgspan.eq(spanid).addClass("nuw-hover");
        imga.eq(imgid).css({"z-index":-1,opacity:0});
        imga.eq(spanid).css({"z-index":2,opacity:1});
        imgid=spanid;
        //console.log(spanid);
    })


    //左右轮播
    $(left).click(function(){
        var imgidleft=imgid-1;
        // console.log(imgidright);
        if(imgidleft<0){
            imgidleft=lenghtimg-1;
        }
        imgspan.eq(imgid).removeClass("nuw-hover");
        imgspan.eq(imgidleft).addClass("nuw-hover");
        imga.eq(imgid).css({"z-index":-1,opacity:0});
        imga.eq(imgidleft).css({"z-index":2,opacity:1});
        imgid=imgidleft;
    })
    $(right).click(function(){
        var imgidright=imgid+1;
        // console.log(imgidright);
        if(imgidright>=lenghtimg){
            imgidright=0;
        }
        imgspan.eq(imgid).removeClass("nuw-hover");
        imgspan.eq(imgidright).addClass("nuw-hover");
        imga.eq(imgid).css({"z-index":-1,opacity:0});
        imga.eq(imgidright).css({"z-index":2,opacity:1});
        imgid=imgidright;
    })
    //自动轮播
    setInterval(autogo,speed);
    function autogo(){
        var autoid=imgid+1;
        if(autoid<0){
            autoid=lenghtimg-1;
        }
        if(autoid>=lenghtimg){
            autoid=0;
        }
        imgspan.eq(imgid).removeClass("nuw-hover");
        imgspan.eq(autoid).addClass("nuw-hover");
        imga.eq(imgid).css({"z-index":-1,opacity:0});
        imga.eq(autoid).css({"z-index":2,opacity:1});
        imgid=autoid;

    }
}
	




	
