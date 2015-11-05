var Beany = {
    /**
     * get the paper that used to draw every element(shape, path,...) on it
     * return paper if exist otherwise create the new paper and return it
     * @param id
     * @returns {*}
     */
    getPaperSingleton: function (id, width, height) {
        if (!_paper) {
            var _paper = Raphael(id, width, height);
        }
        return _paper;
    },
    drawLion: function (paper) {
        //=========lion===========
        // <polygon fill="#B58F4F" points="376.2,300.8 285.8,226.4 336.3,219.5 376.2,300.8 "/>
        var st01 = paper.path('M 276.2 300.8 L 285.8 226.4 L 336.3 219.5 L 276.2 300.8 Z').attr('fill', '#B58F4F').attr('stroke', 'none');
        // <polygon fill="#CD9C4B" points="328.6,165.6 285.1,152.1 333.4,192.8 328.6,165.6 "/>
        var st02 = paper.path('M 328.6 165.6 L 285.1 152.1 L 333.4 192.8 L 328.6 165.6 Z').attr('fill', '#CD9C4B').attr('stroke', 'none');
        // <polygon fill="#986337" points="352.9,271.6 372.1,313.6 330.8,303.4 352.9,271.6 "/>
        var st03 = paper.path('M 352.9 271.6 L 372.1 313.6 L 330.8 303.4 L 352.9 271.6 Z').attr('fill', '#986337').attr('stroke', 'none');
        // <polygon fill="#CCA54E" points="326.7,177.7 336.3,219.5 379.8,202.8 326.7,177.7 "/>
        var st04 = paper.path('M 326.7 177.7 L 336.3 219.5 L 379.8 202.8 L 326.7 177.7 Z').attr('fill', '#CCA54E').attr('stroke', 'none');
        // <polygon fill="#DABD69" points="354.8,191.1 365.4,208.1 379.3,182 354.8,191.1 "/>
        var st05 = paper.path('M 354.8 191.1 L 365.4 208.1 L 379.3 182 354.8 L 191.1 Z').attr('fill', '#DABD69').attr('stroke', 'none');
        // <polygon fill="#91623B" points="355.9,260.4 325,235.6 326.1,254.7 355.9,260.4 "/>
        var st06 = paper.path('M355.9 260.4 L 325 235.6 L 326.1 254.7 L 355.9 260.4 Z').attr('fill', '#91623B').attr('stroke', 'none');
        // <polygon fill="#692619" points="349.8,373.1 328.8,353.2 334.3,400.8 349.8,373.1 "/>
        var st07 = paper.path('M 349.8 373.1 L 328.8 353.2 L 334.3 400.8 L 349.8 373.1 Z').attr('fill', '#692619').attr('stroke', 'none');
        // <polygon fill="#C7AD6C" points="330.8,303.4 315.6,340.8 295.1,318.3 330.8,303.4 "/>
        var st08 = paper.path('M 349.8 373.1 L 328.8 353.2 L 334.3 400.8 L 349.8 373.1 Z').attr('fill', '#C7AD6C').attr('stroke', 'none');
        // <polygon fill="#8E5433" points="368.8,350.9 347.3,349 349.8,373.1 368.8,350.9 "/>
        var st09 = paper.path('M 368.8 350.9 L 347.3 349 L 349.8 373.1 L 368.8 350.9 Z').attr('fill', '#8E5433').attr('stroke', 'none');
        // <polygon fill="#7F3822" points="315.6,340.8 299.2,384.6 260.1,341.3 315.6,340.8 "/>
        var st10 = paper.path('M 315.6 340.8 L 299.2 384.6 L 260.1 341.3 L 315.6 340.8 Z').attr('fill', '#7F3822').attr('stroke', 'none');
        // <polygon fill="#BD924B" points="417,307 372.1,313.6 398,343.5 417,307 "/>
        var st11 = paper.path('M 417 307 L 372.1 313.6 L 398 343.5 L 417 307 Z').attr('fill', '#BD924B').attr('stroke', 'none');
        // <polygon fill="#8D5432" points="352.9,271.6 330.8,303.4 326.1,254.7 352.9,271.6 "/>
        var st12 = paper.path('M 352.9 271.6 L 330.8 303.4 L 326.1 254.7 L 352.9 271.6  Z').attr('fill', '#8D5432').attr('stroke', 'none');
        // <polygon fill="#5A1E15" points="334.3,400.8 299.2,384.6 328.8,353.2 334.3,400.8 "/>
        var st13 = paper.path('M 352.9 271.6 L 330.8 303.4 L 326.1 254.7 L 352.9 271.6  Z').attr('fill', '#5A1E15').attr('stroke', 'none');
        // <polygon fill="#521810" points="334.3,400.8 307,445 299.2,384.6 334.3,400.8 "/>
        var st14 = paper.path('M 334.3 400.8 L 307 445 L 299.2 384.6 L 334.3 400.8  Z').attr('fill', '#521810').attr('stroke', 'none');
        // <polygon fill="#C9A155" points="300.4,287.5 258.7,289.6 257.9,248.5 300.4,287.5 "/>
        var st15 = paper.path('M 300.4 287.5 L 258.7 289.6 L 257.9 248.5 L 300.4 287.5 Z').attr('fill', '#C9A155').attr('stroke', 'none');
        // <polygon fill="#B6A054" points="280.2,402.4 239,412.8 260.1,341.3 280.2,402.4 "/>
        var st16 = paper.path('M 280.2 402.4 L 239 412.8 L 260.1 341.3 L 280.2 402.4 Z').attr('fill', '#B6A054').attr('stroke', 'none');
        // <polygon fill="#8B4B2B" points="280.2,402.4 260.1,341.3 299.2,384.6 280.2,402.4 "/>
        var st17 = paper.path('M 280.2 402.4 L 260.1 341.3 L 299.2 384.6 L 280.2 402.4  Z').attr('fill', '#8B4B2B').attr('stroke', 'none');
        // <polygon fill="#955C3B" points="365.9,273 372.1,313.6 352.9,271.6 365.9,273 "/>
        var st18 = paper.path('M 280.2 402.4 L 260.1 341.3 L 299.2 384.6 L 280.2 402.4  Z').attr('fill', '#955C3B').attr('stroke', 'none');
        // <polygon fill="#E5D591" points="373.5,260.1 404.7,262.9 383.7,237.3 373.5,260.1 "/>
        var st19 = paper.path('M 373.5 260.1 L 404.7 262.9 L 383.7 237.3 L 373.5 260.1 Z').attr('fill', '#E5D591').attr('stroke', 'none');
        // <polygon fill="#E2D187" points="237.8,272 167.8,278.4 258.7,289.6 237.8,272 "/>
        var st20 = paper.path('M 237.8 272 L 167.8 278.4 L 258.7 289.6 L 237.8,272 Z').attr('fill', '#E2D187').attr('stroke', 'none');
        // <polygon fill="#B58F4F" points="232.3,234.7 264.7,216 257.9,248.5 232.3,234.7 "/>
        var st21 = paper.path('M 232.3 234.7 L 264.7 216 L 257.9 248.5 L 232.3 234.7 Z').attr('fill', '#B58F4F').attr('stroke', 'none');
        // <polygon fill="#BBA661" points="258.7,289.6 274.3,324.5 260.1,341.3 258.7,289.6 "/>
        var st22 = paper.path('M 258.7 289.6 L 274.3 324.5 L 260.1 341.3 L 258.7 289.6 Z').attr('fill', '#BBA661').attr('stroke', 'none');
        // <polygon fill="#D4D6B8" points="368.8,350.9 397.2,347.1 416.8,371.2 368.8,350.9 "/>
        var st23 = paper.path('M 368.8 350.9 L 397.2 347.1 L 416.8 371.2 L 368.8 350.9 Z').attr('fill', '#D4D6B8').attr('stroke', 'none');
        // <polygon fill="#8C4526" points="372.8,332.5 368.8,350.9 347.3,349 372.8,332.5 "/>
        var st24 = paper.path('M 372.8 332.5 L 368.8 350.9 L 347.3 349 L 372.8 332.5 Z').attr('fill', '#8C4526').attr('stroke', 'none');
        // <polygon fill="#A97F42" points="368.8,350.9 390.2,359.6 349.8,373.1 368.8,350.9 "/>
        var st25 = paper.path('M 368.8 350.9 L 390.2 359.6 L 349.8 373.1 L 368.8 350.9 Z').attr('fill', '#A97F42').attr('stroke', 'none');
        // <polygon fill="none" stroke="#E27529" stroke-width="0.6" stroke-miterlimit="10" points="397.2,347.1 372.8,332.5 398,343.5 397.2,347.1 "/>
        var st26 = paper.path('M 397.2 347.1 L 372.8 332.5 L 398 343.5 L 397.2 347.1 Z').attr({
            'fill': 'none',
            'stroke': '#E27529',
            'stroke-width': 0.6,
            "stroke-miterlimit": 10
        });
        // <polygon fill="#61261F" points="397.2,347.1 433.6,339.2 398,343.5 397.2,347.1 "/>
        var st27 = paper.path('M 397.2 347.1 L 433.6 339.2 L 398 343.5 L 397.2 347.1 Z').attr('fill', '#61261F').attr('stroke', 'none');
        // <polygon fill="#090509" points="365.9,273 352.9,271.6 355.9,260.4 365.9,273 "/>
        var st28 = paper.path('M 365.9  273 L 352.9 271.6 L 355.9 260.4 L 365.9 273 Z').attr('fill', '#090509').attr('stroke', 'none');
        // <polygon fill="#A87D44" points="355.9,260.4 326.1,254.7 352.9,271.6 355.9,260.4 "/>
        var st29 = paper.path('M 355.9 260.4 L 326.1 254.7 L 352.9 271.6 L 355.9 260.4 Z').attr('fill', '#A87D44').attr('stroke', 'none');
        // <polygon fill="#CAB160" points="195.4,319.2 260.1,341.3 258.7,289.6 195.4,319.2 "/>
        var st30 = paper.path('M 195.4 319.2 L 260.1 341.3 L 258.7 289.6 L 195.4 319.2 Z').attr('fill', '#CAB160').attr('stroke', 'none');
        // <polygon fill="#B63D1A" points="355.9,260.4 373.6,260.1 371.7,267.1 355.9,260.4 "/>
        var st31 = paper.path('M 355.9 260.4 L 373.6 260.1 L 371.7 267.1 L 355.9 260.4 Z').attr('fill', '#B63D1A').attr('stroke', 'none');
        // <polygon fill="#D34C1F" points="355.9,260.4 371.7,267.1 365.9,273 355.9,260.4 "/>
        var st32 = paper.path('M 355.9 260.4 L 371.7 267.1 L 365.9 273 L 355.9 260.4 Z').attr('fill', '#D34C1F').attr('stroke', 'none');
        // <polygon fill="#773522" points="315.6,340.8 347.3,349 349.8,373.1 315.6,340.8 "/>
        var st33 = paper.path('M 315.6 340.8 L 347.3 349 L 349.8 373.1 L 315.6 340.8 Z').attr('fill', '#773522').attr('stroke', 'none');
        // <polygon fill="#8F4125" points="372.1,313.6 372.8,332.5 330.8,303.4 372.1,313.6 "/>
        var st34 = paper.path('M 372.1 313.6 L 372.8 332.5 L 330.8 303.4 L 372.1 313.6  Z').attr('fill', '#8F4125').attr('stroke', 'none');
        // <polygon fill="#A4653C" points="315.6,340.8 299.2,384.6 328.8,353.2 315.6,340.8 "/>
        var st35 = paper.path('M 315.6 340.8 L 299.2 384.6 L 328.8 353.2 L 315.6 340.8  Z').attr('fill', '#A4653C').attr('stroke', 'none');
        // <polygon fill="#A4653C" points="274.3,324.5 315.6,340.8 260.1,341.3 274.3,324.5 "/>
        var st36 = paper.path('M 274.3 324.5 L 315.6 340.8 L 260.1 341.3 L 274.3 324.5  Z').attr('fill', '#A4653C').attr('stroke', 'none');
        // <polygon fill="#9E6D3A" points="274.3,324.5 295.1,318.3 315.6,340.8 274.3,324.5 "/>
        var st37 = paper.path('M 274.3 324.5 L 295.1 318.3 L 315.6 340.8 L 274.3 324.5  Z').attr('fill', '#9E6D3A').attr('stroke', 'none');
        // <polygon fill="#7F381F" points="372.8,332.5 330.8,303.4 315.6,340.8 372.8,332.5 "/>
        var st38 = paper.path('M 372.8 332.5 L 330.8 303.4 L 315.6 340.8 L 372.8 332.5  Z').attr('fill', '#7F381F').attr('stroke', 'none');
        // <polygon fill="#C09C51" points="300.4,287.5 295.1,318.3 330.8,303.4 300.4,287.5 "/>
        var st39 = paper.path('M 300.4 287.5 L 295.1 318.3 L 330.8 303.4 L 300.4 287.5  Z').attr('fill', '#C09C51').attr('stroke', 'none');
        // <polygon fill="#A88248" points="300.4,287.5 258.7,289.6 295.1,318.3 300.4,287.5 "/>
        var st40 = paper.path('M 300.4 287.5 L 258.7 289.6 L 295.1 318.3 L 300.4 287.5  Z').attr('fill', '#A88248').attr('stroke', 'none');
        // <polygon fill="#BA8F4B" points="274.3,324.5 258.7,289.6 295.1,318.3 274.3,324.5 "/>
        var st41 = paper.path('M 274.3 324.5 L 258.7 289.6 L 295.1 318.3 L 274.3 324.5 Z').attr('fill', '#BA8F4B').attr('stroke', 'none');
        // <polygon fill="#784A40" points="281.9,187.1 199.4,165.6 229,195.2 281.9,187.1 "/>
        var st42 = paper.path('M 281.9 187.1 L 199.4 165.6 L 229 195.2 L 281.9 187.1 Z').attr('fill', '#784A40').attr('stroke', 'none');
        // <polygon fill="#986936" points="315.6,340.8 372.8,332.5 347.3,349 315.6,340.8 "/>
        var st43 = paper.path('M 315.6 340.8 L 372.8 332.5 L 347.3 349 L 315.6 340.8 Z').attr('fill', '#986936').attr('stroke', 'none');
        // <polygon fill="#BDA564" points="417,307 408.3,269.9 446.8,304.4 417,307 "/>
        var st44 = paper.path('M 417 307 L 408.3 269.9 L 446.8 304.4 L 417 307 Z').attr('fill', '#BDA564').attr('stroke', 'none');
        // <polygon fill="#AC7F45" points="237.8,272 258.7,289.6 257.9,248.5 237.8,272 "/>
        var st45 = paper.path('M 237.8 272 L 258.7 289.6 L 257.9 248.5 L 237.8 272  Z').attr('fill', '#AC7F45').attr('stroke', 'none');
        // <polygon fill="#A4653C" points="237.8,272 257.9,248.5 192.5,251.9 237.8,272 "/>
        var st46 = paper.path('M 237.8 272 L 257.9 248.5 L 192.5 251.9 L 237.8 272 Z').attr('fill', '#A4653C').attr('stroke', 'none');
        // <polygon fill="#A4653C" points="185.5,233.4 232.3,234.7 257.9,248.5 185.5,233.4 "/>
        var st47 = paper.path('M 185.5 233.4 L 232.3 234.7 L 257.9 248.5 L 185.5 233.4 Z').attr('fill', '#A4653C').attr('stroke', 'none');
        // <polygon fill="#561F22" points="207.8,205.9 232.3,234.7 264.7,216 207.8,205.9 "/>
        var st48 = paper.path('M 207.8 205.9 L 232.3 234.7 L 264.7 216 L 207.8 205.9 Z').attr('fill', '#561F22').attr('stroke', 'none');
        // <polygon fill="#B78645" points="228.4,194.8 311.5,182.9 285.4,227.8 228.4,194.8 "/>
        var st49 = paper.path('M 228.4 194.8 L 311.5 182.9 L 285.4 227.8 L 228.4 194.8  Z').attr('fill', '#B78645').attr('stroke', 'none');
        // <polygon fill="#B4904B" points="336.3,219.5 385.5,219.8 383.7,237.3 336.3,219.5 "/>
        var st50 = paper.path('M 336.3 219.5 L 385.5 219.8 L 383.7 237.3 L 336.3 219.5 Z').attr('fill', '#B4904B').attr('stroke', 'none');
        // <polygon fill="#B4863E" points="336.3,219.5 385.5,219.8 365.4,208.1 336.3,219.5 "/>
        var st51 = paper.path('M 336.3 219.5 L 385.5 219.8 L 365.4 208.1 L 336.3 219.5  Z').attr('fill', '#B4863E').attr('stroke', 'none');
        // <polygon fill="#CFCA9A" points="386,271.5 372.1,313.6 365.9,273 386,271.5 "/>
        var st52 = paper.path('M 386 271.5 L 372.1 313.6 L 365.9 273 L 386 271.5 Z').attr('fill', '#CFCA9A').attr('stroke', 'none');
        // <polygon fill="#E4CD80" points="365.4,208.1 379.3,182 385.5,219.8 365.4,208.1 "/>
        var st53 = paper.path('M 365.4 208.1 L 379.3 182 L 385.5 219.8 L 365.4 208.1  Z').attr('fill', '#E4CD80').attr('stroke', 'none');
        // <polygon fill="#762D1E" points="326.7,177.7 310.1,223.2 336.3,219.5 326.7,177.7 "/>
        var st54 = paper.path('M 326.7 177.7 L 310.1 223.2 L 336.3 219.5 L 326.7 177.7  Z').attr('fill', '#762D1E').attr('stroke', 'none');
        // <polygon fill="#D6BE75" points="281.9,187.1 282.9,213.7 310.1,223.2 281.9,187.1 "/>
        var st55 = paper.path('M 281.9 187.1 L 282.9 213.7 L 310.1 223.2 L 281.9 187.1 Z').attr('fill', '#D6BE75').attr('stroke', 'none');
        // <polygon fill="#A26E36" points="364.6,368 357.4,389.6 349.8,373.1 364.6,368 "/>
        var st56 = paper.path('M 364.6 368 L 357.4 389.6 L 349.8 373.1 L 364.6 368 Z').attr('fill', '#A26E36').attr('stroke', 'none');
        // <polygon fill="#FEF2C7" points="257.9,248.5 282.9,213.7 300.4,287.5 257.9,248.5 "/>
        var st57 = paper.path('M 257.9 248.5 L 282.9 213.7 L 300.4 287.5 L 257.9 248.5 Z').attr('fill', '#FEF2C7').attr('stroke', 'none');
        // <polygon fill="#9A7040" points="330.8,303.4 326.1,254.7 300.4,287.5 330.8,303.4 "/>
        var st58 = paper.path('M 330.8 303.4 L 326.1 254.7 L 300.4 287.5 L 330.8 303.4 Z').attr('fill', '#9A7040').attr('stroke', 'none');
        // <polygon fill="#DCC193" points="402.8,239.4 385.5,219.8 383.7,237.3 402.8,239.4 "/>
        var st59 = paper.path('M 402.8 239.4 L 385.5 219.8 L 383.7 237.3 L 402.8 239.4 Z').attr('fill', '#DCC193').attr('stroke', 'none');
        // <polygon fill="#AC8148" points="422.4,328.6 398,343.5 417,307 422.4,328.6 "/>
        var st60 = paper.path('M 422.4 328.6 L 398 343.5 L 417 307 L 422.4 328.6  Z').attr('fill', '#AC8148').attr('stroke', 'none');
        // <polygon fill="#89462B" points="282.9,213.7 285.3,248.5 309.6,242 282.9,213.7 "/>
        var st61 = paper.path('M 282.9 213.7 L 285.3 248.5 L 309.6 242 L 282.9 213.7  Z').attr('fill', '#89462B').attr('stroke', 'none');
        // <polygon fill="#AC8245" points="309.6,242 310.1,223.2 282.9,213.7 309.6,242 "/>
        var st62 = paper.path('M 309.6 242 L 310.1 223.2 L 282.9 213.7 L 309.6 242  Z').attr('fill', '#AC824').attr('stroke', 'none');
        // <polygon fill="#854F33" points="310.1,223.2 325.4,236 309.6,242 310.1,223.2 "/>
        var st63 = paper.path('M 310.1 223.2 L 325.4 236 L 309.6 242 L 310.1 223.2 Z').attr('fill', '#854F33').attr('stroke', 'none');
        // <polygon fill="#E9E3D7" points="404.7,262.9 414.5,253.2 402.8,239.4 404.7,262.9 "/>
        var st64 = paper.path('M 310.1 223.2 L 325.4 236 L 309.6 242 L 310.1 223.2 Z').attr('fill', '#E9E3D7').attr('stroke', 'none');
        // <polygon fill="#B17D4E" points="383.7,237.3 402.8,239.4 404.7,262.9 383.7,237.3 "/>
        var st65 = paper.path('M 383.7 237.3 L 402.8 239.4 L 404.7 262.9 L 383.7 237.3 Z').attr('fill', '#B17D4E').attr('stroke', 'none');
        // <polygon fill="#CDC584" points="355.9,260.4 336.3,219.5 383.7,237.3 355.9,260.4 "/>
        var st66 = paper.path('M 355.9 260.4 L 336.3 219.5 L 383.7 237.3 L 355.9 260.4  Z').attr('fill', '#CDC584').attr('stroke', 'none');
        // <polygon fill="#B68F4F" points="355.9,260.4 373.6,260.1 383.7,237.3 355.9,260.4 "/>
        var st67 = paper.path('M 355.9 260.4 L 373.6 260.1 L 383.7 237.3 L 355.9 260.4   Z').attr('fill', '#B68F4F').attr('stroke', 'none');
        // <polygon fill="#F6E1B2" points="354.8,191.1 379.3,182 370.6,166.7 354.8,191.1 "/>
        var st68 = paper.path('M 354.8 191.1 L 379.3 182 L 370.6 166.7 L 354.8 191.1 Z').attr('fill', '#F6E1B2').attr('stroke', 'none');
        // <polygon fill="#D6DBB6" points="354.8,164 349.4,149.8 370.6,166.7 354.8,164 "/>
        var st69 = paper.path('M 354.8 164 L 349.4 149.8 L 370.6 166.7 L 354.8 164 Z').attr('fill', '#D6DBB6').attr('stroke', 'none');
        // <polygon fill="#A99253" points="354.8,191.1 327.4,149 370.6,166.7 354.8,191.1 "/>
        var st70 = paper.path('M 354.8 191.1 L 327.4 149 L 370.6 166.7 L 354.8 191.1  Z').attr('fill', '#A99253').attr('stroke', 'none');
        // <polygon fill="#E1D080" points="326.7,177.7 315.7,145.9 330.5,153.8 326.7,177.7 "/>
        var st71 = paper.path('M 326.7 177.7 L 315.7 145.9 L 330.5 153.8 L 326.7 177.7 Z').attr('fill', '#E1D080').attr('stroke', 'none');
        // <polygon fill="#7D402D" points="354.8,191.1 326.7,177.7 330.5,153.8 354.8,191.1 "/>
        var st72 = paper.path('M 354.8 191.1 L 326.7 177.7 L 330.5 153.8 L 354.8 191.1 Z').attr('fill', '#7D402D').attr('stroke', 'none');
        // <polygon fill="#E9DC8C" points="317.4,151.1 296.9,144.7 326.7,177.7 317.4,151.1 "/>
        var st73 = paper.path('M 317.4 151.1 L 296.9 144.7 L 326.7 177.7 L 317.4 151.1  Z').attr('fill', '#E9DC8C').attr('stroke', 'none');
        // <polygon fill="#622B2B" points="308.3,171.6 255.4,158.1 281.9,187.1 308.3,171.6 "/>
        var st74 = paper.path('M 308.3 171.6 L 255.4 158.1 L 281.9 187.1 L 308.3 171.6   Z').attr('fill', '#622B2B').attr('stroke', 'none');
        // <polygon fill="#7D2C1E" points="372.8,332.5 368.8,350.9 397.2,347.1 372.8,332.5 "/>
        var st75 = paper.path('M 372.8 332.5 L 368.8 350.9 L 397.2 347.1 L 372.8 332.5  Z').attr('fill', '#7D2C1E').attr('stroke', 'none');
        // <polygon fill="#AA7237" points="372.8,332.5 372.1,313.6 398,343.5 372.8,332.5 "/>
        var st76 = paper.path('M 372.8 332.5 L 372.1 313.6 L 398 343.5 L 372.8 332.5    Z').attr('fill', '#AA7237').attr('stroke', 'none');
        // <polygon fill="#FCFAED" points="397.2,347.1 433.6,339.2 416.8,371.2 397.2,347.1 "/>
        var st77 = paper.path('M 397.2 347.1 L 433.6 339.2 L 416.8 371.2 L 397.2 347.1 Z').attr('fill', '#FCFAED').attr('stroke', 'none');
        // <polygon fill="#220C09" points="397.2,347.1 372.8,332.5 398,343.5 397.2,347.1 "/>
        var st78 = paper.path('M 397.2 347.1 L 372.8 332.5 L 398 343.5 L 397.2 347.1 Z').attr('fill', '#220C09').attr('stroke', 'none');
        // <polygon fill="none" stroke="#E27529" stroke-width="0.6" stroke-miterlimit="10" points="397.2,347.1 433.6,339.2 398,343.5 397.2,347.1 "/>
        var st79 = paper.path('M 397.2 347.1 L 433.6 339.2 L 398 343.5 L 397.2 347.1 Z').attr({
            'fill': 'none',
            'stroke': '#E27529',
            'stroke-width': 0.6,
            'stroke-miterlimit': 10
        });
        // <polygon fill="#461D22" points="417,307 439,307.9 437.7,319.3 417,307 "/>
        var st80 = paper.path('M 417 307 L 439 307.9 L 437.7 319.3 L 417,307 Z').attr('fill', '#461D22').attr('stroke', 'none');
        // <polygon fill="#693F51" points="446.9,304.7 439,307.9 437.7,319.3 446.9,304.7 "/>
        var st81 = paper.path('M 446.9 304.7 L 439 307.9 L 437.7 319.3 L 446.9 304.7 Z').attr('fill', '#693F51').attr('stroke', 'none');
        // <polygon fill="#9D7441" points="386,271.5 372.1,313.6 417,307 386,271.5 "/>
        var st82 = paper.path('M 386 271.5 L 372.1 313.6 L 417 307 L 386 271.5 Z').attr('fill', '#9D7441').attr('stroke', 'none');
        // <polygon fill="#B5A164" points="386,271.5 408.3,269.9 417,307 386,271.5 "/>
        var st83 = paper.path('M 386 271.5 L 408.3 269.9 L 417 307 L 386 271.5  Z').attr('fill', '#B5A164').attr('stroke', 'none');
        // <polygon fill="#090509" points="373.6,260.1 386,271.5 371.7,267.1 373.6,260.1 "/>
        var st84 = paper.path('M 373.6 260.1 L 386 271.5 L 371.7 267.1 L 373.6 260.1  Z').attr('fill', '#090509').attr('stroke', 'none');
        // <polygon fill="#290808" points="365.9,273 386,271.5 371.7,267.1 365.9,273 "/>
        var st85 = paper.path('M 365.9 273 L 386 271.5 L 371.7 267.1 L 365.9 273  Z').attr('fill', '#290808').attr('stroke', 'none');
        // <polygon fill="#CCB285" points="373.6,260.1 386,271.5 408.3,269.9 373.6,260.1 "/>
        var st86 = paper.path('M 373.6 260.1 L 386 271.5 L 408.3 269.9 L 373.6 260.1 Z').attr('fill', '#CCB285').attr('stroke', 'none');
        // <polygon fill="#884E39" points="408.3,269.9 404.7,262.9 373.6,260.1 408.3,269.9 "/>
        var st87 = paper.path('M 408.3 269.9 L 404.7 262.9 L 373.6 260.1 L 408.3,269.9  Z').attr('fill', '#884E39').attr('stroke', 'none');
        // <polygon fill="#E0D6C0" points="410.7,263.6 408.3,269.9 446.9,304.7 410.7,263.6 "/>
        var st88 = paper.path('M 410.7 263.6 L 408.3 269.9 L 446.9 304.7 L 410.7 263.6 Z').attr('fill', '#E0D6C0').attr('stroke', 'none');
        // <polygon fill="#B38D60" points="408.3,269.9 414.5,253.2 404.7,262.9 408.3,269.9 "/>
        var st89 = paper.path('M 408.3 269.9 L 414.5 253.2 L 404.7 262.9 L 408.3 269.9 Z').attr('fill', '#B38D60').attr('stroke', 'none');
        // <polygon fill="#B9B67D" points="437.7,319.3 398,343.5 433.6,339.2 437.7,319.3 "/>
        var st90 = paper.path('M 437.7 319.3 L 398 343.5 L 433.6 339.2 L 437.7 319.3 Z').attr('fill', '#B9B67D').attr('stroke', 'none');
        // <polygon fill="#895331" points="433.6,339.2 446.9,304.7 437.7,319.3 433.6,339.2 "/>
        var st91 = paper.path('M 433.6 339.2 L 446.9 304.7 L 437.7 319.3 L 433.6 339.2 Z').attr('fill', '#895331').attr('stroke', 'none');
        // <polygon fill="#A07F4D" points="422.4,328.6 417,307 437.7,319.3 422.4,328.6 "/>
        var st92 = paper.path('M 422.4 328.6 L 417 307 L 437.7 319.3 L 422.4 328.6 Z').attr('fill', '#A07F4D').attr('stroke', 'none');
        // <polygon fill="#C2985B" points="326.1,254.7 300.4,287.5 285.3,248.5 326.1,254.7 "/>
        var st93 = paper.path('M 326.1 254.7 L 300.4 287.5 L 285.3 248.5 L 326.1 254.7 Z').attr('fill', '#C2985B').attr('stroke', 'none');
        // <polygon fill="#AF7B41" points="285.3,248.5 309.6,242 325.5,254.8 285.3,248.5 "/>
        var st94 = paper.path('M 285.3 248.5 L 309.6 242 L 325.5 254.8 L 285.3 248.5 Z').attr('fill', '#AF7B41').attr('stroke', 'none');
        // <polygon fill="#56171F" points="308.3,171.6 281.9,187.1 310.1,223.2 308.3,171.6 "/>
        var st95 = paper.path('M 308.3 171.6 L 281.9 187.1 L 310.1 223.2 L 308.3 171.6 Z').attr('fill', '#56171F').attr('stroke', 'none');
        // <polygon fill="#7A3827" points="282.9,213.7 264.7,216 257.9,248.5 282.9,213.7 "/>
        var st96 = paper.path('M 282.9 213.7 L 264.7 216 L 257.9 248.5 L 282.9 213.7 Z').attr('fill', '#7A3827').attr('stroke', 'none');
        // <polygon fill="#401616" points="308.3,171.6 310.1,223.2 326.7,177.7 308.3,171.6 "/>
        var st97 = paper.path('M 308.3 171.6 L 310.1 223.2 L 326.7 177.7 L 308.3 171.6 Z').attr('fill', '#401616').attr('stroke', 'none');
        //==============end lion================

        return Beany.toSet([
            st01, st02, st03, st04, st05, st06, st07, st08, st09, st10,
            st11, st12, st13, st14, st15, st16, st17, st18, st19, st20,
            st21, st22, st23, st24, st25, st26, st27, st28, st29, st30,
            st31, st32, st33, st34, st35, st36, st37, st38, st39, st40,
            st41, st42, st43, st44, st45, st46, st47, st48, st49, st50,
            st51, st52, st53, st54, st55, st56, st57, st58, st59, st60,
            st61, st62, st63, st64, st65, st66, st67, st68, st69, st70,
            st71, st72, st73, st74, st75, st76, st77, st78, st79, st80,
            st81, st82, st83, st84, st85, st86, st87, st88, st89, st90,
            st91, st92, st93, st94, st95, st96, st97
        ], paper);
    },
    drawHeading: function (paper) {
        var txt1 = paper.text(jQuery(window).width() / 2 - 90, jQuery(window).height() / 2 + 100, "5 ").attr({
            "fill": "#fff",
            "text-anchor": "start",
            "font-family": "gotham-xlight",
            "font-weight": "100",
            "font-size": 50,
            "opacity": 0
        });
        var txt2 = paper.text(jQuery(window).width() / 2 - 55, jQuery(window).height() / 2 + 100, "PROJECTS").attr({
            "fill": "#fff",
            "text-anchor": "start",
            "font-family": "gotham-xlight",
            "font-size": 50,
            "opacity": 0
        });
        var txt3 = paper.text(jQuery(window).width() / 2 - 55, jQuery(window).height() / 2 + 140, "YEARS").attr({
            "fill": "#fff",
            "text-anchor": "start",
            "font-family": "gotham-xlight",
            "font-size": 50,
            "opacity": 0
        });
        var txt4 = paper.text(jQuery(window).width() / 2 - 50, jQuery(window).height() / 2 + 160, "WITH SUTUNAM").attr({
            "fill": "#393939",
            "text-anchor": "start",
            "font-family": "gotham-xlight",
            "font-size": 18,
            "opacity": 0
        });
        var txt_set = paper.set(txt1, txt2, txt4);
        var faded_txt = Raphael.animation({transform: 't0' + ',-20', opacity: 1}, 2000, function () {
            Beany.transformEffect(txt2, txt3);
        });
        txt_set.animate(faded_txt.delay(2000));

        return paper.set([txt1, txt2, txt3, txt4]);
    },
    toSet: function (arr, paper) {
        var _set = paper.set();
        for (var i = 0; i < arr.length; i++) {
            _set.push(arr[i]);
        }
        return _set;
    },
    transformEffect: function (from_txt, to_txt) {
        var from_txt_move_to = Raphael.animation({transform: 't0' + ',-40', opacity: 0}, 1100, function () {
            var to_txt_move_to = Raphael.animation({transform: 't0' + ',-60', opacity: 1}, 1100);
            to_txt.animate(to_txt_move_to)
        });
        from_txt.animate(from_txt_move_to.delay(10));
    }
    ,
    recombine: function (object, transform) {
        object.forEach(function (element, index) {
            var x = Math.cos(Math.PI * Math.round(Math.random())) * 1000;
            var y = Math.cos(Math.PI * Math.round(Math.random())) * 1000;
            if (index % 11 == 0) x = 0;
            if (index % 12 == 0) y = 0;
            if (index % 13 == 0) x = y = 1000;
            if (index % 14 == 0) x = y = -1000;
            if (index % 15 == 0) x = 0, y = -1000;
            if (index % 16 == 0) x = -1000, y = 0;
            if (index % 17 == 0) x = -1000, y = 500;
            if (index % 18 == 0) x = 1000, y = -500;
            if (index % 18 == 0) x = 500, y = -1000;
            if (index % 19 == 0) x = -500, y = -1000;
            var exploded_object = Raphael.animation({transform: 't' + x + ',' + y, opacity: 0}, 0, function () {
                var _recombined_effect = Raphael.animation({transform: transform, opacity: 1}, 2900);
                element.animate(_recombined_effect)
            });
            element.animate(exploded_object);
            setTimeout(function () {
            }, 5);
        });
    },
    floatUp: function (object, transformX) {
        var y = Math.random() * -20000;
        var duration = Math.random() * 500;
        object.forEach(function (element, index) {
            setTimeout(function () {
                fade_out_el = Raphael.animation({transform: 'T' + transformX + ',' + y, opacity: 0}, duration);
                element.animate(fade_out_el);
            }, 10);

        });
    },
    floatUpSync: function (object, transformX, transformY) {
        var fade_out_el = Raphael.animation({transform: 'T' + transformX + ',' + transformY, opacity: 0}, 1000);
        object.animate(fade_out_el);
    }
};

jQuery(window).load(function () {
    var paper = Beany.getPaperSingleton("container", jQuery(window).width(), jQuery(window).height());
    var lion = Beany.drawLion(paper);
    var heading = Beany.drawHeading(paper);
    Beany.recombine(lion, 't' + (jQuery(window).width() / 2 - 300) + ',0');

    jQuery('.scroll-down').click(function () {
        Beany.floatUp(lion, (jQuery(window).width() / 2 - 300));
        Beany.floatUpSync(paper.set(heading[0], heading[1], heading[3]), 0, -100);
        Beany.floatUpSync(paper.set(heading[2]), 0, -160)
    });
});
