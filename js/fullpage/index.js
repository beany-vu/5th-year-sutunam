function itemTransformEffect(item, vertial, horzirontal) {
    var x = Math.cos(Math.PI * Math.round(Math.random())) * 800;
    var y = Math.cos(Math.PI * Math.round(Math.random())) * 700;
    if (vertial == true) {
        y = 0;
    }
    if (horzirontal == true) {
        x = 0;
    }
    item_i = Raphael.animation({transform: 't' + x + ',' + y, opacity: 0}, 0, function () {
        var recombine_effect = Raphael.animation({transform: '', opacity: 1}, 3000);
        item.animate(recombine_effect)
    });
    item.animate(item_i);
}
function transformEffect(group, vertial, horzirontal) {

    var x = Math.cos(Math.PI * Math.round(Math.random())) * 800;
    var y = Math.cos(Math.PI * Math.round(Math.random())) * 700;
    if (vertial == true) {
        y = 0;
    }
    if (horzirontal == true) {
        x = 0;
    }
    group_i = Raphael.animation({transform: 't' + x + ',' + y, opacity: 0}, 0, function () {
        var recombine_effect = Raphael.animation({transform: '', opacity: 1}, 3000);
        group.animate(recombine_effect)
    });
    group.animate(group_i);
}
function floatUpEffect(group) {

}
function floatDownEffect(group) {
    group_i = Raphael.animation({transform: ''}, 1400, function () {
    });
    group.animate(group_i);
}
function scaleObject(group) {
    group_i = Raphael.animation({transform: 's2 2'}, 0);
    group.animate(group_i);
}

jQuery(window).load(function () {
    var paper = Raphael("lion");
    //=========lion===========
// <polygon fill="#B58F4F" points="376.2,300.8 285.8,226.4 336.3,219.5 376.2,300.8   "/>
    var st01 = paper.path('M 276.2 300.8 L 285.8 226.4 L 336.3 219.5 L 276.2 300.8 Z').attr('fill', '#B58F4F').attr('stroke', 'none');
// <polygon fill="#CD9C4B" points="328.6,165.6 285.1,152.1 333.4,192.8 328.6,165.6   "/>
    var st02 = paper.path('M 328.6 165.6 L 285.1 152.1 L 333.4 192.8 L 328.6 165.6 Z').attr('fill', '#CD9C4B').attr('stroke', 'none');
// <polygon fill="#986337" points="352.9,271.6 372.1,313.6 330.8,303.4 352.9,271.6   "/>
    var st03 = paper.path('M 352.9 271.6 L 372.1 313.6 L 330.8 303.4 L 352.9 271.6 Z').attr('fill', '#986337').attr('stroke', 'none');
// <polygon fill="#CCA54E" points="326.7,177.7 336.3,219.5 379.8,202.8 326.7,177.7   "/>
    var st04 = paper.path('M 326.7 177.7 L 336.3 219.5 L 379.8 202.8 L 326.7 177.7 Z').attr('fill', '#CCA54E').attr('stroke', 'none');
// <polygon fill="#DABD69" points="354.8,191.1 365.4,208.1 379.3,182 354.8,191.1   "/>
    var st05 = paper.path('M 354.8 191.1 L 365.4 208.1 L 379.3 182 354.8 L 191.1 Z').attr('fill', '#DABD69').attr('stroke', 'none');
// <polygon fill="#91623B" points="355.9,260.4 325,235.6 326.1,254.7 355.9,260.4   "/>
    var st06 = paper.path('M355.9 260.4 L 325 235.6 L 326.1 254.7 L 355.9 260.4 Z').attr('fill', '#91623B').attr('stroke', 'none');
// <polygon fill="#692619" points="349.8,373.1 328.8,353.2 334.3,400.8 349.8,373.1   "/>
    var st07 = paper.path('M 349.8 373.1 L 328.8 353.2 L 334.3 400.8 L 349.8 373.1 Z').attr('fill', '#692619').attr('stroke', 'none');
// <polygon fill="#C7AD6C" points="330.8,303.4 315.6,340.8 295.1,318.3 330.8,303.4   "/>
    var st08 = paper.path('M 349.8 373.1 L 328.8 353.2 L 334.3 400.8 L 349.8 373.1 Z').attr('fill', '#C7AD6C').attr('stroke', 'none');
// <polygon fill="#8E5433" points="368.8,350.9 347.3,349 349.8,373.1 368.8,350.9   "/>
    var st09 = paper.path('M 368.8 350.9 L 347.3 349 L 349.8 373.1 L 368.8 350.9 Z').attr('fill', '#8E5433').attr('stroke', 'none');
// <polygon fill="#7F3822" points="315.6,340.8 299.2,384.6 260.1,341.3 315.6,340.8   "/>
    var st10 = paper.path('M 315.6 340.8 L 299.2 384.6 L 260.1 341.3 L 315.6 340.8 Z').attr('fill', '#7F3822').attr('stroke', 'none');
// <polygon fill="#BD924B" points="417,307 372.1,313.6 398,343.5 417,307   "/>
    var st11 = paper.path('M 417 307 L 372.1 313.6 L 398 343.5 L 417 307 Z').attr('fill', '#BD924B').attr('stroke', 'none');
// <polygon fill="#8D5432" points="352.9,271.6 330.8,303.4 326.1,254.7 352.9,271.6   "/>
    var st12 = paper.path('M 352.9 271.6 L 330.8 303.4 L 326.1 254.7 L 352.9 271.6  Z').attr('fill', '#8D5432').attr('stroke', 'none');
// <polygon fill="#5A1E15" points="334.3,400.8 299.2,384.6 328.8,353.2 334.3,400.8   "/>
    var st13 = paper.path('M 352.9 271.6 L 330.8 303.4 L 326.1 254.7 L 352.9 271.6  Z').attr('fill', '#5A1E15').attr('stroke', 'none');
// <polygon fill="#521810" points="334.3,400.8 307,445 299.2,384.6 334.3,400.8   "/>
    var st14 = paper.path('M 334.3 400.8 L 307 445 L 299.2 384.6 L 334.3 400.8  Z').attr('fill', '#521810').attr('stroke', 'none');
// <polygon fill="#C9A155" points="300.4,287.5 258.7,289.6 257.9,248.5 300.4,287.5   "/>
    var st15 = paper.path('M 300.4 287.5 L 258.7 289.6 L 257.9 248.5 L 300.4 287.5 Z').attr('fill', '#C9A155').attr('stroke', 'none');
// <polygon fill="#B6A054" points="280.2,402.4 239,412.8 260.1,341.3 280.2,402.4   "/>
    var st16 = paper.path('M 280.2 402.4 L 239 412.8 L 260.1 341.3 L 280.2 402.4 Z').attr('fill', '#B6A054').attr('stroke', 'none');
// <polygon fill="#8B4B2B" points="280.2,402.4 260.1,341.3 299.2,384.6 280.2,402.4   "/>
    var st17 = paper.path('M 280.2 402.4 L 260.1 341.3 L 299.2 384.6 L 280.2 402.4  Z').attr('fill', '#8B4B2B').attr('stroke', 'none');
// <polygon fill="#955C3B" points="365.9,273 372.1,313.6 352.9,271.6 365.9,273   "/>
    var st18 = paper.path('M 280.2 402.4 L 260.1 341.3 L 299.2 384.6 L 280.2 402.4  Z').attr('fill', '#955C3B').attr('stroke', 'none');
// <polygon fill="#E5D591" points="373.5,260.1 404.7,262.9 383.7,237.3 373.5,260.1   "/>
    var st19 = paper.path('M 373.5 260.1 L 404.7 262.9 L 383.7 237.3 L 373.5 260.1 Z').attr('fill', '#E5D591').attr('stroke', 'none');
// <polygon fill="#E2D187" points="237.8,272 167.8,278.4 258.7,289.6 237.8,272   "/>
    var st20 = paper.path('M 237.8 272 L 167.8 278.4 L 258.7 289.6 L 237.8,272 Z').attr('fill', '#E2D187').attr('stroke', 'none');
// <polygon fill="#B58F4F" points="232.3,234.7 264.7,216 257.9,248.5 232.3,234.7   "/>
    var st21 = paper.path('M 232.3 234.7 L 264.7 216 L 257.9 248.5 L 232.3 234.7 Z').attr('fill', '#B58F4F').attr('stroke', 'none');
// <polygon fill="#BBA661" points="258.7,289.6 274.3,324.5 260.1,341.3 258.7,289.6   "/>
    var st22 = paper.path('M 258.7 289.6 L 274.3 324.5 L 260.1 341.3 L 258.7 289.6 Z').attr('fill', '#BBA661').attr('stroke', 'none');
// <polygon fill="#D4D6B8" points="368.8,350.9 397.2,347.1 416.8,371.2 368.8,350.9   "/>
    var st23 = paper.path('M 368.8 350.9 L 397.2 347.1 L 416.8 371.2 L 368.8 350.9 Z').attr('fill', '#D4D6B8').attr('stroke', 'none');
// <polygon fill="#8C4526" points="372.8,332.5 368.8,350.9 347.3,349 372.8,332.5   "/>
    var st24 = paper.path('M 372.8 332.5 L 368.8 350.9 L 347.3 349 L 372.8 332.5 Z').attr('fill', '#8C4526').attr('stroke', 'none');
// <polygon fill="#A97F42" points="368.8,350.9 390.2,359.6 349.8,373.1 368.8,350.9   "/>
    var st25 = paper.path('M 368.8 350.9 L 390.2 359.6 L 349.8 373.1 L 368.8 350.9 Z').attr('fill', '#A97F42').attr('stroke', 'none');
// <polygon fill="none" stroke="#E27529" stroke-width="0.6" stroke-miterlimit="10" points="397.2,347.1 372.8,332.5 398,343.5 397.2,347.1   "/>
    var st26 = paper.path('M 397.2 347.1 L 372.8 332.5 L 398 343.5 L 397.2 347.1 Z').attr('fill', 'none').attr('stroke', 'none');
// <polygon fill="#61261F" points="397.2,347.1 433.6,339.2 398,343.5 397.2,347.1   "/>
    var st27 = paper.path('M 397.2 347.1 L 433.6 339.2 L 398 343.5 L 397.2 347.1 Z').attr('fill', '#61261F').attr('stroke', 'none');
// <polygon fill="#090509" points="365.9,273 352.9,271.6 355.9,260.4 365.9,273   "/>
    var st28 = paper.path('M 365.9  273 L 352.9 271.6 L 355.9 260.4 L 365.9 273 Z').attr('fill', '#090509').attr('stroke', 'none');
// <polygon fill="#A87D44" points="355.9,260.4 326.1,254.7 352.9,271.6 355.9,260.4   "/>
    var st29 = paper.path('M 355.9 260.4 L 326.1 254.7 L 352.9 271.6 L 355.9 260.4 Z').attr('fill', '#A87D44').attr('stroke', 'none');
// <polygon fill="#CAB160" points="195.4,319.2 260.1,341.3 258.7,289.6 195.4,319.2   "/>
    var st30 = paper.path('M 195.4 319.2 L 260.1 341.3 L 258.7 289.6 L 195.4 319.2 Z').attr('fill', '#CAB160').attr('stroke', 'none');
// <polygon fill="#B63D1A" points="355.9,260.4 373.6,260.1 371.7,267.1 355.9,260.4   "/>
    var st31 = paper.path('M 355.9 260.4 L 373.6 260.1 L 371.7 267.1 L 355.9 260.4 Z').attr('fill', '#B63D1A').attr('stroke', 'none');
// <polygon fill="#D34C1F" points="355.9,260.4 371.7,267.1 365.9,273 355.9,260.4   "/>
    var st32 = paper.path('M 355.9 260.4 L 371.7 267.1 L 365.9 273 L 355.9 260.4 Z').attr('fill', '#D34C1F').attr('stroke', 'none');
// <polygon fill="#773522" points="315.6,340.8 347.3,349 349.8,373.1 315.6,340.8   "/>
    var st33 = paper.path('M 315.6 340.8 L 347.3 349 L 349.8 373.1 L 315.6 340.8 Z').attr('fill', '#773522').attr('stroke', 'none');
// <polygon fill="#8F4125" points="372.1,313.6 372.8,332.5 330.8,303.4 372.1,313.6   "/>
    var st34 = paper.path('M 372.1 313.6 L 372.8 332.5 L 330.8 303.4 L 372.1 313.6  Z').attr('fill', '#8F4125').attr('stroke', 'none');
// <polygon fill="#A4653C" points="315.6,340.8 299.2,384.6 328.8,353.2 315.6,340.8   "/>
    var st35 = paper.path('M 315.6 340.8 L 299.2 384.6 L 328.8 353.2 L 315.6 340.8  Z').attr('fill', '#A4653C').attr('stroke', 'none');
// <polygon fill="#A4653C" points="274.3,324.5 315.6,340.8 260.1,341.3 274.3,324.5   "/>
    var st36 = paper.path('M 274.3 324.5 L 315.6 340.8 L 260.1 341.3 L 274.3 324.5  Z').attr('fill', '#A4653C').attr('stroke', 'none');
// <polygon fill="#9E6D3A" points="274.3,324.5 295.1,318.3 315.6,340.8 274.3,324.5   "/>
    var st37 = paper.path('M 274.3 324.5 L 295.1 318.3 L 315.6 340.8 L 274.3 324.5  Z').attr('fill', '#9E6D3A').attr('stroke', 'none');
// <polygon fill="#7F381F" points="372.8,332.5 330.8,303.4 315.6,340.8 372.8,332.5   "/>
    var st38 = paper.path('M 372.8 332.5 L 330.8 303.4 L 315.6 340.8 L 372.8 332.5  Z').attr('fill', '#7F381F').attr('stroke', 'none');
// <polygon fill="#C09C51" points="300.4,287.5 295.1,318.3 330.8,303.4 300.4,287.5   "/>
    var st39 = paper.path('M 300.4 287.5 L 295.1 318.3 L 330.8 303.4 L 300.4 287.5  Z').attr('fill', '#C09C51').attr('stroke', 'none');
// <polygon fill="#A88248" points="300.4,287.5 258.7,289.6 295.1,318.3 300.4,287.5   "/>
    var st40 = paper.path('M 300.4 287.5 L 258.7 289.6 L 295.1 318.3 L 300.4 287.5  Z').attr('fill', '#A88248').attr('stroke', 'none');
// <polygon fill="#BA8F4B" points="274.3,324.5 258.7,289.6 295.1,318.3 274.3,324.5   "/>
    var st41 = paper.path('M 274.3 324.5 L 258.7 289.6 L 295.1 318.3 L 274.3 324.5 Z').attr('fill', '#BA8F4B').attr('stroke', 'none');
// <polygon fill="#784A40" points="281.9,187.1 199.4,165.6 229,195.2 281.9,187.1   "/>
    var st42 = paper.path('M 281.9 187.1 L 199.4 165.6 L 229 195.2 L 281.9 187.1 Z').attr('fill', '#784A40').attr('stroke', 'none');
// <polygon fill="#986936" points="315.6,340.8 372.8,332.5 347.3,349 315.6,340.8   "/>
    var st43 = paper.path('M 315.6 340.8 L 372.8 332.5 L 347.3 349 L 315.6 340.8 Z').attr('fill', '#986936').attr('stroke', 'none');
// <polygon fill="#BDA564" points="417,307 408.3,269.9 446.8,304.4 417,307   "/>
    var st44 = paper.path('M 417 307 L 408.3 269.9 L 446.8 304.4 L 417 307 Z').attr('fill', '#BDA564').attr('stroke', 'none');
// <polygon fill="#AC7F45" points="237.8,272 258.7,289.6 257.9,248.5 237.8,272   "/>
    var st45 = paper.path('M 237.8 272 L 258.7 289.6 L 257.9 248.5 L 237.8 272  Z').attr('fill', '#AC7F45').attr('stroke', 'none');
// <polygon fill="#A4653C" points="237.8,272 257.9,248.5 192.5,251.9 237.8,272   "/>
    var st46 = paper.path('M 237.8 272 L 257.9 248.5 L 192.5 251.9 L 237.8 272 Z').attr('fill', '#A4653C').attr('stroke', 'none');
// <polygon fill="#A4653C" points="185.5,233.4 232.3,234.7 257.9,248.5 185.5,233.4   "/>
    var st47 = paper.path('M 185.5 233.4 L 232.3 234.7 L 257.9 248.5 L 185.5 233.4 Z').attr('fill', '#A4653C').attr('stroke', 'none');
// <polygon fill="#561F22" points="207.8,205.9 232.3,234.7 264.7,216 207.8,205.9   "/>
    var st48 = paper.path('M 207.8 205.9 L 232.3 234.7 L 264.7 216 L 207.8 205.9 Z').attr('fill', '#561F22').attr('stroke', 'none');
// <polygon fill="#B78645" points="228.4,194.8 311.5,182.9 285.4,227.8 228.4,194.8   "/>
    var st49 = paper.path('M 228.4 194.8 L 311.5 182.9 L 285.4 227.8 L 228.4 194.8  Z').attr('fill', '#B78645').attr('stroke', 'none');
// <polygon fill="#B4904B" points="336.3,219.5 385.5,219.8 383.7,237.3 336.3,219.5   "/>
    var st50 = paper.path('M 336.3 219.5 L 385.5 219.8 L 383.7 237.3 L 336.3 219.5 Z').attr('fill', '#B4904B').attr('stroke', 'none');
// <polygon fill="#B4863E" points="336.3,219.5 385.5,219.8 365.4,208.1 336.3,219.5   "/>
    var st51 = paper.path('M 336.3 219.5 L 385.5 219.8 L 365.4 208.1 L 336.3 219.5  Z').attr('fill', '#B4863E').attr('stroke', 'none');
// <polygon fill="#CFCA9A" points="386,271.5 372.1,313.6 365.9,273 386,271.5   "/>
    var st52 = paper.path('M 386 271.5 L 372.1 313.6 L 365.9 273 L 386 271.5 Z').attr('fill', '#CFCA9A').attr('stroke', 'none');
// <polygon fill="#E4CD80" points="365.4,208.1 379.3,182 385.5,219.8 365.4,208.1   "/>
    var st53 = paper.path('M 365.4 208.1 L 379.3 182 L 385.5 219.8 L 365.4 208.1  Z').attr('fill', '#E4CD80').attr('stroke', 'none');
// <polygon fill="#762D1E" points="326.7,177.7 310.1,223.2 336.3,219.5 326.7,177.7   "/>
    var st54 = paper.path('M 326.7 177.7 L 310.1 223.2 L 336.3 219.5 L 326.7 177.7  Z').attr('fill', '#762D1E').attr('stroke', 'none');
// <polygon fill="#D6BE75" points="281.9,187.1 282.9,213.7 310.1,223.2 281.9,187.1   "/>
    var st55 = paper.path('M 281.9 187.1 L 282.9 213.7 L 310.1 223.2 L 281.9 187.1 Z').attr('fill', '#D6BE75').attr('stroke', 'none');
// <polygon fill="#A26E36" points="364.6,368 357.4,389.6 349.8,373.1 364.6,368   "/>
    var st56 = paper.path('M 364.6 368 L 357.4 389.6 L 349.8 373.1 L 364.6 368 Z').attr('fill', '#A26E36').attr('stroke', 'none');
// <polygon fill="#FEF2C7" points="257.9,248.5 282.9,213.7 300.4,287.5 257.9,248.5   "/>
    var st57 = paper.path('M 257.9 248.5 L 282.9 213.7 L 300.4 287.5 L 257.9 248.5 Z').attr('fill', '#FEF2C7').attr('stroke', 'none');
// <polygon fill="#9A7040" points="330.8,303.4 326.1,254.7 300.4,287.5 330.8,303.4   "/>
    var st58 = paper.path('M 330.8 303.4 L 326.1 254.7 L 300.4 287.5 L 330.8 303.4 Z').attr('fill', '#9A7040').attr('stroke', 'none');
// <polygon fill="#DCC193" points="402.8,239.4 385.5,219.8 383.7,237.3 402.8,239.4   "/>
    var st59 = paper.path('M 402.8 239.4 L 385.5 219.8 L 383.7 237.3 L 402.8 239.4 Z').attr('fill', '#DCC193').attr('stroke', 'none');
// <polygon fill="#AC8148" points="422.4,328.6 398,343.5 417,307 422.4,328.6   "/>
    var st60 = paper.path('M 422.4 328.6 L 398 343.5 L 417 307 L 422.4 328.6  Z').attr('fill', '#AC8148').attr('stroke', 'none');
// <polygon fill="#89462B" points="282.9,213.7 285.3,248.5 309.6,242 282.9,213.7   "/>
    var st61 = paper.path('M 282.9 213.7 L 285.3 248.5 L 309.6 242 L 282.9 213.7  Z').attr('fill', '#89462B').attr('stroke', 'none');
// <polygon fill="#AC8245" points="309.6,242 310.1,223.2 282.9,213.7 309.6,242 "/>
    var st62 = paper.path('M 309.6 242 L 310.1 223.2 L 282.9 213.7 L 309.6 242  Z').attr('fill', '#AC824').attr('stroke', 'none');
// <polygon fill="#854F33" points="310.1,223.2 325.4,236 309.6,242 310.1,223.2   "/>
    var st63 = paper.path('M 310.1 223.2 L 325.4 236 L 309.6 242 L 310.1 223.2 Z').attr('fill', '#854F33').attr('stroke', 'none');
// <polygon fill="#E9E3D7" points="404.7,262.9 414.5,253.2 402.8,239.4 404.7,262.9   "/>
    var st64 = paper.path('M 310.1 223.2 L 325.4 236 L 309.6 242 L 310.1 223.2 Z').attr('fill', '#E9E3D7').attr('stroke', 'none');
// <polygon fill="#B17D4E" points="383.7,237.3 402.8,239.4 404.7,262.9 383.7,237.3   "/>
    var st65 = paper.path('M 383.7 237.3 L 402.8 239.4 L 404.7 262.9 L 383.7 237.3 Z').attr('fill', '#B17D4E').attr('stroke', 'none');
// <polygon fill="#CDC584" points="355.9,260.4 336.3,219.5 383.7,237.3 355.9,260.4   "/>
    var st66 = paper.path('M 355.9 260.4 L 336.3 219.5 L 383.7 237.3 L 355.9 260.4  Z').attr('fill', '#CDC584').attr('stroke', 'none');
// <polygon fill="#B68F4F" points="355.9,260.4 373.6,260.1 383.7,237.3 355.9,260.4   "/>
    var st67 = paper.path('M 355.9 260.4 L 373.6 260.1 L 383.7 237.3 L 355.9 260.4   Z').attr('fill', '#B68F4F').attr('stroke', 'none');
// <polygon fill="#F6E1B2" points="354.8,191.1 379.3,182 370.6,166.7 354.8,191.1   "/>
    var st68 = paper.path('M 354.8 191.1 L 379.3 182 L 370.6 166.7 L 354.8 191.1 Z').attr('fill', '#F6E1B2').attr('stroke', 'none');
// <polygon fill="#D6DBB6" points="354.8,164 349.4,149.8 370.6,166.7 354.8,164   "/>
    var st69 = paper.path('M 354.8 164 L 349.4 149.8 L 370.6 166.7 L 354.8 164 Z').attr('fill', '#D6DBB6').attr('stroke', 'none');
// <polygon fill="#A99253" points="354.8,191.1 327.4,149 370.6,166.7 354.8,191.1   "/>
    var st70 = paper.path('M 354.8 191.1 L 327.4 149 L 370.6 166.7 L 354.8 191.1  Z').attr('fill', '#A99253').attr('stroke', 'none');
// <polygon fill="#E1D080" points="326.7,177.7 315.7,145.9 330.5,153.8 326.7,177.7   "/>
    var st71 = paper.path('M 326.7 177.7 L 315.7 145.9 L 330.5 153.8 L 326.7 177.7 Z').attr('fill', '#E1D080').attr('stroke', 'none');
// <polygon fill="#7D402D" points="354.8,191.1 326.7,177.7 330.5,153.8 354.8,191.1   "/>
    var st72 = paper.path('M 354.8 191.1 L 326.7 177.7 L 330.5 153.8 L 354.8 191.1 Z').attr('fill', '#7D402D').attr('stroke', 'none');
// <polygon fill="#E9DC8C" points="317.4,151.1 296.9,144.7 326.7,177.7 317.4,151.1   "/>
    var st73 = paper.path('M 317.4 151.1 L 296.9 144.7 L 326.7 177.7 L 317.4 151.1  Z').attr('fill', '#E9DC8C').attr('stroke', 'none');
// <polygon fill="#622B2B" points="308.3,171.6 255.4,158.1 281.9,187.1 308.3,171.6   "/>
    var st74 = paper.path('M 308.3 171.6 L 255.4 158.1 L 281.9 187.1 L 308.3 171.6   Z').attr('fill', '#622B2B').attr('stroke', 'none');
// <polygon fill="#7D2C1E" points="372.8,332.5 368.8,350.9 397.2,347.1 372.8,332.5   "/>
    var st75 = paper.path('M 372.8 332.5 L 368.8 350.9 L 397.2 347.1 L 372.8 332.5  Z').attr('fill', '#7D2C1E').attr('stroke', 'none');
// <polygon fill="#AA7237" points="372.8,332.5 372.1,313.6 398,343.5 372.8,332.5   "/>
    var st76 = paper.path('M 372.8 332.5 L 372.1 313.6 L 398 343.5 L 372.8 332.5    Z').attr('fill', '#AA7237').attr('stroke', 'none');
// <polygon fill="#FCFAED" points="397.2,347.1 433.6,339.2 416.8,371.2 397.2,347.1   "/>
    var st77 = paper.path('M 397.2 347.1 L 433.6 339.2 L 416.8 371.2 L 397.2 347.1 Z').attr('fill', '#FCFAED').attr('stroke', 'none');
// <polygon fill="#220C09" points="397.2,347.1 372.8,332.5 398,343.5 397.2,347.1   "/>
    var st78 = paper.path('M 397.2 347.1 L 372.8 332.5 L 398 343.5 L 397.2 347.1 Z').attr('fill', '#220C09').attr('stroke', 'none');
// <polygon fill="none" stroke="#E27529" stroke-width="0.6" stroke-miterlimit="10" points="397.2,347.1 433.6,339.2 398,343.5 397.2,347.1   "/>
    var st79 = paper.path('M 397.2 347.1 L 433.6 339.2 L 398 343.5 L 397.2 347.1 Z').attr('fill', 'transparent').attr('stroke', 'none');
// <polygon fill="#461D22" points="417,307 439,307.9 437.7,319.3 417,307   "/>
    var st80 = paper.path('M 417 307 L 439 307.9 L 437.7 319.3 L 417,307 Z').attr('fill', '#461D22').attr('stroke', 'none');
// <polygon fill="#693F51" points="446.9,304.7 439,307.9 437.7,319.3 446.9,304.7   "/>
    var st81 = paper.path('M 446.9 304.7 L 439 307.9 L 437.7 319.3 L 446.9 304.7 Z').attr('fill', '#693F51').attr('stroke', 'none');
// <polygon fill="#9D7441" points="386,271.5 372.1,313.6 417,307 386,271.5   "/>
    var st82 = paper.path('M 386 271.5 L 372.1 313.6 L 417 307 L 386 271.5 Z').attr('fill', '#9D7441').attr('stroke', 'none');
// <polygon fill="#B5A164" points="386,271.5 408.3,269.9 417,307 386,271.5   "/>
    var st83 = paper.path('M 386 271.5 L 408.3 269.9 L 417 307 L 386 271.5  Z').attr('fill', '#B5A164').attr('stroke', 'none');
// <polygon fill="#090509" points="373.6,260.1 386,271.5 371.7,267.1 373.6,260.1   "/>
    var st84 = paper.path('M 373.6 260.1 L 386 271.5 L 371.7 267.1 L 373.6 260.1  Z').attr('fill', '#090509').attr('stroke', 'none');
// <polygon fill="#290808" points="365.9,273 386,271.5 371.7,267.1 365.9,273   "/>
    var st85 = paper.path('M 365.9 273 L 386 271.5 L 371.7 267.1 L 365.9 273  Z').attr('fill', '#290808').attr('stroke', 'none');
// <polygon fill="#CCB285" points="373.6,260.1 386,271.5 408.3,269.9 373.6,260.1   "/>
    var st86 = paper.path('M 373.6 260.1 L 386 271.5 L 408.3 269.9 L 373.6 260.1 Z').attr('fill', '#CCB285').attr('stroke', 'none');
// <polygon fill="#884E39" points="408.3,269.9 404.7,262.9 373.6,260.1 408.3,269.9   "/>
    var st87 = paper.path('M 408.3 269.9 L 404.7 262.9 L 373.6 260.1 L 408.3,269.9  Z').attr('fill', '#884E39').attr('stroke', 'none');
// <polygon fill="#E0D6C0" points="410.7,263.6 408.3,269.9 446.9,304.7 410.7,263.6   "/>
    var st88 = paper.path('M 410.7 263.6 L 408.3 269.9 L 446.9 304.7 L 410.7 263.6 Z').attr('fill', '#E0D6C0').attr('stroke', 'none');
// <polygon fill="#B38D60" points="408.3,269.9 414.5,253.2 404.7,262.9 408.3,269.9   "/>
    var st89 = paper.path('M 408.3 269.9 L 414.5 253.2 L 404.7 262.9 L 408.3 269.9 Z').attr('fill', '#B38D60').attr('stroke', 'none');
// <polygon fill="#B9B67D" points="437.7,319.3 398,343.5 433.6,339.2 437.7,319.3   "/>
    var st90 = paper.path('M 437.7 319.3 L 398 343.5 L 433.6 339.2 L 437.7 319.3 Z').attr('fill', '#B9B67D').attr('stroke', 'none');
// <polygon fill="#895331" points="433.6,339.2 446.9,304.7 437.7,319.3 433.6,339.2   "/>
    var st91 = paper.path('M 433.6 339.2 L 446.9 304.7 L 437.7 319.3 L 433.6 339.2 Z').attr('fill', '#895331').attr('stroke', 'none');
// <polygon fill="#A07F4D" points="422.4,328.6 417,307 437.7,319.3 422.4,328.6   "/>
    var st92 = paper.path('M 422.4 328.6 L 417 307 L 437.7 319.3 L 422.4 328.6 Z').attr('fill', '#A07F4D').attr('stroke', 'none');
// <polygon fill="#C2985B" points="326.1,254.7 300.4,287.5 285.3,248.5 326.1,254.7   "/>
    var st93 = paper.path('M 326.1 254.7 L 300.4 287.5 L 285.3 248.5 L 326.1 254.7 Z').attr('fill', '#C2985B').attr('stroke', 'none');
// <polygon fill="#AF7B41" points="285.3,248.5 309.6,242 325.5,254.8 285.3,248.5   "/>
    var st94 = paper.path('M 285.3 248.5 L 309.6 242 L 325.5 254.8 L 285.3 248.5 Z').attr('fill', '#AF7B41').attr('stroke', 'none');
// <polygon fill="#56171F" points="308.3,171.6 281.9,187.1 310.1,223.2 308.3,171.6   "/>
    var st95 = paper.path('M 308.3 171.6 L 281.9 187.1 L 310.1 223.2 L 308.3 171.6 Z').attr('fill', '#56171F').attr('stroke', 'none');
// <polygon fill="#7A3827" points="282.9,213.7 264.7,216 257.9,248.5 282.9,213.7   "/>
    var st96 = paper.path('M 282.9 213.7 L 264.7 216 L 257.9 248.5 L 282.9 213.7 Z').attr('fill', '#7A3827').attr('stroke', 'none');
// <polygon fill="#401616" points="308.3,171.6 310.1,223.2 326.7,177.7 308.3,171.6   "/>
    var st97 = paper.path('M 308.3 171.6 L 310.1 223.2 L 326.7 177.7 L 308.3 171.6 Z').attr('fill', '#401616').attr('stroke', 'none');
//==============end lion================


    //============text==============
    var txt_1 = paper.text(260, 400, "5 ").attr({"fill": "#fff", "font-size": 50, "opacity": 0});
    var txt_2 = paper.text(370, 400, "  YEARS").attr({"fill": "#fff", "font-size": 50, "opacity": 0});
    var txt_3 = paper.text(400, 400, "  PROJECT").attr({"fill": "#fff", "font-size": 50, "opacity": 0});

    var heading = paper.set();
    heading.push(txt_1, txt_2);

    var sub_heading = paper.text(350, 440, "with Sutunam").attr({
        "fill": "#ccc",
        "font-size": 16,
        "font-family": "Myriad",
        "opacity": 0
    });
    var heading_i = Raphael.animation({transform: 'T0 -20', opacity: 1}, 1400, function () {
        var txt_2i = Raphael.animation({transform: 'T0 -40', opacity: 0}, 1400);
        var txt_3i = Raphael.animation({transform: 'T0 -20', opacity: 1}, 1400);
        txt_2.animate(txt_2i);
        txt_3.animate(txt_3i);
    });
    var sub_heading_i = Raphael.animation({transform: 'T0 -20', opacity: 1}, 1400);
    heading.animate(heading_i.delay(3000));
    sub_heading.animate(sub_heading_i.delay(3200));
    //==============================

    //==============CRESUS================
    var paper1 = Raphael("cresus", 1800, 900);
    //<polygon class="st104" points="804.916,411.714 745.999,512.23 809.983,412.866 	"/>
    var cresus01 = paper1.path('M 804.916 411.714 L 745.999 512.23 L 809.983 412.866 Z').attr({
        "fill": "none",
        "stroke": "#F6F5F4",
        "stroke-width": 0.5,
        "stroke-miterlimit": 10
    });
    //<polygon class="st105" points="807.239,414.896 918.367,382.164 806.107,410.203 	"/>
    var cresus02 = paper1.path('M 807.239 414.896 L 918.367 382.164 L 806.107 410.203 Z').attr({
        "fill": "#F3E2E4",
        "stroke-width": 0
    });
    //<polygon class="st106" points="807.824,409.843 791.462,364.915 802.795,411.934 	"/>
    var cresus03 = paper1.path('M 807.824 409.843 L 791.462 364.915 L 802.795 411.934 Z').attr({
        "fill": "#FFFFFF",
        "stroke-width": 0
    });
    //<polygon class="st107" points="732.548,653.312 798.928,593.744 730.703,553.228 	"/>
    var cresus04 = paper1.path('M 732.548 653.312 L 798.928 593.744 L 730.703 553.228 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.3775,
        "stroke-miterlimit": 10
    });
    //<polygon class="st108" points="828.406,573.04 801.719,563.956 894.744,545.975 	"/>
    var cresus05 = paper1.path('M 828.406 573.04 L 801.719 563.956 L 894.744 545.975 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.1111,
        "stroke-miterlimit": 10
    });
    //<polygon class="st109" points="920.255,520.847 916.006,547.705 942.392,536.785 	"/>
    var cresus06 = paper1.path('M 920.255 520.847 L 916.006 547.705 L 942.392 536.785 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.6011,
        "stroke-miterlimit": 10
    });
    //<polygon class="st110" points="1058.551,592.413 1088.084,634.019 1094.309,614.732 	"/>
    var cresus07 = paper1.path('M 1058.551 592.413 L 1088.084 634.019 L 1094.309 614.732 Z').attr({
        "opacity": 0.7,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.5,
        "stroke-miterlimit": 10
    });
    //<polygon class="st111" points="1027.818,303.679 1144.146,223.243 1007.563,250.039 	"/>
    var cresus08 = paper1.path('M 1027.818 303.679 L 1144.146 223.243 L 1007.563 250.039 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.4532,
        "stroke-miterlimit": 10
    });
    //<polygon class="st112" points="704.397,605.016 732.548,653.312 656.556,639.07 	"/>
    var cresus09 = paper1.path('M 704.397 605.016 L 732.548 653.312 L 656.556 639.07 Z').attr({
        "opacity": 0.8,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-miterlimit": 10
    });
    //<polygon class="st113" points="711.21,567.643 704.397,605.016 673.544,596.447 	"/>
    var cresus10 = paper1.path('M 711.21 567.643 L 704.397 605.016 L 673.544 596.447 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": "0.4",
        "stroke-miterlimit": 10
    });
    //<polygon class="st114" points="677.147,540.573 671.625,556.145 686.533,543.495 	"/>
    var cresus11 = paper1.path('M 677.147 540.573 L 671.625 556.145 L 686.533 543.495 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke-width": "0.4532",
        "stroke": "#CCA469",
        "stroke-miterlimit": 10
    });
    //<polygon class="st115" points="671.362,556.315 696.224,583.831 654.205,615.5 	"/>
    var cresus12 = paper1.path('M 677.147 540.573 L 671.625 556.145 L 686.533 543.495 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke-width": "0.4532",
        "stroke": "#CCA469",
        "stroke-miterlimit": 10
    });
    //<polygon class="st116" points="732.548,653.312 668.271,812.778 656.556,639.07 	"/>
    var cresus13 = paper1.path('M 677.147 540.573 L 671.625 556.145 L 686.533 543.495 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke-width": "0.4532",
        "stroke": "#CCA469",
        "stroke-miterlimit": 10
    });
    //<polygon class="st115" points="785.691,653.413 665.238,687.832 755.462,706.192 	"/>
    var cresus14 = paper1.path('M 785.691 653.413 L 665.238 L 687.832 L 755.462 L 706.192 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke-width": "0.4532",
        "stroke": "#CCA469",
        "stroke-miterlimit": 10
    });
    //<polygon class="st117" points="682.842,513.753 676.654,541.628 673.025,501.873 	"/>
    var cresus15 = paper1.path('M 682.842 513.753 L 676.654 541.628 L 673.025 501.873 Z').attr({
        "opacity": 0.7,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.7,
        "stroke-miterlimit": 10
    });
    //<polygon class="st118" points="673.025,501.162 676.041,540.255 665.466,532.818 	"/>
    var cresus16 = paper1.path('M 673.025 501.162 L 676.041 540.255 L 665.466 532.818 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.2,
        "stroke-miterlimit": 10
    });
    //<polygon class="st119" points="798.928,593.744 819.009,560.897 853.17,554.596 	"/>
    var cresus17 = paper1.path('M 673.025 501.162 L 676.041 540.255 L 665.466 532.818 Z').attr({
        "opacity": 0.7,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.7,
        "stroke-miterlimit": 10
    });
    //<polygon class="st120" points="694.44,753.858 602.118,748.888 670.44,869.858 	"/>
    var cresus18 = paper1.path('M 694.44 753.858 L 602.118 748.888 L 670.44 869.858 Z').attr({
        "opacity": 0.3,
        fill: "none",
        "stroke": "#F2C68D",
        "stroke-width": 0.4,
        "stroke-miterlimit": 10
    });

    //<polygon class="st117" points="798.928,593.744 852.898,554.751 836.657,614.629 	"/>
    var cresus19 = paper1.path('M 798.928 593.744 L 852.898 554.751 L 836.657 614.629 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#F2C68D",
        "stroke-width": 0.4,
        "stroke-miterlimit": 10
    });

    //<polygon class="st121" points="704.397,605.016 665.238,687.832 673.544,596.447 	"/>
    var cresus20 = paper1.path('M 704.397 605.016 L 665.238 687.832 L 673.544 596.447 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.3,
        "stroke-miterlimit": 10
    });
    //<polygon class="st122" points="968.44,703.858 908.695,715.383 916.928,692.955 	"/>
    var cresus21 = paper1.path('M 968.44 703.858 L 908.695 715.383 L 916.928 692.955 Z').attr({"fill": "#EBC89C"});
    //<polygon class="st117" points="1106.085,163.923 1181.44,177.43 1143.052,132.644 	"/>
    var cresus22 = paper1.path('M 1106.085 163.923 L 1181.44 177.43 L 1143.052 132.644 Z').attr({
        "opacity": 0.7,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.7,
        "stroke-miterlimit": 10
    });

    //<polygon class="st123" points="77.44,939.858 381.273,780.358 539.44,912.858 	"/>
    var cresus23 = paper1.path('M 77.44 939.858 L 381.273 780.358 L 539.44 912.858 Z').attr({"fill": "#27242B"});
    //<polygon class="st124" points="622.919,146.151 699.695,90.939 598.664,180.38 	"/>
    var cresus24 = paper1.path('M 622.919 146.151 L 699.695 90.939 L 598.664 180.388 Z').attr({
        "opacity": 0.7,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.3,
        "stroke-miterlimit": 10
    });
    //<polygon class="st114" points="905.848,308.668 816.85,292.959 820.812,299.066 	"/>
    var cresus25 = paper1.path('M 622.919 146.151 L 699.695 90.939 L 598.664 180.388 Z').attr({
        "opacity": 0.7,
        "fill": "none",
        "stroke-width": "0.8",
        "stroke-miterlimit": 10
    });

    //<polygon class="st121" points="787.586,579.386 798.928,593.744 711.21,567.643 	"/>
    var cresus26 = paper1.path('M 787.586 579.386 L 798.928 593.744 L 711.21 567.643 Z').attr({
        "opacity": 0.7,
        "fill": "none",
        "stroke-width": "0.8",
        "stroke-miterlimit": 10
    });

    //<polygon class="st125" points="919.344,312.171 887.366,304.378 969.108,363.668 	"/>
    var cresus27 = paper1.path('M 919.344 312.171 L 887.366 304.378 L 969.108 363.668 Z').attr({"fill": "#AA804E"});

    //<polygon class="st126" points="691.998,367.734 719.055,336.385 748.612,322.014 	"/>
    var cresus28 = paper1.path('M 691.998 367.734 L 719.055 336.385 L 748.612 322.014 Z').attr({
        "opacity": 0.7,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.4,
        "stroke-miterlimit": 10
    });

    //<polygon class="st121" points="755.462,706.192 656.556,639.07 673.544,596.447 	"/>
    var cresus29 = paper1.path('M 755.462 706.192 L 656.556 639.07 L 673.544 596.447 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.3,
        "stroke-miterlimit": 10
    });

    //<polygon class="st127" points="678.272,443.859 691.998,367.734 664.809,442.274 	"/>
    var cresus30 = paper1.path('M 678.272 443.859 L 691.998 367.734 L 664.809 442.274  Z').attr({
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.2,
        "stroke-miterlimit": 10
    });
    //<polygon class="st128" points="844.455,828.435 855.727,838.009 863.085,826.575 	"/>
    var cresus31 = paper1.path('M 844.455 828.435 L 855.727 838.009 L 863.085 826.575  Z').attr({"fill": "#7C5931"});

    //<polygon class="st129" points="798.413,406.647 812.228,404.432 815.702,417.303 	"/>
    var cresus32 = paper1.path('M 798.413,406.647 812.228,404.432 815.702,417.303 Z').attr({"fill": "#CCA46A"});
    //<polygon class="st130" points="711.21,567.643 798.928,593.744 785.691,653.413 	"/>
    var cresus33 = paper1.path('M 711.21 567.643 L 798.928 593.744 L 785.691 653.413 Z').attr({"fill": "#AB814F"});

    //<polygon class="st131" points="787.586,579.386 781.56,631.635 732.548,653.312 	"/>
    var cresus34 = paper1.path('M 787.586 579.386 L 781.56 631.635 L 732.548 653.312 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.2517,
        "stroke-miterlimit": 10
    });

    //<polygon class="st132" points="992.464,349.072 972.248,330.342 969.108,363.668 	"/>
    var cresus35 = paper1.path('M 992.464 349.072 L 972.248 330.342 L 969.108 363.668 Z').attr({
        "opacity": 0.7,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.7834,
        "stroke-miterlimit": 10
    });

    //<polygon class="st121" points="957.07,242.912 938.331,217.07 977.947,206.519 	"/>
    var cresus36 = paper1.path('M 957.07 242.912 L 938.331 217.07 L 977.947 206.519 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.3,
        "stroke-miterlimit": 10
    });

    //<polygon class="st133" points="673.025,501.162 685.595,496.262 700.393,535.004 	"/>
    var cresus37 = paper1.path('M 673.025 501.162 L 685.595 496.262 L 700.393 535.004 Z').attr({"fill": "#5B4127"});
    //<polygon class="st115" points="940.911,472.913 941.36,504.999 973.597,451.57 	"/>
    var cresus38 = paper1.path('M 940.911 472.913 L 941.36 504.999 L 973.597 451.57 Z').attr({
        "opacity": 0.7,
        "fill": "none",
        "stroke-width": "0.8",
        "stroke-miterlimit": 10
    });
    //<polygon class="st134" points="664.809,442.274 685.595,496.262 678.272,443.859 	"/>
    var cresus39 = paper1.path('M 664.809 442.274 L 685.595 496.262 L 678.272 443.859 Z').attr({"fill": "#CCA469"});

    //<polygon class="st123" points="1587.945,638.942 1489.127,926.384 1291.014,674.867 	"/>
    var cresus40 = paper1.path('M 1587.945 638.942 L 1489.127 926.384 L 1291.014 674.867 Z').attr({"fill": "#27242B"});

    //<polygon class="st128" points="639.74,678.832 631.057,630.071 596.619,719.888 	"/>
    var cresus41 = paper1.path('M 639.74 678.832 L 631.057 630.071 L 596.619 719.888 Z').attr({"fill": "#7C5931"});

    //<polygon class="st129" points="713.617,276.641 714.485,240.91 722.076,265.077 	"/>
    var cresus42 = paper1.path('M 713.617 276.641 L 714.485 240.91 L 722.076 265.077 Z').attr({"fill": "#CCA46A"});

    //<polygon class="st117" points="1064.289,196.658 1057.264,220.146 1106.085,163.923 	"/>
    var cresus43 = paper1.path('M 1064.289 196.658 L 1057.264 220.146 L 1106.085 163.923 Z').attr({
        "opacity": 0.7,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.7,
        "stroke-miterlimit": 10
    });

    //<polygon class="st135" points="1010.055,423.018 974.866,429.753 981.866,410.805 	"/>
    var cresus44 = paper1.path('M 1010.055 423.018 L 974.866 429.753 L 981.866 410.805 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.1378,
        "stroke-miterlimit": 10
    });

    //<polygon class="st136" points="965.208,357.947 1039.107,322.858 953.107,286.192 	"/>
    var cresus45 = paper1.path('M 965.208 357.947 L 1039.107 322.858 L 953.107 286.192 Z').attr({
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.7,
        "stroke-miterlimit": 10
    });

    //<polygon class="st137" points="1000.454,242.93 949.961,235.803 932.044,269.827 	"/>
    var cresus46 = paper1.path('M 1000.454 242.93 L 949.961 235.803 L 932.044 269.82 Z').attr({
        "opacity": 0.7,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 1.5,
        "stroke-miterlimit": 10
    });

    //<polygon class="st138" points="747.812,316.055 820.812,299.066 748.612,322.014 	"/>
    var cresus47 = paper1.path('M 747.812 316.055 L 820.812 299.066 L 748.612 322.014 Z').attr({
        "opacity": 0.7,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.6,
        "stroke-miterlimit": 10
    });

    //<polygon class="st113" points="1144.146,223.243 1087.125,202.233 1181.44,177.43 	"/>
    var cresus48 = paper1.path('M 1144.146 223.243 L 1087.125 202.233 L 1181.44 177.43 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.4,
        "stroke-miterlimit": 10
    });

    //<polygon class="st139" points="691.159,789.496 690.44,849.858 776.44,794.858 	"/>
    var cresus49 = paper1.path('M 691.159 789.496 L 690.44 849.858 L 776.44 794.858 Z').attr({
        "opacity": 0.5,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.3,
        "stroke-miterlimit": 10
    });

    //<polygon class="st113" points="913.965,272.415 977.947,206.519 1007.563,250.039 	"/>
    var cresus50 = paper1.path('M 913.965 272.415 L 977.947 206.519 L 1007.563 250.039 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.4,
        "stroke-miterlimit": 10
    });
    //<polygon class="st128" points="578.992,319.477 556.876,311.713 588.084,313.729 	"/>
    var cresus51 = paper1.path('M 578.992 319.477 L 556.876 311.713 L 588.084 313.729 Z').attr({"fill": "#7C5931"});
    //<polygon class="st125" points="700.393,535.004 731.235,553.248 685.595,496.262 	"/>
    var cresus52 = paper1.path('M 700.393 535.004 L 731.235 553.248 L 685.595 496.262 Z').attr({"fill": "#AA804E"});

    //<polygon class="st124" points="975.106,398.635 1006.607,402.012 974.407,430.587 	"/>
    var cresus53 = paper1.path('M 975.106 398.635 L 1006.607 402.012 L 974.407 430.587 Z').attr({
        "opacity": 0.7,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.3,
        "stroke-miterlimit": 10
    });

    //<polygon class="st114" points="949.739,344.121 972.248,330.342 969.108,363.668 	"/>
    var cresus54 = paper1.path('M 949.739 344.121 L 972.248 330.342 L 969.108 363.668 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.7834,
        "stroke-miterlimit": 10
    });

    //<polygon class="st140" points="1087.125,202.233 1106.085,163.923 977.947,206.519 	"/>
    var cresus55 = paper1.path('M 1087.125 202.233 L 1106.085 163.923 L 977.947 206.519 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.7053,
        "stroke-miterlimit": 10
    });
    //<polygon class="st121" points="905.949,509.44 885.045,548.23 923.077,536.642 	"/>
    var cresus56 = paper1.path('M 905.949 509.44 L 885.045 548.23 L 923.077 536.642 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.3,
        "stroke-miterlimit": 10
    });

    //<polygon class="st141" points="923.439,536.584 914.442,558.244 894.744,545.975 	"/>
    var cresus57 = paper1.path('M 923.439,536.584 914.442,558.244 894.744,545.975 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": "0.2897",
        "stroke-miterlimit": 10
    });

    //<polygon class="st105" points="942.392,536.785 937.45,554.429 923.439,536.584 	"/>
    var cresus58 = paper1.path('M 942.392,536.785 937.45,554.429 923.439,536.584 Z').attr({"fill": "#F3E2E4"});
    //<polygon class="st105" points="995.539,101.799 1110.191,26.607 976.702,-31.123 	"/>
    var cresus59 = paper1.path('M 995.539 101.799 L 1110.191 26.607 L 976.702 -31.123 Z').attr({"fill": "#F3E2E4"});

    //<polygon class="st121" points="1027.818,303.679 1144.146,223.243 939.153,276.936 	"/>
    var cresus60 = paper1.path('M 1027.818 303.679 L 1144.146 223.243 L 939.153 276.936 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.3,
        "stroke-miterlimit": 10
    });

    //<polygon class="st142" points="852.898,554.751 787.586,579.386 732.969,555.232 	"/>
    var cresus61 = paper1.path('M 852.898 554.751 L 787.586 579.386 L 732.969 555.232 Z').attr({
        "opacity": 0.6,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.4,
        "stroke-miterlimit": 10
    });
    //<polygon class="st122" points="881.354,292.56 887.438,304.796 919.671,311.971 	"/>
    var cresus62 = paper1.path('M 881.354 292.56 L 887.438 304.796 L 919.671 311.971 Z').attr({"fill": "#EBC89C"});

    //<polygon class="st113" points="748.612,322.014 719.922,335.993 747.812,316.055 	"/>
    var cresus63 = paper1.path('M 748.612 322.014 L 719.922 335.993 L 747.812 316.055 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.4,
        "stroke-miterlimit": 10
    });

    //<polygon class="st121" points="1027.818,303.679 965.208,357.947 834.214,292.703 	"/>
    var cresus64 = paper1.path('M 1027.818 303.679 L 965.208 357.947 L 834.214 292.703 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.3,
        "stroke-miterlimit": 10
    });

    //<polygon class="st120" points="691.998,367.734 713.393,350.65 664.809,442.274 	"/>
    var cresus65 = paper1.path('M 691.998 367.734 L 713.393 350.65 L 664.809 442.274 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#F2C68D",
        "stroke-width": 0.4,
        "stroke-miterlimit": 10
    });

    //<polygon class="st143" points="828.985,609.64 776.942,795.195 755.462,706.192 	"/>
    var cresus66 = paper1.path('M 828.985 609.64 L 776.942 795.195 L 755.462 706.192 Z').attr({
        "opacity": 0.6,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.6,
        "stroke-miterlimit": 10
    });

    //<polygon class="st138" points="747.812,316.055 817.267,293.188 820.812,299.066 	"/>
    var cresus67 = paper1.path('M 747.812 316.055 L 817.267 293.188 L 820.812 299.066 Z').attr({
        "opacity": 0.7,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.6,
        "stroke-miterlimit": 10
    });

    //<polygon class="st144" points="924.915,292.091 918.381,325.665 939.153,276.936 	"/>
    var cresus68 = paper1.path('M 924.915 292.091 L 918.381 325.665 L 939.153 276.936 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.5,
        "stroke-miterlimit": 10
    });
    //<polygon class="st142" points="924.915,292.091 936.743,329.856 972.248,330.342 	"/>
    var cresus69 = paper1.path('M 924.915 292.091 L 936.743 329.856 L 972.248 330.342 Z').attr({
        "opacity": 0.6,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.4,
        "stroke-miterlimit": 10
    });
    //<polygon class="st117" points="776.942,795.195 713.326,733.021 691.159,789.496 	"/>
    var cresus70 = paper1.path('M 776.942 795.195 L 713.326 733.021 L 691.159 789.496 Z').attr({
        "opacity": 0.7,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.7,
        "stroke-miterlimit": 10
    });

    //<polygon class="st110" points="905.936,156.112 891.483,106.849 913.882,119.371 	"/>
    var cresus71 = paper1.path('M 905.936 156.112 L 891.483 106.849 L 913.882 119.371 Z').attr({
        "opacity": 0.7,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.5,
        "stroke-miterlimit": 10
    });
    //<polygon class="st117" points="693.326,743.021 602.118,738.888 645.238,697.832 	"/>
    var cresus72 = paper1.path('M 693.326 743.021 L 602.118 738.888 L 645.238 697.832 Z').attr({
        "opacity": 0.7,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.7,
        "stroke-miterlimit": 10
    });

    //<polygon class="st145" points="699.695,90.939 598.664,180.38 613.795,213.212 	"/>
    var cresus73 = paper1.path('M 699.695 90.939 L 598.664 180.38 L 613.795 213.212 Z').attr({
        "opacity": 0.7,
        "fill": "none",
        "stroke": "#F2C68D",
        "stroke-width": 0.6,
        "stroke-miterlimit": 10
    });

    //<polygon class="st146" points="937.45,554.429 915.965,547.657 914.442,558.244 	"/>
    var cresus74 = paper1.path('M 937.45 554.429 L 915.965 547.657 L 914.442 558.244 Z').attr({
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.1,
        "stroke-miterlimit": 10
    });

    //<polygon class="st140" points="1144.146,223.243 1087.125,202.233 1007.563,250.039 	"/>
    var cresus75 = paper1.path('M 1144.146 223.243 L 1087.125 202.233 L 1007.563 250.039 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.7053,
        "stroke-miterlimit": 10
    });

    //<polygon class="st147" points="735.294,539.135 731.235,553.248 685.595,496.262 	"/>
    var cresus76 = paper1.path('M 735.294 539.135 L 731.235 553.248 L 685.595 496.262 Z').attr({"fill": "#F2C68D"});
    //<polygon class="st148" points="696.224,583.831 686.835,543.501 711.21,567.643 	"/>
    var cresus77 = paper1.path('M 696.224 583.831 L 686.835 543.501 L 711.21 567.643 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.5033,
        "stroke-miterlimit": 10
    });

    //<polygon class="st128" points="796.456,552.252 801.729,564.26 731.235,553.248 	"/>
    var cresus78 = paper1.path('M 796.456 552.252 L 801.729 564.26 L 731.235 553.248 Z').attr({"fill": "#7C5931"});
    //<polygon class="st149" points="673.025,501.162 685.595,496.262 664.809,442.274 	"/>
    var cresus79 = paper1.path('M 673.025 501.162 L 685.595 496.262 L 664.809 442.274 Z').attr({"fill": "#60482B"});

    //<polygon class="st125" points="865.734,536.717 885.045,548.23 940.911,472.913 	"/>
    var cresus80 = paper1.path('M 865.734 536.717 L 885.045 548.23 L 940.911 472.913 Z').attr({"fill": "#AA804E"});
    //<polygon class="st114" points="973.597,451.57 969.108,363.668 975.106,398.635 	"/>
    var cresus81 = paper1.path('M 973.597,451.57 969.108,363.668 975.106,398.635 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.7834,
        "stroke-miterlimit": 10
    });
    //<polygon class="st121" points="938.331,217.07 834.214,292.703 939.153,276.936 	"/>
    var cresus82 = paper1.path('M 938.331 217.07 L 834.214 292.703 L 939.153 276.936 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.3,
        "stroke-miterlimit": 10
    });
    //<polygon class="st117" points="969.108,363.668 936.551,329.874 965.365,399.994 	"/>
    var cresus83 = paper1.path('M 969.108,363.668 936.551,329.874 965.365,399.994 Z').attr({
        "opacity": 0.7,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.7,
        "stroke-miterlimit": 10
    });
    //<polygon class="st125" points="735.294,539.135 796.456,552.252 731.235,553.248 	"/>
    var cresus84 = paper1.path('M 735.294 539.135 L 796.456 552.252 L 731.235 553.248 Z').attr({"fill": "#AA804E"});
    //<polygon class="st110" points="834.214,292.703 912.816,272.371 938.331,217.07 	"/>
    var cresus85 = paper1.path('M 834.214,292.703 912.816,272.371 938.331,217.07 Z').attr({
        "opacity": 0.7,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.5,
        "stroke-miterlimit": 10
    });
    //<polygon class="st147" points="801.729,564.26 796.456,552.252 865.734,536.717 	"/>
    var cresus86 = paper1.path('M 801.729 564.26 L 796.456 552.252 L 865.734 536.717 Z').attr({"fill": "#F2C68D"});
    //<polygon class="st121" points="676.679,540.279 700.393,535.004 699.336,543.703 	"/>
    var cresus87 = paper1.path('M 676.679 540.279 L 700.393 535.004 L 699.336 543.703 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.3,
        "stroke-miterlimit": 10
    });

    //<polygon class="st107" points="941.36,504.999 941.36,504.999 940.911,472.913 	"/>
    var cresus88 = paper1.path('M 941.36 504.999 L 941.36 504.999 L 940.911 472.9133 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.3775,
        "stroke-miterlimit": 10
    });

    //<polygon class="st147" points="940.911,472.913 885.045,548.23 941.36,504.999 	"/>
    var cresus89 = paper1.path('M 941.36 504.999 L 941.36 504.999 L 940.911 472.9133 Z').attr({"fill": "#F2C68D"});

    //<polygon class="st128" points="941.36,504.999 801.729,564.26 885.045,548.23 	"/>
    var cresus90 = paper1.path('M 941.36 504.999 L 801.729 564.26 L 885.045 548.23 Z').attr({"fill": "#7C5931"});
    //<polygon class="st150" points="973.597,451.57 965.365,399.994 940.911,472.913 	"/>
    var cresus91 = paper1.path('M 973.597 451.57 L 965.365 399.994 L 940.911 472.913 Z').attr({
        "opacity": 0.7,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-miterlimit": 10
    });
    //<polygon class="st151" points="816.85,292.959 881.354,292.56 887.366,304.378 	"/>
    var cresus92 = paper1.path('M 816.85 292.959 L 881.354 292.56 L 887.366 304.378 Z').attr({
        "opacity": 0.3,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.6292,
        "stroke-miterlimit": 10
    });
    //<polygon class="st152" points="990.632,579.518 892.511,637.319 974.048,622.82 	"/>
    var cresus93 = paper1.path('M 990.632 579.518 L 892.511 637.319 L 974.048 622.82 Z').attr({
        "opacity": 0.6,
        "fill": "none",
        "stroke": "#CCA469",
        "stroke-width": 0.7,
        "stroke-miterlimit": 10
    });

    var cresus = [
        cresus01, cresus02, cresus03, cresus04, cresus05, cresus06, cresus07, cresus08, cresus09, cresus10,
        cresus11, cresus12, cresus13, cresus14, cresus15, cresus16, cresus17, cresus18, cresus19, cresus20,
        cresus21, cresus22, cresus23, cresus24, cresus25, cresus26, cresus27, cresus28, cresus29, cresus30,
        cresus31, cresus32, cresus33, cresus34, cresus35, cresus36, cresus37, cresus38, cresus39, cresus40,
        cresus41, cresus42, cresus43, cresus44, cresus45, cresus46, cresus47, cresus48, cresus49, cresus50,
        cresus51, cresus52, cresus53, cresus54, cresus55, cresus56, cresus57, cresus58, cresus59, cresus60,
        cresus61, cresus62, cresus63, cresus64, cresus65, cresus66, cresus67, cresus68, cresus69, cresus70,
        cresus71, cresus72, cresus73, cresus74, cresus75, cresus76, cresus77, cresus78, cresus79, cresus80,
        cresus81, cresus82, cresus83, cresus84, cresus85, cresus86, cresus87, cresus88, cresus89, cresus90,
        cresus91, cresus92, cresus93
    ];
    //alert('zzzzz');
    for (i = 0; i < cresus.length; i++) {
        floatUpEffect(cresus[i]);
    }
    //=============end cresus================
    //<polygon class="st129" points="896.333,427.234 882.733,452.486 913.875,451.041 	"/>
    var cresus94 = paper1.path('M 896.333 427.234 L 882.733 452.486 L 913.875 451.041 Z').attr({"fill": "#CCA46A"});
    //<polygon class="st128" points="545.166,546.958 582.195,551.183 584.906,570.844 	"/>
    var cresus95 = paper1.path('M 545.166 546.958 L 582.195 551.183 L 584.906 570.844 Z').attr({"fill": "#7C5931"});
    //<polygon class="st125" points="798.413,406.647 815.702,417.303 801.4,420.061 	"/>
    var cresus96 = paper1.path('M 798.413 406.647 L 815.702 417.303 L 801.4 420.061 Z').attr({"fill": "#AA804E"});
    //<polygon class="st105" points="1006.623,401.587 981.866,410.805 1010.055,423.018 	"/>
    var cresus97 = paper1.path('M 1006.623 401.587 L 981.866 410.805 L 1010.055 423.018 Z').attr({"fill": "#F3E2E4"});
    // ==============================

// background of lion
// <polygon fill="#D74D26" points="-0.8,119.2 599.2,119.2 599.2,479.2 -0.8,479.2 -0.8,119.2  "/>
    var bg = paper.path('M -0.8 119.2 M 599.2 119.2 M 599.2 479.2 M -0.8 479.2 M -0.8 119.2 Z').attr('fill', '#D74D26');

    var group_1 = paper.set();
    var group_2 = paper.set();
    var group_3 = paper.set();
    var group_4 = paper.set();
    var group_5 = paper.set();
    var group_6 = paper.set();
    var group_7 = paper.set();
    var group_8 = paper.set();
    var group_9 = paper.set();
    var group_10 = paper.set();
    var group_11 = paper.set();
    var group_12 = paper.set();
    var group_13 = paper.set();
    var group_14 = paper.set();
    var group_15 = paper.set();
    var group_16 = paper.set();
    var group_17 = paper.set();
    var group_18 = paper.set();
    var group_19 = paper.set();
    var group_20 = paper.set();


    group_1.push(st01, st02, st03, st04, st05);
    group_2.push(st06, st07, st08, st09, st10);
    group_3.push(st11, st12, st13, st14, st15);
    group_4.push(st16, st17, st18, st19, st20);
    group_5.push(st21, st22, st23, st24, st25);
    group_6.push(st26, st27, st28, st29, st30);
    group_7.push(st31, st32, st33, st34, st35);
    group_8.push(st36, st37, st38, st39, st40);
    group_9.push(st41, st42, st43, st44, st45);
    group_10.push(st46, st47, st48, st49, st50);
    group_11.push(st51, st52, st53, st54, st55);
    group_12.push(st56, st57, st58, st59, st60);
    group_13.push(st61, st62, st63, st64, st65);
    group_14.push(st66, st67, st68, st69, st70);
    group_15.push(st71, st72, st73, st74, st75);
    group_16.push(st76, st77, st78, st79, st80);
    group_17.push(st81, st82, st83, st84, st85);
    group_18.push(st86, st87, st88, st89, st90);
    group_19.push(st91, st92, st93, st94, st95);
    group_20.push(st96, st97);

    transformEffect(group_1, false, false);
    transformEffect(group_2, false, false);
    transformEffect(group_3, true, false);
    transformEffect(group_4, false, false);
    transformEffect(group_5, true, false);
    transformEffect(group_6, false, false);
    transformEffect(group_7, false, false);
    transformEffect(group_8, false, false);
    transformEffect(group_9, false, false);
    transformEffect(group_10, false, true);
    transformEffect(group_11, false, false);
    transformEffect(group_12, false, false);
    transformEffect(group_13, false, false);
    transformEffect(group_14, false, false);
    transformEffect(group_15, false, false);
    transformEffect(group_16, false, false);
    transformEffect(group_17, false, false);
    transformEffect(group_18, false, false);
    transformEffect(group_19, false, false);
    transformEffect(group_20, true, true);
    scaleObject(group_1);


    jQuery('#scroll-down').click(function () {
        //   group_1i = Raphael.animation({transform: 'T0 -800'}, 1400, function() {});
        //   group_1.animate(group_1i);
        floatUpEffect(group_1);
        floatUpEffect(group_2);
        floatUpEffect(group_3);
        floatUpEffect(group_4);
        floatUpEffect(group_5);
        floatUpEffect(group_6);
        floatUpEffect(group_7);
        floatUpEffect(group_8);
        floatUpEffect(group_9);
        floatUpEffect(group_10);
        floatUpEffect(group_11);
        floatUpEffect(group_12);
        floatUpEffect(group_13);
        floatUpEffect(group_14);
        floatUpEffect(group_15);
        floatUpEffect(group_16);
        floatUpEffect(group_17);
        floatUpEffect(group_18);
        floatUpEffect(group_19);
        floatUpEffect(group_20);
    });
    jQuery('#scroll-up').click(function () {
        floatDownEffect(group_1);
        floatDownEffect(group_2);
        floatDownEffect(group_3);
        floatDownEffect(group_4);
        floatDownEffect(group_5);
        floatDownEffect(group_6);
        floatDownEffect(group_7);
        floatDownEffect(group_8);
        floatDownEffect(group_9);
        floatDownEffect(group_10);
        floatDownEffect(group_11);
        floatDownEffect(group_12);
        floatDownEffect(group_13);
        floatDownEffect(group_14);
        floatDownEffect(group_15);
        floatDownEffect(group_16);
        floatDownEffect(group_17);
        floatDownEffect(group_18);
        floatDownEffect(group_19);
        floatDownEffect(group_20);
    })
});


