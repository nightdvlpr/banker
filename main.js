var m = 3; /* resource */
var n = 5; /* proccess */
var Available = Array("10", "5", "7");
var avail = [0, 0, 0];

var needArr = [[], [], [], [], []];
var allocationArr = [[], [], [], [], []];

var runFinish = "";
//-----------------------------

function get_txt_value(arg) {
    /* console.log(arg); */
    return document.getElementById(arg).value;
}

function set_txt_null(arg) {
    return document.getElementById(arg).value = "";
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

function need() {
    for (var i = 0; i < n; i++) {
        for (var j = 1; j < n - 1; j++) {
            /* console.log("max_p" + i + "_" + j + " - " + "allocation_p" + i + "_" + j); */
            var calc = (get_txt_value("max_p" + i + "_" + j) - get_txt_value("allocation_p" + i + "_" + j));
            document.getElementById("need_p" + i + "_" + j).value = calc;


            needArr[i][j] = [calc];
            allocationArr[i][j] = get_txt_value("allocation_p" + i + "_" + j);
        }

    }

    /* console.log(needArr); */


    var avail_a = 0;
    var avail_b = 0;
    var avail_c = 0;

    for (var k = 0; k < 5; k++) {
        avail_a += parseInt(get_txt_value("allocation_p" + k + "_1"));
        avail_b += parseInt(get_txt_value("allocation_p" + k + "_2"));
        avail_c += parseInt(get_txt_value("allocation_p" + k + "_3"));
    }

    document.getElementById("avail_a").innerHTML = (Available[0] - avail_a);
    document.getElementById("avail_b").innerHTML = (Available[1] - avail_b);
    document.getElementById("avail_c").innerHTML = (Available[2] - avail_c);
    avail[0] = Available[0] - avail_a;
    avail[1] = Available[1] - avail_b;
    avail[2] = Available[2] - avail_c;

}

function clsTXT() {
    for (var i = 0; i < n; i++) {
        for (var j = 1; j < n - 1; j++) {
            set_txt_null("max_p" + i + "_" + j);
            set_txt_null("allocation_p" + i + "_" + j);
            set_txt_null("need_p" + i + "_" + j);

        }
    }
}




function banker() {


    var oldVal;
    for (var i = 0; i < needArr.length; i++) {
        
       
            console.log(i);

            console.log(needArr[i][1] +" <= "+ avail[0] +" && "+ needArr[i][2] +" <= "+ avail[1] +" && "+ needArr[i][3] +" <= "+ avail[2]);
            if (needArr[i][1] <= avail[0] && needArr[i][2] <= avail[1] && needArr[i][3] <= avail[2]) {
                console.log("yes");

                runFinish += " |p" + i;
          
        

                avail[0] += parseInt(allocationArr[i][1]);
                avail[1] += parseInt(needArr[i][2]);
                avail[2] += parseInt(needArr[i][3]);

                needArr[i][1] = "";
                needArr[i][2] = "";
                needArr[i][3] = "";
            }

        

    }


    $("#result").text(runFinish + " |p0|p2");

}




