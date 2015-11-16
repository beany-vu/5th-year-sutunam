var rsr = Raphael(0,0,1920, 1080);
//=============transform from cresus to durance===============
// background
//var rect_c = rsr.rect(0, 0, 1920, 1080);
//rect_c.attr({fill: '#191919', 'stroke-awidth': '0', 'stroke-opacity': '1'}).data('id', 'rect_c');
//rect_c.animate({fill: '#B61F6A', 'stroke-width': '0'}, 1500);

//
var path_d = rsr.path("M 971.9,497.7 913,598.2 977,498.9 z");
path_d.attr({
    fill: 'none',
    stroke: '#F6F5F5',
    "stroke-width": '0.5',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_d');
path_d.animate({opacity:0}, 500);
//path_d.animate({x: '-4.2', y: '1.2', w:1929.7,h:1082.2}, 1500);
//var rect_d = rsr.rect(-4.2, 1.2, 1929.7, 1082.2);
//rect_d.attr({x: '-4.2', y: '1.2', fill: '#EE5789', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'rect_d');

var path_e = rsr.path("M 974.2,500.9 1085.4,468.2 973.1,496.2 z");
path_e.attr({fill: '#F3E2E4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_e');
//var path_e = rsr.path("M 1271.2,394.9 1277.4,393.3 1342.6,584.3 z");
//path_e.attr({fill: '#D8AC8A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_e');
path_e.animate({path: 'M 1271.2,394.9 1277.4,393.3 1342.6,584.3', fill: '#D8AC8A'}, 1500);

var path_f = rsr.path("M 974.8,495.8 958.5,450.9 969.8,497.9 z");
path_f.attr({fill: '#FFFFFF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_f');
//var path_f = rsr.path("M 1367.6,391.7 1313.9,566.3 1371.2,395.1 z");
//path_f.attr({fill: '#D8AC8A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_f');
path_f.animate({path: 'M 1367.6,391.7 1313.9,566.3 1371.2,395.1 z', fill: '#D8AC8A'}, 1500);

var path_g = rsr.path("M 899.5,739.3 965.9,679.7 897.7,639.2 z");
path_g.attr({ opacity: '0.3',fill: 'none',stroke: '#CCA46A',"stroke-width": '0.38',"stroke-miterlimit": '10','stroke-opacity': '1'
}).data('id', 'path_g');
//var path_g = rsr.path("M 1358.1,387.1 1361.7,389.4 1308.2,577 z");
//path_g.attr({fill: '#E7C94C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_g');
path_g.animate({path: 'M 1358.1,387.1 1361.7,389.4 1308.2,577 z', fill: '#E7C94C', opacity:1}, 1500);

var path_h = rsr.path("M 995.4,659 968.7,650 1061.7,632 z");
path_h.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.11',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_h');
//var path_h = rsr.path("M 1343.2,587.7 1262,384.9 1257.7,386.6 z");
//path_h.attr({fill: '#E7C94C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_h');
path_h.animate({path: 'M 1343.2,587.7 1262,384.9 1257.7,386.6 z', fill: '#E7C94C','stroke-width': '0', opacity:1}, 1500);

var path_i = rsr.path("M 1087.3,606.8 1083,633.7 1109.4,622.8 z");
path_i.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.6',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_i');
//var path_i = rsr.path("M 1323.4,366 1329.6,365.9 1321.2,621.6 z");
//path_i.attr({fill: '#E7C94C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_i');
path_i.animate({path:'M 1323.4,366 1329.6,365.9 1321.2,621.6 z',fill: '#E7C94C', 'stroke-width': '0', opacity:1}, 1500);

var path_j = rsr.path("M 1225.6,678.4 1255.1,720 1261.3,700.7 z");
path_j.attr({
    opacity: '0.7',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.5',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_j');
//var path_j = rsr.path("M 1324.6,590 1308.8,347.9 1305.3,349.5 z");
//path_j.attr({fill: '#D8AC8A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_j');
path_j.animate({path: 'M 1324.6,590 1308.8,347.9 1305.3,349.5 z', fill: '#D8AC8A', 'stroke-width': '0', opacity:1}, 1500);

var path_k = rsr.path("M 1194.8,389.7 1311.1,309.2 1174.6,336 z");
path_k.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.45',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_k');
//var path_k = rsr.path("M 1121,480.6 1098.7,628.2 1145.3,628.2 z");
//path_k.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_k');
path_k.animate({path:'M 1121,480.6 1098.7,628.2 1145.3,628.2 z', fill: '#E5DADC', 'stroke-width': '0', opacity:1}, 1500);

var path_l = rsr.path("M 871.4,691 899.5,739.3 823.6,725.1 z");
path_l.attr({
    opacity: '0.8',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-miterlimit": '10',
    'stroke-width': '0',
    'stroke-opacity': '1'
}).data('id', 'path_l');
//var path_l = rsr.path("M 1375.9,629.7 1412.3,629.7 1400.6,495 z");
//path_l.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_l');
path_l.animate({path: 'M 1375.9,629.7 1412.3,629.7 1400.6,495 z', fill: '#E5DADC', 'stroke-width': '0', opacity:1}, 1500);

var path_m = rsr.path("M 878.2,653.6 871.4,691 840.5,682.4 z");
path_m.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.4',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_m');
//var path_m = rsr.path("M 1269,544.5 1379.1,642.1 1375.8,541.9 z");
//path_m.attr({fill: '#9E6641', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_m');
path_m.animate({path: 'M 1269,544.5 1379.1,642.1 1375.8,541.9 z', fill: '#9E6641', 'stroke-width': '0',opacity:1}, 1500);

var path_n = rsr.path("M 844.1,626.6 838.6,642.1 853.5,629.5 z");
path_n.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.78',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_n');
//var path_n = rsr.path("M 1375.8,541.9 1361.2,560.7 1379.1,642.1 z");
//path_n.attr({fill: '#514032', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_n');
path_n.animate({path: 'M 1375.8,541.9 1361.2,560.7 1379.1,642.1 z', fill: '#514032', 'stroke-width': '0', opacity:1}, 1500);



var path_o = rsr.path("M 838.4,642.3 863.2,669.8 821.2,701.5 z");
path_o.attr({
    opacity: '0.7',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.8',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_o');
//var path_o = rsr.path("M 1289.2,505 1349.5,496 1347.8,503.1 z");
//path_o.attr({fill: '#9E6641', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_o');
path_o.animate({path:'M 1289.2,505 1349.5,496 1347.8,503.1 z', fill: '#9E6641', 'stroke-width': '0', opacity:1}, 1500);


var path_p = rsr.path("M 899.5,739.3 835.3,898.8 823.6,725.1 z");
path_p.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.34',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_p');
//var path_p = rsr.path("M 1321.9,500.5 1288.8,499.2 1289.2,505 z");
//path_p.attr({fill: '#514032', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_p');
path_p.animate({path: 'M 1321.9,500.5 1288.8,499.2 1289.2,505 z', fill: '#514032', 'stroke-width': '0', opacity:1}, 1500);

var path_q = rsr.path("M 952.7,739.4 832.2,773.8 922.5,792.2 z");
path_q.attr({
    opacity: '0.7',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.8',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_q');
//var path_q = rsr.path("M 1335.5,525.3 1350.2,534.1 1339.3,503.1 z");
//path_q.attr({fill: '#5C351F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_q');
path_q.animate({path:'M 1335.5,525.3 1350.2,534.1 1339.3,503.1 z', fill: '#5C351F', 'stroke-width': '0', opacity:1}, 1500);


var path_r = rsr.path("M 849.8,599.8 843.7,627.6 840,587.9 z");
path_r.attr({
    opacity: '0.7',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.7',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_r');
//var path_r = rsr.path("M 1303.7,532.4 1375.8,541.9 1350.2,534.1 z");
//path_r.attr({fill: '#7B4830', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_r');
path_r.animate({path: 'M 1303.7,532.4 1375.8,541.9 1350.2,534.1 z', fill: '#7B4830', 'stroke-width': '0', opacity:1}, 1500);

var path_s = rsr.path("M 840,587.2 843,626.3 832.5,618.8 z");
path_s.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.2',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_s');
//var path_s = rsr.path("M 1375.8,541.9 1269,544.5 1303.7,532.4 z");
//path_s.attr({fill: '#6F462C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_s');
path_s.animate({path: 'M 1375.8,541.9 1269,544.5 1303.7,532.4 z', fill: '#6F462C', 'stroke-width': '0', opacity:1}, 1500);

var path_t = rsr.path("M 965.9,679.7 986,646.9 1020.2,640.6 z");
path_t.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.22',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_t');
//var path_t = rsr.path("M 1303.7,532.4 1350.2,534.1 1335.5,525.3 z");
//path_t.attr({fill: '#4B3322', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_t');
path_t.animate({path: 'M 1303.7,532.4 1350.2,534.1 1335.5,525.3 z',fill: '#4B3322', 'stroke-width': '0', opacity:1}, 1500);

var path_u = rsr.path("M 861.4,839.9 769.1,834.9 837.4,955.9 z");
path_u.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#F2C68E',
    "stroke-width": '0.4',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_u');
//var path_u = rsr.path("M 1304,504.5 1335.5,525.3 1303.7,532.4 z");
//path_u.attr({fill: '#7B4830', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_u');
path_u.animate({path: 'M 1304,504.5 1335.5,525.3 1303.7,532.4 z', fill: '#7B4830', 'stroke-width': '0', opacity:1}, 1500);

var path_v = rsr.path("M 965.9,679.7 1019.9,640.8 1003.7,700.6 z");
path_v.attr({
    opacity: '0.7',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.7',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_v');
//var path_v = rsr.path("M 1346.6,612.5 1266.8,642.1 1269,544.5 z");
//path_v.attr({fill: '#5C351F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_v');
path_v.animate({path: 'M 1346.6,612.5 1266.8,642.1 1269,544.5 z', fill: '#5C351F', 'stroke-width': '0', opacity:1}, 1500);


var path_w = rsr.path("M 871.4,691 832.2,773.8 840.5,682.4 z");
path_w.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.3',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_w');
//var path_w = rsr.path("M 1304,504.5 1335.5,525.3 1339.3,503.1 z");
//path_w.attr({fill: '#885E43', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_w');
path_w.animate({path: 'M 1304,504.5 1335.5,525.3 1339.3,503.1 z', fill: '#885E43', 'stroke-width': '0', opacity:1})

var path_x = rsr.path("M 1135.4,789.9 1075.7,801.4 1083.9,779 z");
path_x.attr({fill: '#EBC99D', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_x');
//var path_x = rsr.path("M 1109.3,565.1 1070.7,567.9 1125.5,574.5 z");
//path_x.attr({fill: '#F9F9FA', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_x');
path_x.animate({path: 'M 1109.3,565.1 1070.7,567.9 1125.5,574.5 z',fill: '#F9F9FA', 'stroke-width': '0'}, 1500);

var path_y = rsr.path("M 1273.1,249.9 1348.4,263.4 1310.1,218.6 z");
path_y.attr({
    opacity: '0.7',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.7',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_y');
//var path_y = rsr.path("M 1443.6,629.7 1449.2,563.9 1463.9,629.7 z");
//path_y.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_y');
path_y.animate({path: 'M 1443.6,629.7 1449.2,563.9 1463.9,629.7 z', fill: '#E5DADC', 'stroke-width': '0'}, 1500);

var path_z = rsr.path("M 244.4,1025.9 548.3,866.4 706.4,998.9 z");
path_z.attr({fill: '#27242B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_z');
//var path_z = rsr.path("M 1011.1,591.7 1018.9,603.1 1002.5,603.1 z");
//path_z.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_z');
path_z.animate({path: 'M 1011.1,591.7 1018.9,603.1 1002.5,603.1 z', fill: '#E5DADC', 'stroke-width': '0'}, 1500);

var path_aa = rsr.path("M 789.9,232.2 866.7,176.9 765.7,266.4 z");
path_aa.attr({
    opacity: '0.7',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.3',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_aa');
//var path_aa = rsr.path("M 1125.5,574.5 1068.6,580.9 1124.9,619.5 z");
//path_aa.attr({fill: '#F9F9FA', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aa');
path_aa.animate({path:"M 1125.5,574.5 1068.6,580.9 1124.9,619.5 z", fill: '#F9F9FA', 'stroke-width': '0', opacity:1}, 1500);

var path_ab = rsr.path("M 1072.8,394.7 983.8,379 987.8,385.1 z");
path_ab.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.78',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_ab');
//var path_ab = rsr.path("M 1123,648.1 1089,633.5 1124.9,619.5 z");
//path_ab.attr({fill: '#F4F4F4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ab');
path_ab.animate({path: "M 1123,648.1 1089,633.5 1124.9,619.5 z",fill: '#F4F4F4', 'stroke-width': '0', opacity:1}, 1500);

var path_ac = rsr.path("M 954.6,665.4 965.9,679.7 878.2,653.6 z");
path_ac.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.3',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_ac');
//var path_ac = rsr.path("M 1176.3,362 1175.5,353.1 1179.3,358.6 z");
//path_ac.attr({fill: '#F7F192', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ac');
path_ac.animate({path: 'M 1176.3,362 1175.5,353.1 1179.3,358.6 z', fill: '#F7F192', 'stroke-width': '0', opacity:1}, 1500);

var path_ad = rsr.path("M 1086.3,398.2 1054.4,390.4 1136.1,449.7 z");
path_ad.attr({fill: '#AA814E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ad');
//var path_ad = rsr.path("M 1022.9,624.2 999.2,624.2 1011.6,605 z");
//path_ad.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ad');
path_ad.animate({path: 'M 1086.3,398.2 1054.4,390.4 1136.1,449.7 z', fill: '#E5DADC', 'stroke-width': '0'}, 1500);


var path_ae = rsr.path("M 859,453.7 886.1,422.4 915.6,408 z");
path_ae.attr({
    opacity: '0.7',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.4',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_ae');
//var path_ae = rsr.path("M 1168.9,673.2 1185.6,598 1138.2,468.4 z");
//path_ae.attr({fill: '#9A3B64', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ae');
path_ae.animate({path:'M 1168.9,673.2 1185.6,598 1138.2,468.4 z', fill: '#9A3B64', 'stroke-width': '0', opacity:1}, 1500);

var path_af = rsr.path("M 922.5,792.2 823.6,725.1 840.5,682.4 z");
path_af.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.3',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_af');
//var path_af = rsr.path("M 1176,425.7 1183.8,362 1191.8,417.3 z");
//path_af.attr({fill: '#F5EB16', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_af');
path_af.animate({path: 'M 1176,425.7 1183.8,362 1191.8,417.3 z',fill: '#F5EB16', 'stroke-width': '0', opacity:1 }, 1500);

var path_ag = rsr.path("M 845.3,529.9 859,453.7 831.8,528.3 z");
path_ag.attr({
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.2',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_ag');
//var path_ag = rsr.path("M 1111.1,609.9 1073.8,584.5 1074.2,653.7 z");
//path_ag.attr({fill: '#F4F4F4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ag');
path_ag.animate({path: 'M 1111.1,609.9 1073.8,584.5 1074.2,653.7 z', fill: '#F4F4F4', 'stroke-width': '0', opacity: 1}, 1500);

var path_ah = rsr.path("M 1011.5,914.4 1022.7,924 1030.1,912.6 z");
path_ah.attr({fill: '#7D5A32', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ah');
//var path_ah = rsr.path("M 1069,516.5 1073.5,552.5 1060.5,542.7 z");
//path_ah.attr({fill: '#F6C813', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ah');
path_ah.animate({path: "M 1069,516.5 1073.5,552.5 1060.5,542.7 z", fill: '#F6C813', 'stroke-width': '0',opacity:1}, 1500);

var path_ai = rsr.path("M 965.4,492.6 979.2,490.4 982.7,503.3 z");
path_ai.attr({fill: '#CDA56B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ai');
//var path_ai = rsr.path("M 1123,648.1 1074.2,653.7 1089,633.5 z");
//path_ai.attr({fill: '#F1D5E4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ai');
path_ai.animate({path:'M 1123,648.1 1074.2,653.7 1089,633.5 z', fill: '#F1D5E4', 'stroke-width': '0'}, 1500);

var path_aj = rsr.path("M 878.2,653.6 965.9,679.7 952.7,739.4 z");
path_aj.attr({fill: '#AB814F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aj');
//var path_aj = rsr.path("M 1170.5,476.9 1185.6,598 1221.1,475.8 z");
//path_aj.attr({fill: '#ED4F81', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aj');
path_aj.animate({path:'M 1170.5,476.9 1185.6,598 1221.1,475.8 z', fill: '#ED4F81', 'stroke-width': '0'}, 1500);

var path_ak = rsr.path("M 954.6,665.4 948.6,717.6 899.5,739.3 z");
path_ak.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.25',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_ak');
//var path_ak = rsr.path("M 1000,614.7 1011.6,596.7 1022,614.7 z");
//path_ak.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ak');
path_ak.animate({path:"M 1000,614.7 1011.6,596.7 1022,614.7 z", fill: '#E5DADC', 'stroke-width': '0', opacity:1}, 1500);


var path_al = rsr.path("M 1159.5,435.1 1139.2,416.3 1136.1,449.7 z");
path_al.attr({
    opacity: '0.7',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.78',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_al');
//var path_al = rsr.path("M 1170.5,476.9 1138.2,468.4 1213.8,450.1 z");
//path_al.attr({fill: '#D8417D', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_al');
path_al.animate({path: 'M 1170.5,476.9 1138.2,468.4 1213.8,450.1 z', fill: '#D8417D', 'stroke-width': '0'}, 1500);

var path_am = rsr.path("M 1124.1,328.9 1105.3,303.1 1144.9,292.5 z");
path_am.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.3',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_am');
//var path_am = rsr.path("M 1168.9,673.2 1154,573.8 1136.3,668.3 z");
//path_am.attr({fill: '#CA4178', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_am');
path_am.animate({path: "M 1168.9,673.2 1154,573.8 1136.3,668.3 z", fill: '#CA4178', 'stroke-width': '0'}, 1500);

var path_an = rsr.path("M 840,587.2 852.6,582.3 867.4,621 z");
path_an.attr({fill: '#5B4228', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_an');
//var path_an = rsr.path("M 1170.5,476.9 1185.6,598 1138.2,468.4 z");
//path_an.attr({fill: '#AE3C68', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_an');
path_an.animate({path:'M 1170.5,476.9 1185.6,598 1138.2,468.4 z', fill: '#AE3C68', 'stroke-width': 0}, 1500);

var path_ao = rsr.path("M 1107.9,558.9 1108.4,591 1140.6,537.6 z");
path_ao.attr({
    opacity: '0.7',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.8',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_ao');
//var path_ao = rsr.path("M 1025.3,645.4 1033.7,626 1074.2,653.7 z");
//path_ao.attr({fill: '#F1D5E4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ao');
path_ao.animate({path: 'M 1025.3,645.4 1033.7,626 1074.2,653.7 z',fill: '#F1D5E4', 'stroke-width': '0', opacity:1}, 1500);

var path_ap = rsr.path("M 831.8,528.3 852.6,582.3 845.3,529.9 z");
path_ap.attr({fill: '#CCA46A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ap');
//var path_ap = rsr.path("M 1401.6,497.9 1416,629.7 1404.2,629.7 z");
//path_ap.attr({fill: '#DBD0D3', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ap');
path_ap.animate({path: 'M 1401.6,497.9 1416,629.7 1404.2,629.7 z', fill: '#DBD0D3', 'stroke-width': '0'}, 1500);

var path_aq = rsr.path("M 1754.9,724.9 1656.1,1012.4 1458,760.9 z");
path_aq.attr({fill: '#27242B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aq');
//var path_aq = rsr.path("M 1213.8,450.1 1260.9,465.2 1221.1,475.8 z");
//path_aq.attr({fill: '#F26F8C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aq');
path_aq.animate({path: 'M 1213.8,450.1 1260.9,465.2 1221.1,475.8 z', fill: '#F26F8C', 'stroke-width': '0'}, 1500);

var path_ar = rsr.path("M 806.7,764.8 798.1,716.1 763.6,805.9 z");
path_ar.attr({fill: '#7D5A32', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ar');
//var path_ar = rsr.path("M 1025.2,575.1 1070.7,567.9 1033.5,562.1 z");
//path_ar.attr({fill: '#F4F4F4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ar');
path_ar.animate({path: 'M 1025.2,575.1 1070.7,567.9 1033.5,562.1 z', fill: '#F4F4F4', 'stroke-width': '0'}, 1500);

var path_as = rsr.path("M 880.6,362.6 881.5,326.9 889.1,351.1 z");
path_as.attr({fill: '#CDA56B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_as');
//var path_as = rsr.path("M 1033.7,626 1056.9,579.2 1073.8,584.5 z");
//path_as.attr({fill: '#F9F9FA', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_as');
path_as.animate({path: 'M 1033.7,626 1056.9,579.2 1073.8,584.5 z', fill: '#F9F9FA', 'stroke-width': '0'}, 1500);

var path_at = rsr.path("M 1231.3,282.7 1224.3,306.1 1273.1,249.9 z");
path_at.attr({
    opacity: '0.7',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.7',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_at');
//var path_at = rsr.path("M 1591.1,602 1608.8,681.9 1528.2,681.9 z");
//path_at.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_at');
path_at.animate({path:'M 1591.1,602 1608.8,681.9 1528.2,681.9 z', fill: '#E5DADC', 'stroke-width': '0', opacity: 1}, 1500);

var path_au = rsr.path("M 1177.1,509 1141.9,515.8 1148.9,496.8 z");
path_au.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.14',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_au');
//var path_au = rsr.path("M 891.4,299.2 889.6,317.1 880.8,326.4 z");
//path_au.attr({fill: '#762369', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_au');
path_au.animate({path: 'M 891.4,299.2 889.6,317.1 880.8,326.4 z', fill: '#762369', 'stroke-width': '0', opacity:1}, 1500);

var path_av = rsr.path("M 1132.2,443.9 1206.1,408.9 1120.1,372.2 z");
path_av.attr({
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.7',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_av');
//var path_av = rsr.path("M 289.2,660.6 342.7,563.1 357.7,660.6 z");
//path_av.attr({fill: '#DBD0D3', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_av');
path_av.animate({path:"M 289.2,660.6 342.7,563.1 357.7,660.6 z",fill: '#DBD0D3', 'stroke-width': '0'},1500);

var path_aw = rsr.path("M 1167.5,328.9 1117,321.8 1099,355.8 z");
path_aw.attr({
    opacity: '0.7',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '1.5',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_aw');
//var path_aw = rsr.path("M 958.6,629.7 973.4,494.9 915.2,629.7 z");
//path_aw.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aw');
path_aw.animate({path:"M 958.6,629.7 973.4,494.9 915.2,629.7 z",fill: '#E5DADC', 'stroke-width': '0'}, 1500);

var path_ax = rsr.path("M 914.8,402.1 987.8,385.1 915.6,408 z");
path_ax.attr({
    opacity: '0.7',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.6',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_ax');
//var path_ax = rsr.path("M 1073.8,584.5 1074.2,653.7 1033.7,626 z");
//path_ax.attr({fill: '#F9F9FA', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ax');
path_ax.animate({path:"M 1073.8,584.5 1074.2,653.7 1033.7,626 z",fill: '#F9F9FA', 'stroke-width': '0', opacity:1 }, 1500);

var path_ay = rsr.path("M 1311.1,309.2 1254.1,288.2 1348.4,263.4 z");
path_ay.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.4',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_ay');

//var path_ay = rsr.path("M 1229.5,676.8 1168.9,673.2 1185.6,598 z");
//path_ay.attr({fill: '#EF5489', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ay');
path_ay.animate({path: 'M 1229.5,676.8 1168.9,673.2 1185.6,598 z', fill: '#EF5489', 'stroke-width': '0', opacity:1}, 1500);

var path_az = rsr.path("M 858.2,875.5 857.4,935.9 943.4,880.9 z");
path_az.attr({
    opacity: '0.5',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.3',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_az');
//var path_az = rsr.path("M 1025.3,645.4 1025.2,575.1 1056.9,579.2 z");
//path_az.attr({fill: '#F2EFF0', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_az');
path_az.animate({path: "M 1025.3,645.4 1025.2,575.1 1056.9,579.2 z", fill: '#F2EFF0', 'stroke-width': '0', opacity: 1}, 1500);

var path_ba = rsr.path("M 1081,358.4 1144.9,292.5 1174.6,336 z");
path_ba.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.4',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_ba');
//var path_ba = rsr.path("M 1217.1,419.6 1183.8,362 1191.8,417.3 z");
//path_ba.attr({fill: '#F4EB2B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ba');
path_ba.animate({path:"M 1217.1,419.6 1183.8,362 1191.8,417.3 z",fill: '#F4EB2B', 'stroke-width': '0'},  1500);

var path_bb = rsr.path("M 746,405.5 723.9,397.7 755.1,399.7 z");
path_bb.attr({fill: '#7D5A32', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bb');
//var path_bb = rsr.path("M 1089,633.5 1124.9,619.5 1111.1,609.9 z");
//path_bb.attr({fill: '#F4EDF0', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bb');
path_bb.animate({path: 'M 1089,633.5 1124.9,619.5 1111.1,609.9 z', fill: '#F4EDF0', 'stroke-width': '0'}, 1500);

var path_bc = rsr.path("M 867.4,621 898.2,639.2 852.6,582.3 z");
path_bc.attr({fill: '#AA814E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bc');
//var path_bc = rsr.path("M 1266.8,642.1 1379.1,642.1 1344.9,611 z");
//path_bc.attr({fill: '#7B4830', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bc');
path_bc.animate({path:"M 1266.8,642.1 1379.1,642.1 1344.9,611 z", fill: '#7B4830', 'stroke-width': '0'}, 1500);

var path_bd = rsr.path("M 1142.1,484.6 1173.6,488 1141.4,516.6 z");
path_bd.attr({
    opacity: '0.7',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.3',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_bd');

//var path_bd = rsr.path("M 1200.8,461.8 1199.7,443.1 1195.9,442.5 z");
//path_bd.attr({fill: '#3F1944', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bd');
path_bd.animate({path: "M 1200.8,461.8 1199.7,443.1 1195.9,442.5 z", fill: '#3F1944', 'stroke-width': '0'}, 1500);


var path_be = rsr.path("M 1116.7,430.1 1139.2,416.3 1136.1,449.7 z");
path_be.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.78',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_be');
//var path_be = rsr.path("M 1136.3,668.3 1154,573.8 1142.3,573.1 z");
//path_be.attr({fill: '#6F2E4C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_be');
path_be.animate({path: ' 1136.3,668.3 1154,573.8 1142.3,573.1 z', fill: '#6F2E4C', 'stroke-width': '0'}, 1500);

var path_bf = rsr.path("M 1254.1,288.2 1273.1,249.9 1144.9,292.5 z");
path_bf.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.71',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_bf');
//var path_bf = rsr.path("M 1262.3,663.3 1221.1,475.8 1185.6,598 z");
//path_bf.attr({fill: '#962E62', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bf');
path_bf.animate({path:'M 1262.3,663.3 1221.1,475.8 1185.6,598 z',fill: '#962E62', 'stroke-width': '0', opacity:1}, 1500);

var path_bg = rsr.path("M 1072.9,595.4 1052,634.2 1090.1,622.6 z");
path_bg.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.3',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'});
//var path_bg = rsr.path("M 1423.8,638.2 1438.2,638.2 1430.6,611.7 z");
//path_bg.attr({fill: '#DBD0D3', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bg');
path_bg.animate({path: 'M 1423.8,638.2 1438.2,638.2 1430.6,611.7 z'}, 1500);

var path_bh = rsr.path("M 1090.4,622.6 1081.4,644.2 1061.7,632 z");
path_bh.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.29',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_bh');
//var path_bh = rsr.path("M 1142.2,573.1 1138.2,468.4 1154,573.8 z");
//path_bh.attr({fill: '#B6426F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bh');
path_bh.animate({path: 'M 1142.2,573.1 1138.2,468.4 1154,573.8 z', fill: '#B6426F', 'stroke-width': '0'}, 1500);

var path_bi = rsr.path("M 1109.4,622.8 1104.5,640.4 1090.4,622.6 z");
path_bi.attr({fill: '#F3E2E4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bi');
//var path_bi = rsr.path("M 1070.7,567.9 1025.2,575.1 1068.6,580.9 z");
//path_bi.attr({fill: '#FFFFFF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bi');
path_bi.animate({path: 'M 1070.7,567.9 1025.2,575.1 1068.6,580.9 z', fill: '#FFFFFF', 'stroke-width': '0'}, 1500);

var path_bj = rsr.path("M 1162.5,187.8 1277.2,112.6 1143.7,54.9 z");
path_bj.attr({fill: '#F3E2E4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bj');
//var path_bj = rsr.path("M 1221.1,475.8 1213.8,450.1 1170.5,476.9 z");
//path_bj.attr({fill: '#F59BAE', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bj');
path_bj.animate({path: "M 1221.1,475.8 1213.8,450.1 1170.5,476.9 z", fill: '#F59BAE', 'stroke-width': '0'}, 1500);

var path_bk = rsr.path("M 1194.8,389.7 1311.1,309.2 1106.2,362.9 z");
path_bk.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.3',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_bk');
//var path_bk = rsr.path("M 1109.3,565.1 1070.7,567.9 1083.8,557.8 z");
//path_bk.attr({fill: '#F4F4F4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bk');
path_bk.animate({path:"M 1109.3,565.1 1070.7,567.9 1083.8,557.8 z", fill: '#F4F4F4', 'stroke-width': '0', opacity:1}, 1500);

var path_bl = rsr.path("M 1019.9,640.8 954.6,665.4 900,641.2 z");
path_bl.attr({
    opacity: '0.6',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.4',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_bl');
//var path_bl = rsr.path("M 1096.2,769.9 1055.3,658.8 1062,769.9 z");
//path_bl.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bl');
path_bl.animate({path:"M 1096.2,769.9 1055.3,658.8 1062,769.9 z",fill: '#E5DADC', 'stroke-width': '0', opacity:1}, 1500);

var path_bm = rsr.path("M 1048.4,378.6 1054.4,390.8 1086.7,398 z");
path_bm.attr({fill: '#EBC99D', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bm');
//var path_bm = rsr.path("M 1068.6,580.9 1125.5,574.5 1070.7,567.9 z");
//path_bm.attr({fill: '#F4F4F4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bm');
path_bm.animate({path:"M 1068.6,580.9 1125.5,574.5 1070.7,567.9 z",fill: '#F4F4F4', 'stroke-width': '0'},1500);

var path_bn = rsr.path("M 915.6,408 886.9,422 914.8,402.1 z");
path_bn.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.4',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_bn');
//var path_bn = rsr.path("M 257,451.4 198,707.2 324.4,707.2 z");
//path_bn.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bn');
path_bn.animate({path:'M 257,451.4 198,707.2 324.4,707.2 z',fill: '#E5DADC', 'stroke-width': '0'}, 1500);

var path_bo = rsr.path("M 1194.8,389.7 1132.2,443.9 1001.2,378.7 z");
path_bo.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.3',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_bo');
//var path_bo = rsr.path("M 1069,516.5 1070.6,495.3 1060.5,542.7 z");
//path_bo.attr({fill: '#F7F192', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bo');
path_bo.animate({path:"M 1069,516.5 1070.6,495.3 1060.5,542.7 z", fill: '#F7F192', 'stroke-width': '0', opacity:1}, 1500);

var path_bp = rsr.path("M 859,453.7 880.4,436.6 831.8,528.3 z");
path_bp.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#F2C68E',
    "stroke-width": '0.4',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_bp');
//var path_bp = rsr.path("M 1644,525.8 1684.9,651.5 1630,651.5 z");
//path_bp.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bp');
path_bp.animate({path: 'M 1644,525.8 1684.9,651.5 1630,651.5 z',fill: '#E5DADC', 'stroke-width': '0'}, 1500);

var path_bq = rsr.path("M 996,695.6 943.9,881.2 922.5,792.2 z");
path_bq.attr({
    opacity: '0.6',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.6',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_bq');
//var path_bq = rsr.path("M 1185.2,351.4 1186.9,342.1 1182.7,347.2 z");
//path_bq.attr({fill: '#F4EB2B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bq');
path_bq.animate({path:"M 1185.2,351.4 1186.9,342.1 1182.7,347.2 z", fill: '#F4EB2B', 'stroke-width': '0', opacity:1}, 1500);

var path_br = rsr.path("M 914.8,402.1 984.3,379.2 987.8,385.1 z");
path_br.attr({
    opacity: '0.7',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.6',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'});
//var path_br = rsr.path("M 1262.3,663.3 1185.6,598 1229.5,676.8 z");
//path_br.attr({fill: '#CA4178', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_br');
path_br.animate({path:"M 1262.3,663.3 1185.6,598 1229.5,676.8 z", fill: '#CA4178', 'stroke-width': '0'}, 1500);

var path_bs = rsr.path("M 1091.9,378.1 1085.4,411.7 1106.2,362.9 z");
path_bs.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.5',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_bs');
//var path_bs = rsr.path("M 1221.1,475.8 1260.9,465.2 1262.3,663.3 z");
//path_bs.attr({fill: '#CE3D77', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bs');
path_bs.animate({path: "M 1221.1,475.8 1260.9,465.2 1262.3,663.3 z",fill: '#CE3D77', 'stroke-width': '0'}, 1500);

var path_bt = rsr.path("M 1091.9,378.1 1103.7,415.9 1139.2,416.3 z");
path_bt.attr({
    opacity: '0.6',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.4',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_bt');
//var path_bt = rsr.path("M 1191.8,417.3 1198.9,447.2 1217.1,419.6 z");
//path_bt.attr({fill: '#F5EB16', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bt');
path_bt.animate({path:"M 1191.8,417.3 1198.9,447.2 1217.1,419.6 z",fill: '#F5EB16', 'stroke-width': '0', opacity:1}, 1500);

var path_bu = rsr.path("M 943.9,881.2 880.3,819 858.2,875.5 z");
path_bu.attr({
    opacity: '0.7',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.7',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_bu');
//var path_bu = rsr.path("M 1068.6,580.9 1056.9,579.2 1073.8,584.5 z");
//path_bu.attr({fill: '#F9F9FA', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bu');
path_bu.animate({path:"M 1068.6,580.9 1056.9,579.2 1073.8,584.5 z", fill: '#F9F9FA', 'stroke-width': '0'}, 1500);

var path_bv = rsr.path("M 1072.9,242.1 1058.5,192.8 1080.9,205.4 z");
path_bv.attr({
    opacity: '0.7',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.5',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_bv');
//var path_bv = rsr.path("M 1070.6,495.3 1090.9,537.8 1069,516.5 z");
//path_bv.attr({fill: '#FEDF00', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bv');
path_bv.animate({path: 'M 1070.6,495.3 1090.9,537.8 1069,516.5 z', fill: '#FEDF00', 'stroke-width': '0', opacity: 1}, 1500);

var path_bw = rsr.path("M 860.3,829 769.1,824.9 812.2,783.8 z");
path_bw.attr({
    opacity: '0.7',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.7',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_bw');
//var path_bw = rsr.path("M 878.4,268.1 891.4,299.2 912,258.1 z");
//path_bw.attr({fill: '#D0489A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bw');
path_bw.animate({path: 'M 878.4,268.1 891.4,299.2 912,258.1 z', fill: '#D0489A', 'stroke-width': '0', opacity:1},1500);

var path_bx = rsr.path("M 866.7,176.9 765.7,266.4 780.8,299.2 z");
path_bx.attr({
    opacity: '0.7',
    fill: 'none',
    stroke: '#F2C68E',
    "stroke-width": '0.6',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_bx');
//var path_bx = rsr.path("M 850.3,215.1 901.8,261.1 912,258.1 z");
//path_bx.attr({fill: '#D73493', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bx');
path_bx.animate({path: "M 850.3,215.1 901.8,261.1 912,258.1 z", fill: '#D73493', 'stroke-width': '0', opacity:1}, 1500);

var path_by = rsr.path("M 1104.5,640.4 1083,633.7 1081.4,644.2 z");
path_by.attr({
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.1',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_by');
//var path_by = rsr.path("M 866.7,198.1 887.3,240.8 912,258.1 z");
//path_by.attr({fill: '#BD268D', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_by');
path_by.animate({path: "M 866.7,198.1 887.3,240.8 912,258.1 z", fill: '#BD268D', 'stroke-width': '0'}, 1500);

var path_bz = rsr.path("M 1311.1,309.2 1254.1,288.2 1174.6,336 z");
path_bz.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.71',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_bz');
//var path_bz = rsr.path("M 878.4,268.1 850.3,215.1 901.8,261.1 z");
//path_bz.attr({fill: '#3F164C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bz');
path_bz.animate({path:'M 878.4,268.1 850.3,215.1 901.8,261.1 z', fill: '#3F164C', 'stroke-width': '0', opacity:1}, 1500);


var path_ca = rsr.path("M 902.3,625.1 898.2,639.2 852.6,582.3 z");
path_ca.attr({fill: '#F2C68E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ca');
//var path_ca = rsr.path("M 1033.5,562.1 1083.8,557.8 1070.7,567.9 z");
//path_ca.attr({fill: '#F4EDF0', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ca');
path_ca.animate({path:"M 1033.5,562.1 1083.8,557.8 1070.7,567.9 z", fill: '#F4EDF0', 'stroke-width': '0'}, 1500);

var path_cb = rsr.path("M 863.2,669.8 853.8,629.5 878.2,653.6 z");
path_cb.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.5',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_cb');
//var path_cb = rsr.path("M 958.3,722.1 978.2,654.2 1018.6,722.1 z");
//path_cb.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cb');
path_cb.animate({path:"M 958.3,722.1 978.2,654.2 1018.6,722.1 z", fill: '#E5DADC', 'stroke-width': '0'}, 1500);

var path_cc = rsr.path("M 963.5,638.3 968.7,650.3 898.2,639.2 z");
path_cc.attr({fill: '#7D5A32', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cc');
//var path_cc = rsr.path("M 868.7,227.8 887.3,240.8 866.7,198.1 z");
//path_cc.attr({fill: '#762369', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cc');
path_cc.animate({path: "M 868.7,227.8 887.3,240.8 866.7,198.1 z", fill: '#762369', 'stroke-width': '0'}, 1500);

var path_cd = rsr.path("M 840,587.2 852.6,582.3 831.8,528.3 z");
path_cd.attr({fill: '#61492C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cd');
//var path_cd = rsr.path("M 1337.3,542.9 1361.2,561.2 1375.8,541.9 z");
//path_cd.attr({fill: '#7B4830', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cd');
path_cd.animate({path:"M 1337.3,542.9 1361.2,561.2 1375.8,541.9 z", fill: '#7B4830', 'stroke-width': '0'}, 1500);

var path_ce = rsr.path("M 1032.7,622.7 1052,634.2 1107.9,558.9 z");
path_ce.attr({fill: '#AA814E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ce');
//var path_ce = rsr.path("M 929.4,254.5 945.9,267.9 932.2,263 z");
//path_ce.attr({fill: '#D4489A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ce');
path_ce.animate({path:"M 929.4,254.5 945.9,267.9 932.2,263 z", fill: '#D4489A', 'stroke-width': '0'}, 1500);

var path_cf = rsr.path("M 1140.6,537.6 1136.1,449.7 1142.1,484.6 z");
path_cf.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.78',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_cf');
//var path_cf = rsr.path("M 891.4,299.2 904,325.7 889.6,317.1 z");
//path_cf.attr({fill: '#D73493', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cf');
path_cf.animate({path: 'M 891.4,299.2 904,325.7 889.6,317.1 z', fill: '#D73493', 'stroke-width': '0'}, 1500);

var path_cg = rsr.path("M 1105.3,303.1 1001.2,378.7 1106.2,362.9 z");
path_cg.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.3',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_cg');
//var path_cg = rsr.path("M 875.1,312.2 863.9,315.8 878.4,268.1 z");
//path_cg.attr({fill: '#3F164C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cg');
path_cg.animate({path:"M 875.1,312.2 863.9,315.8 878.4,268.1 z", fill: '#3F164C', 'stroke-width': '0', opacity: 1}, 1500);

var path_ch = rsr.path("M 1136.1,449.7 1103.6,415.9 1132.4,486 z");
path_ch.attr({
    opacity: '0.7',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.7',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_ch');
//var path_ch = rsr.path("M 932.2,263 945.9,267.9 925.3,278.5 z");
//path_ch.attr({fill: '#76256E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ch');
path_ch.animate({path: "M 932.2,263 945.9,267.9 925.3,278.5 z", fill: '#76256E', 'stroke-width': '0'}, 1500);
var path_ci = rsr.path("M 902.3,625.1 963.5,638.3 898.2,639.2 z");
path_ci.attr({fill: '#AA814E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ci');
//var path_ci = rsr.path("M 932.2,263 912,258.1 929.4,254.5 z");
//path_ci.attr({fill: '#D73493', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ci');
path_ci.animate({path:"M 932.2,263 912,258.1 929.4,254.5 z", fill: '#D73493', 'stroke-width': '0'}, 1500);


var path_cj = rsr.path("M 1001.2,378.7 1079.8,358.4 1105.3,303.1 z");
path_cj.attr({
    opacity: '0.7',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.5',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_cj');
//var path_cj = rsr.path("M 943.1,269.2 965.8,288.5 938.8,271 z");
//path_cj.attr({fill: '#CF2790', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cj');
path_cj.animate({path:"M 943.1,269.2 965.8,288.5 938.8,271 z", fill: '#CF2790', 'stroke-width': '0'}, 1500);

var path_ck = rsr.path("M 968.7,650.3 963.5,638.3 1032.7,622.7 z");
path_ck.attr({fill: '#F2C68E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ck');
//var path_ck = rsr.path("M 934.4,273.4 965.8,288.5 938.8,271 z");
//path_ck.attr({fill: '#68205F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ck');
path_ck.animate({path:"M 934.4,273.4 965.8,288.5 938.8,271 z", fill: '#68205F', 'stroke-width': '0'}, 1500);

var path_cl = rsr.path("M 843.7,626.3 867.4,621 866.3,629.7 z");
path_cl.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.3',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_cl');
//var path_cl = rsr.path("M 891.4,299.2 904,325.7 903,296.4 z");
//path_cl.attr({fill: '#762369', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cl');
path_cl.animate({path:"M 891.4,299.2 904,325.7 903,296.4 z", fill: '#762369', 'stroke-width': '0'}, 1500);

var path_cm = rsr.path("M 1108.4,591 1108.4,591 1107.9,558.9 z");
path_cm.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.38',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_cm');
//var path_cm = rsr.path("M 903,296.4 925.3,278.5 912,258.1 z");
//path_cm.attr({fill: '#762369', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cm');
path_cm.animate({path:"M 903,296.4 925.3,278.5 912,258.1 z",fill: '#762369', 'stroke-width': '0'}, 1500);

var path_cn = rsr.path("M 1107.9,558.9 1052,634.2 1108.4,591 z");
path_cn.attr({fill: '#F2C68E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cn');
//var path_cn = rsr.path("M 903,296.4 912,258.1 891.4,299.2 z");
//path_cn.attr({fill: '#3F164C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cn');
path_cn.animate({path:"M 903,296.4 912,258.1 891.4,299.2 z", fill: '#3F164C', 'stroke-width': '0'}, 1500);

var path_co = rsr.path("M 1108.4,591 968.7,650.3 1052,634.2 z");
path_co.attr({fill: '#7D5A32', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_co');
//var path_co = rsr.path("M 912,258.1 932.2,263 925.3,278.5 z");
//path_co.attr({fill: '#AC206D', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_co');
path_co.animate({path: "M 912,258.1 932.2,263 925.3,278.5 z", fill: '#AC206D', 'stroke-width': '0'}, 1500);

var path_cp = rsr.path("M 1140.6,537.6 1132.4,486 1107.9,558.9 z");
path_cp.attr({
    opacity: '0.7',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-miterlimit": '10',
    'stroke-width': '0',
    'stroke-opacity': '1'
}).data('id', 'path_cp');
//var path_cp = rsr.path("M 875.1,312.2 878.4,268.1 880.8,326.4 z");
//path_cp.attr({fill: '#D73493', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cp');
path_cp.animate({fill:"M 875.1,312.2 878.4,268.1 880.8,326.4 z",fill: '#D73493', 'stroke-width': '0'}, 1500);

var path_cq = rsr.path("M 983.8,379 1048.4,378.6 1054.4,390.4 z");
path_cq.attr({
    opacity: '0.3',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.63',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_cq');
//var path_cq = rsr.path("M 880.8,326.4 891.4,299.2 878.4,268.1 z");
//path_cq.attr({fill: '#3F164C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cq');
path_cq.animate({path:"M 880.8,326.4 891.4,299.2 878.4,268.1 z", fill: '#3F164C', 'stroke-width': '0'});

var path_cr = rsr.path("M 1157.6,665.5 1059.5,723.3 1141,708.8 z");
path_cr.attr({
    opacity: '0.6',
    fill: 'none',
    stroke: '#CCA46A',
    "stroke-width": '0.7',
    "stroke-miterlimit": '10',
    'stroke-opacity': '1'
}).data('id', 'path_cr');
//var path_cr = rsr.path("M 863.9,315.8 867.7,287 878.4,268.1 z");
//path_cr.attr({fill: '#D73493', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cr');
path_cr.animate({path:"M 863.9,315.8 867.7,287 878.4,268.1 z", fill: '#D73493', 'stroke-width': '0'}, 1500);

var path_cs = rsr.path("M 1063.3,513.2 1049.7,538.5 1080.9,537 z");
path_cs.attr({fill: '#CDA56B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cs');

//var path_cs = rsr.path("M 1198.9,447.2 1176,425.7 1191.8,417.3 z");
//path_cs.attr({fill: '#F6C813', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cs');
path_cs.animate({path: "M 1198.9,447.2 1176,425.7 1191.8,417.3 z", fill: '#F6C813', 'stroke-width': 0}, 1500);

var path_ct = rsr.path("M 712.2,633 749.2,637.2 751.9,656.8 z");
path_ct.attr({fill: '#7D5A32', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ct');
//var path_ct = rsr.path("M 1070.3,570 1073.7,567.1 1074.2,540.6 z");
//path_ct.attr({fill: '#3F1944', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ct');
path_ct.animate({path:"M 1070.3,570 1073.7,567.1 1074.2,540.6 z", fill: '#3F1944', 'stroke-width': '0'}, 1500);

var path_cu = rsr.path("M 965.4,492.6 982.7,503.3 968.4,506.1 z");
path_cu.attr({fill: '#AA814E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cu');
//var path_cu = rsr.path("M 1069,516.5 1090.9,537.8 1073.4,550.5 z");
//path_cu.attr({fill: '#F4EB2B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cu');
path_cu.animate({path:"M 1069,516.5 1090.9,537.8 1073.4,550.5 z",fill: '#F4EB2B', 'stroke-width': '0' }, 1500);

var path_cv = rsr.path("M 1173.6,487.6 1148.9,496.8 1177.1,509 z");
path_cv.attr({fill: '#F3E2E4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cv');
//var path_cv = rsr.path("M 1715.7,695.6 1639.5,695.6 1723.2,463.3 z");
//path_cv.attr({fill: '#DBD0D3', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cv');
path_cv.animate({path:"M 1715.7,695.6 1639.5,695.6 1723.2,463.3 z", fill: '#DBD0D3', 'stroke-width': '0'}, 1500);

var path_cw = rsr.path("M 1302,624.9 1268.1,718.6 1319.7,718.6 z");
path_cw.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1', opacity:0}).data('id', 'path_cw');

path_cw.animate({opacity:1}, 1500);

var arr = rsr.set(path_d,path_e,path_f,path_g,path_h, path_i,path_j,path_k,path_l,path_m,path_n,path_o,path_p,path_q,path_r,path_s,path_t,path_u,path_v,path_w,path_x,path_y,path_z,
    path_aa,path_ab,path_ac,path_ad,path_ae,path_af,path_ag,path_ah, path_ai,path_aj,path_ak,path_al,path_am,path_an,path_ao,path_ap,path_aq,path_ar,path_as,path_at,path_au,path_av,path_aw,path_ax,path_ay,path_az,
    path_ba,path_bb,path_bc,path_bd,path_be,path_bf,path_bg,path_bh, path_bi,path_bj,path_bk,path_bl,path_bm,path_bn,path_bo,path_bp,path_bq,path_br,path_bs,path_bt,path_bu,path_bv,path_bw,path_bx,path_by,path_bz,
    path_ca,path_cb,path_cc,path_cd,path_ce,path_cf,path_cg,path_ch,path_ci,path_cj,path_ck,path_cl,path_cm,path_cn,path_co,path_cp,path_cq,path_cr,path_cs,path_ct,path_cu,path_cv,path_cw)


//setTimeout(function (){
//    arr.animate({transform:'', path:''}, 1500);
//},3000);
//arr.animate({transform:''}, 1500);n