var Beany = {
    /**
     * get the paper that used to draw every element(shape, path,...) on it
     * return paper if exist otherwise create the new paper and return it
     * @param id
     * @returns {*}
     */
    getPaperSingleton: function (id, width, height) {
        if (!_paper) {
            var _paper = Raphael(id);
            _paper.setViewBox(0,0,1920,1080,false);
            _paper.setSize('100%', '100%');

        }
        return _paper;
    },
    drawBg: function(paper) {
        var rect = paper.rect(0, 0, '100%', '100%');
        rect.attr("fill", "#D74D26");
        rect.attr("stroke", "none");
        return rect;
    },
    drawLion: function (rsr) {
        var path_a = rsr.path("M 521,390.301 295,204.301 421.333,187.19 521,390.301 521,390.301 521,390.301 521,390.301 z");
        path_a.attr({fill: '#B58F4F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_a');
        var path_b = rsr.path("M 402,52.301 293.417,18.504 414,120.301 402,52.301 402,52.301 402,52.301 402,52.301 z");
        path_b.attr({fill: '#CD9C4B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_b');
        var path_c = rsr.path("M 462.928,317.467 510.784,422.312 407.659,396.879 462.928,317.467 462.928,317.467 462.928,317.467 462.928,317.467 z");
        path_c.attr({fill: '#986337', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_c');
        var path_d = rsr.path("M 397.197,82.616 421.333,187.19 530,145.301 397.197,82.616 397.197,82.616 397.197,82.616 397.197,82.616 z");
        path_d.attr({fill: '#CCA54E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_d');
        var path_e = rsr.path("M 467.456,116.205 494.076,158.563 528.892,93.399 467.456,116.205 467.456,116.205 467.456,116.205 467.456,116.205 z");
        path_e.attr({fill: '#DABD69', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_e');
        var path_f = rsr.path("M 470.397,289.319 393,227.301 395.924,275.192 470.397,289.319 470.397,289.319 470.397,289.319 470.397,289.319 z");
        path_f.attr({fill: '#91623B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_f');
        var path_g = rsr.path("M 455.17,570.994 402.444,521.301 416.25,640.301 455.17,570.994 455.17,570.994 455.17,570.994 455.17,570.994 z");
        path_g.attr({fill: '#692619', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_g');
        var path_h = rsr.path("M 407.659,396.879 369.526,490.261 318.4,434.101 407.659,396.879 407.659,396.879 407.659,396.879 407.659,396.879 z");
        path_h.attr({fill: '#C7AD6C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_h');
        var path_i = rsr.path("M 502.612,515.665 448.734,510.931 455.17,570.994 502.612,515.665 502.612,515.665 502.612,515.665 502.612,515.665 z");
        path_i.attr({fill: '#8E5433', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_i');
        var path_j = rsr.path("M 369.526,490.261 328.517,599.843 230.903,491.69 369.526,490.261 z");
        path_j.attr({fill: '#7F3822', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_j');
        var path_k = rsr.path("M 622.962,405.739 510.784,422.312 575.636,497.013 622.962,405.739 622.962,405.739 622.962,405.739 622.962,405.739 z");
        path_k.attr({fill: '#BD924B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_k');
        var path_l = rsr.path("M 462.928,317.467 407.659,396.879 395.924,275.192 462.928,317.467 462.928,317.467 462.928,317.467 462.928,317.467 z");
        path_l.attr({fill: '#8D5432', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_l');
        var path_m = rsr.path("M 416.25,640.301 328.517,599.843 402.444,521.301 416.25,640.301 416.25,640.301 416.25,640.301 416.25,640.301 z");
        path_m.attr({fill: '#5A1E15', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_m');
        var path_n = rsr.path("M 416.25,640.301 347.955,750.821 328.517,599.843 416.25,640.301 416.25,640.301 416.25,640.301 416.25,640.301 z");
        path_n.attr({fill: '#521810', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_n');
        var path_o = rsr.path("M 331.634,357.034 227.227,362.25 225.295,259.479 331.634,357.034 331.634,357.034 331.634,357.034 331.634,357.034 z");
        path_o.attr({fill: '#C9A155', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_o');
        var path_p = rsr.path("M 281.031,644.398 178,670.301 230.903,491.69 281.031,644.398 281.031,644.398 281.031,644.398 281.031,644.398 z");
        path_p.attr({fill: '#B6A054', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_p');
        var path_q = rsr.path("M 281.031,644.398 230.903,491.69 328.517,599.843 281.031,644.398 281.031,644.398 281.031,644.398 281.031,644.398 z");
        path_q.attr({fill: '#8B4B2B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_q');
        var path_r = rsr.path("M 495.238,320.828 510.784,422.312 462.928,317.467 495.238,320.828 495.238,320.828 495.238,320.828 495.238,320.828 z");
        path_r.attr({fill: '#955C3B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_r');
        var path_s = rsr.path("M 514.333,288.634 592.217,295.557 539.87,231.674 514.333,288.634 514.333,288.634 514.333,288.634 514.333,288.634 z");
        path_s.attr({fill: '#E5D591', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_s');
        var path_t = rsr.path("M 175,318.301 0,334.301 227.227,362.25 175,318.301 175,318.301 175,318.301 175,318.301 z");
        path_t.attr({fill: '#E2D187', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_t');
        var path_u = rsr.path("M 161.204,225.14 242.207,178.344 225.295,259.479 161.204,225.14 161.204,225.14 161.204,225.14 161.204,225.14 z");
        path_u.attr({fill: '#B58F4F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_u');
        var path_v = rsr.path("M 227.227,362.25 266.427,449.567 230.903,491.69 227.227,362.25 227.227,362.25 227.227,362.25 227.227,362.25 z");
        path_v.attr({fill: '#BBA661', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_v');
        var path_w = rsr.path("M 502.612,515.665 573.663,506.195 622.605,566.301 502.612,515.665 502.612,515.665 502.612,515.665 502.612,515.665 z");
        path_w.attr({fill: '#D4D6B8', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_w');
        var path_x = rsr.path("M 512.612,469.598 502.612,515.665 448.734,510.931 512.612,469.598 512.612,469.598 512.612,469.598 512.612,469.598 z");
        path_x.attr({fill: '#8C4526', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_x');
        var path_y = rsr.path("M 502.612,515.665 556,537.301 455.17,570.994 502.612,515.665 502.612,515.665 502.612,515.665 502.612,515.665 z");
        path_y.attr({fill: '#A97F42', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_y');
        var path_z = rsr.path("M 573.663,506.195 512.612,469.598 575.636,497.013 573.663,506.195 573.663,506.195 573.663,506.195 573.663,506.195 z");
        path_z.attr({
            fill: 'none',
            stroke: '#E27529',
            "stroke-width": '0.6',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_z');
        var path_aa = rsr.path("M 573.663,506.195 664.569,486.373 575.636,497.013 573.663,506.195 573.663,506.195 573.663,506.195 573.663,506.195 z");
        path_aa.attr({fill: '#61261F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aa');
        var path_ab = rsr.path("M 495.238,320.828 462.928,317.467 470.397,289.319 495.238,320.828 495.238,320.828 495.238,320.828 495.238,320.828 z");
        path_ab.attr({fill: '#090509', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ab');
        var path_ac = rsr.path("M 470.397,289.319 395.924,275.192 462.928,317.467 470.397,289.319 470.397,289.319 470.397,289.319 470.397,289.319 z");
        path_ac.attr({fill: '#A87D44', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ac');
        var path_ad = rsr.path("M 69,436.301 230.903,491.69 227.227,362.25 69,436.301 69,436.301 69,436.301 69,436.301 z");
        path_ad.attr({fill: '#CAB160', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ad');
        var path_ae = rsr.path("M 470.397,289.319 514.653,288.598 509.901,305.994 470.397,289.319 470.397,289.319 470.397,289.319 470.397,289.319 z");
        path_ae.attr({fill: '#B63D1A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ae');
        var path_af = rsr.path("M 470.397,289.319 509.901,305.994 495.238,320.828 470.397,289.319 470.397,289.319 470.397,289.319 470.397,289.319 z");
        path_af.attr({fill: '#D34C1F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_af');
        var path_ag = rsr.path("M 369.526,490.261 448.734,510.931 455.17,570.994 369.526,490.261 369.526,490.261 369.526,490.261 369.526,490.261 z");
        path_ag.attr({fill: '#773522', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ag');
        var path_ah = rsr.path("M 510.784,422.312 512.612,469.598 407.659,396.879 510.784,422.312 510.784,422.312 510.784,422.312 510.784,422.312 z");
        path_ah.attr({fill: '#8F4125', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ah');
        var path_ai = rsr.path("M 369.526,490.261 328.517,599.843 402.444,521.301 369.526,490.261 369.526,490.261 369.526,490.261 369.526,490.261 z");
        path_ai.attr({fill: '#A4653C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ai');
        var path_aj = rsr.path("M 266.427,449.567 369.526,490.261 230.903,491.69 266.427,449.567 266.427,449.567 266.427,449.567 266.427,449.567 z");
        path_aj.attr({fill: '#A4653C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aj');
        var path_ak = rsr.path("M 266.427,449.567 318.4,434.101 369.526,490.261 266.427,449.567 266.427,449.567 266.427,449.567 266.427,449.567 z");
        path_ak.attr({fill: '#9E6D3A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ak');
        var path_al = rsr.path("M 512.612,469.598 407.659,396.879 369.526,490.261 512.612,469.598 512.612,469.598 512.612,469.598 512.612,469.598 z");
        path_al.attr({fill: '#7F381F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_al');
        var path_am = rsr.path("M 331.634,357.034 318.4,434.101 407.659,396.879 331.634,357.034 331.634,357.034 331.634,357.034 331.634,357.034 z");
        path_am.attr({fill: '#C09C51', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_am');
        var path_an = rsr.path("M 331.634,357.034 227.227,362.25 318.4,434.101 331.634,357.034 331.634,357.034 331.634,357.034 331.634,357.034 z");
        path_an.attr({fill: '#A88248', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_an');
        var path_ao = rsr.path("M 266.427,449.567 227.227,362.25 318.4,434.101 266.427,449.567 266.427,449.567 266.427,449.567 266.427,449.567 z");
        path_ao.attr({fill: '#BA8F4B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ao');
        var path_ap = rsr.path("M 285.273,106.136 79,52.301 153,126.301 285.273,106.136 285.273,106.136 285.273,106.136 285.273,106.136 z");
        path_ap.attr({fill: '#784A40', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ap');
        var path_aq = rsr.path("M 369.526,490.261 512.612,469.598 448.734,510.931 369.526,490.261 369.526,490.261 369.526,490.261 369.526,490.261 z");
        path_aq.attr({fill: '#986936', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aq');
        var path_ar = rsr.path("M 622.962,405.739 601.384,313.208 697.667,399.301 622.962,405.739 622.962,405.739 622.962,405.739 622.962,405.739 z");
        path_ar.attr({fill: '#BDA564', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ar');
        var path_as = rsr.path("M 175,318.301 227.227,362.25 225.295,259.479 175,318.301 175,318.301 175,318.301 175,318.301 z");
        path_as.attr({fill: '#AC7F45', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_as');
        var path_at = rsr.path("M 175,318.301 225.295,259.479 61.744,267.972 175,318.301 175,318.301 175,318.301 175,318.301 z");
        path_at.attr({fill: '#A4653C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_at');
        var path_au = rsr.path("M 44.253,221.782 161.204,225.14 225.295,259.479 44.253,221.782 44.253,221.782 44.253,221.782 44.253,221.782 z");
        path_au.attr({fill: '#A4653C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_au');
        var path_av = rsr.path("M 100,153.051 161.204,225.14 242.207,178.344 100,153.051 100,153.051 100,153.051 100,153.051 z");
        path_av.attr({fill: '#561F22', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_av');
        var path_aw = rsr.path("M 151.452,125.437 359.333,95.634 294,207.967 151.452,125.437 151.452,125.437 151.452,125.437 151.452,125.437 z");
        path_aw.attr({fill: '#B78645', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aw');
        var path_ax = rsr.path("M 421.333,187.19 544.207,187.742 539.87,231.674 421.333,187.19 421.333,187.19 421.333,187.19 421.333,187.19 z");
        path_ax.attr({fill: '#B4904B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ax');
        var path_ay = rsr.path("M 421.333,187.19 544.207,187.742 494.076,158.563 421.333,187.19 421.333,187.19 421.333,187.19 421.333,187.19 z");
        path_ay.attr({fill: '#B4863E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ay');
        var path_az = rsr.path("M 545.518,316.986 510.784,422.312 495.238,320.828 545.518,316.986 545.518,316.986 545.518,316.986 545.518,316.986 z");
        path_az.attr({fill: '#CFCA9A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_az');
        var path_ba = rsr.path("M 494.076,158.563 528.892,93.399 544.207,187.742 494.076,158.563 494.076,158.563 494.076,158.563 494.076,158.563 z");
        path_ba.attr({fill: '#E4CD80', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ba');
        var path_bb = rsr.path("M 397.197,82.616 355.826,196.239 421.333,187.19 397.197,82.616 397.197,82.616 397.197,82.616 397.197,82.616 z");
        path_bb.attr({fill: '#762D1E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bb');
        var path_bc = rsr.path("M 285.273,106.136 287.87,172.502 355.826,196.239 285.273,106.136 285.273,106.136 285.273,106.136 285.273,106.136 z");
        path_bc.attr({fill: '#D6BE75', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bc');
        var path_bd = rsr.path("M 492,558.301 474,612.301 455.17,570.994 492,558.301 492,558.301 492,558.301 492,558.301 z");
        path_bd.attr({fill: '#A26E36', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bd');
        var path_be = rsr.path("M 225.295,259.479 287.87,172.502 331.634,357.034 225.295,259.479 225.295,259.479 225.295,259.479 225.295,259.479 z");
        path_be.attr({fill: '#FEF2C7', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_be');
        var path_bf = rsr.path("M 407.659,396.879 395.924,275.192 331.634,357.034 407.659,396.879 407.659,396.879 407.659,396.879 407.659,396.879 z");
        path_bf.attr({fill: '#9A7040', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bf');
        var path_bg = rsr.path("M 587.65,236.933 544.207,187.742 539.87,231.674 587.65,236.933 587.65,236.933 587.65,236.933 587.65,236.933 z");
        path_bg.attr({fill: '#DCC193', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bg');
        var path_bh = rsr.path("M 636.667,459.759 575.636,497.013 622.962,405.739 636.667,459.759 636.667,459.759 636.667,459.759 636.667,459.759 z");
        path_bh.attr({fill: '#AC8148', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bh');
        var path_bi = rsr.path("M 287.87,172.502 293.917,259.634 354.613,243.232 287.87,172.502 287.87,172.502 287.87,172.502 287.87,172.502 z");
        path_bi.attr({fill: '#89462B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bi');
        var path_bj = rsr.path("M 354.613,243.232 355.826,196.239 287.87,172.502 354.613,243.232 354.613,243.232 354.613,243.232 354.613,243.232 z");
        path_bj.attr({fill: '#AC8245', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bj');
        var path_bk = rsr.path("M 355.826,196.239 394,228.301 354.613,243.232 355.826,196.239 355.826,196.239 355.826,196.239 355.826,196.239 z");
        path_bk.attr({fill: '#854F33', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bk');
        var path_bl = rsr.path("M 592.217,295.557 616.868,271.463 587.65,236.933 592.217,295.557 592.217,295.557 592.217,295.557 592.217,295.557 z");
        path_bl.attr({fill: '#E9E3D7', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bl');
        var path_bm = rsr.path("M 539.87,231.674 587.65,236.933 592.217,295.557 539.87,231.674 539.87,231.674 539.87,231.674 539.87,231.674 z");
        path_bm.attr({fill: '#B17D4E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bm');
        var path_bn = rsr.path("M 470.397,289.319 421.333,187.19 539.87,231.674 470.397,289.319 470.397,289.319 470.397,289.319 470.397,289.319 z");
        path_bn.attr({fill: '#CDC584', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bn');
        var path_bo = rsr.path("M 470.397,289.319 514.653,288.598 539.87,231.674 470.397,289.319 470.397,289.319 470.397,289.319 470.397,289.319 z");
        path_bo.attr({fill: '#B68F4F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bo');
        var path_bp = rsr.path("M 467.456,116.205 528.892,93.399 507.055,55.124 467.456,116.205 467.456,116.205 467.456,116.205 467.456,116.205 z");
        path_bp.attr({fill: '#F6E1B2', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bp');
        var path_bq = rsr.path("M 467.59,48.449 454.096,12.75 507.055,55.124 467.59,48.449 467.59,48.449 467.59,48.449 467.59,48.449 z");
        path_bq.attr({fill: '#D6DBB6', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bq');
        var path_br = rsr.path("M 467.456,116.205 399.06,10.837 507.055,55.124 467.456,116.205 467.456,116.205 467.456,116.205 467.456,116.205 z");
        path_br.attr({fill: '#A99253', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_br');
        var path_bs = rsr.path("M 397.197,82.616 369.842,3.187 406.816,22.843 397.197,82.616 397.197,82.616 397.197,82.616 397.197,82.616 z");
        path_bs.attr({fill: '#E1D080', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bs');
        var path_bt = rsr.path("M 467.456,116.205 397.197,82.616 406.816,22.843 467.456,116.205 467.456,116.205 467.456,116.205 467.456,116.205 z");
        path_bt.attr({fill: '#7D402D', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bt');
        var path_bu = rsr.path("M 373.985,16.043 322.88,0 397.197,82.616 373.985,16.043 373.985,16.043 373.985,16.043 373.985,16.043 z");
        path_bu.attr({fill: '#E9DC8C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bu');
        var path_bv = rsr.path("M 351.189,67.297 219.071,33.608 285.273,106.136 351.189,67.297 351.189,67.297 351.189,67.297 351.189,67.297 z");
        path_bv.attr({fill: '#622B2B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bv');
        var path_bw = rsr.path("M 512.612,469.598 502.612,515.665 573.663,506.195 512.612,469.598 512.612,469.598 512.612,469.598 512.612,469.598 z");
        path_bw.attr({fill: '#7D2C1E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bw');
        var path_bx = rsr.path("M 512.612,469.598 510.784,422.312 575.636,497.013 512.612,469.598 512.612,469.598 512.612,469.598 512.612,469.598 z");
        path_bx.attr({fill: '#AA7237', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bx');
        var path_by = rsr.path("M 573.663,506.195 664.569,486.373 622.605,566.301 573.663,506.195 573.663,506.195 573.663,506.195 573.663,506.195 z");
        path_by.attr({fill: '#FCFAED', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_by');
        var path_bz = rsr.path("M 573.663,506.195 512.612,469.598 575.636,497.013 573.663,506.195 573.663,506.195 573.663,506.195 573.663,506.195 z");
        path_bz.attr({fill: '#220C09', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bz');
        var path_ca = rsr.path("M 573.663,506.195 664.569,486.373 575.636,497.013 573.663,506.195 573.663,506.195 573.663,506.195 573.663,506.195 z");
        path_ca.attr({
            fill: 'none',
            stroke: '#E27529',
            "stroke-width": '0.6',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_ca');
        var path_cb = rsr.path("M 622.962,405.739 678.033,408.176 674.767,436.601 622.962,405.739 622.962,405.739 622.962,405.739 622.962,405.739 z");
        path_cb.attr({fill: '#461D22', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cb');
        var path_cc = rsr.path("M 697.889,399.995 678.033,408.176 674.767,436.601 697.889,399.995 697.889,399.995 697.889,399.995 697.889,399.995 z");
        path_cc.attr({fill: '#693F51', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cc');
        var path_cd = rsr.path("M 545.518,316.986 510.784,422.312 622.962,405.739 545.518,316.986 545.518,316.986 545.518,316.986 545.518,316.986 z");
        path_cd.attr({fill: '#9D7441', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cd');
        var path_ce = rsr.path("M 545.518,316.986 601.384,313.208 622.962,405.739 545.518,316.986 545.518,316.986 545.518,316.986 545.518,316.986 z");
        path_ce.attr({fill: '#B5A164', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ce');
        var path_cf = rsr.path("M 514.653,288.598 545.518,316.986 509.917,306.051 514.653,288.598 514.653,288.598 514.653,288.598 514.653,288.598 z");
        path_cf.attr({fill: '#090509', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cf');
        var path_cg = rsr.path("M 495.238,320.828 545.518,316.986 509.917,306.051 495.238,320.828 495.238,320.828 495.238,320.828 495.238,320.828 z");
        path_cg.attr({fill: '#290808', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cg');
        var path_ch = rsr.path("M 514.653,288.598 545.518,316.986 601.384,313.208 514.653,288.598 514.653,288.598 514.653,288.598 514.653,288.598 z");
        path_ch.attr({fill: '#CCB285', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ch');
        var path_ci = rsr.path("M 601.384,313.208 592.217,295.557 514.653,288.598 601.384,313.208 601.384,313.208 601.384,313.208 601.384,313.208 z");
        path_ci.attr({fill: '#884E39', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ci');
        var path_cj = rsr.path("M 607.333,297.301 601.384,313.208 697.889,399.995 607.333,297.301 607.333,297.301 607.333,297.301 607.333,297.301 z");
        path_cj.attr({fill: '#E0D6C0', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cj');
        var path_ck = rsr.path("M 601.384,313.208 616.868,271.463 592.217,295.557 601.384,313.208 601.384,313.208 601.384,313.208 601.384,313.208 z");
        path_ck.attr({fill: '#B38D60', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ck');
        var path_cl = rsr.path("M 674.767,436.601 575.636,497.013 664.569,486.373 674.767,436.601 674.767,436.601 674.767,436.601 674.767,436.601 z");
        path_cl.attr({fill: '#B9B67D', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cl');
        var path_cm = rsr.path("M 664.569,486.373 697.889,399.995 674.767,436.601 664.569,486.373 664.569,486.373 664.569,486.373 664.569,486.373 z");
        path_cm.attr({fill: '#895331', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cm');
        var path_cn = rsr.path("M 636.667,459.759 622.962,405.739 674.767,436.601 636.667,459.759 636.667,459.759 636.667,459.759 636.667,459.759 z");
        path_cn.attr({fill: '#A07F4D', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cn');
        var path_co = rsr.path("M 395.924,275.192 331.634,357.034 293.917,259.634 395.924,275.192 395.924,275.192 395.924,275.192 395.924,275.192 z");
        path_co.attr({fill: '#C2985B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_co');
        var path_cp = rsr.path("M 293.917,259.634 354.613,243.232 394.333,275.301 293.917,259.634 293.917,259.634 293.917,259.634 293.917,259.634 z");
        path_cp.attr({fill: '#AF7B41', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cp');
        var path_cq = rsr.path("M 351.189,67.297 285.273,106.136 355.826,196.239 351.189,67.297 351.189,67.297 351.189,67.297 351.189,67.297 z");
        path_cq.attr({fill: '#56171F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cq');
        var path_cr = rsr.path("M 287.87,172.502 242.207,178.344 225.295,259.479 287.87,172.502 287.87,172.502 287.87,172.502 287.87,172.502 z");
        path_cr.attr({fill: '#7A3827', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cr');
        var path_cs = rsr.path("M 351.189,67.297 355.826,196.239 397.197,82.616 351.189,67.297 351.189,67.297 351.189,67.297 351.189,67.297 z");
        path_cs.attr({fill: '#401616', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cs');
        var _x3C_Slice_x3E_ = rsr.path("M -0.864,749.536 -0.864,0.536 695.136,0.536 695.136,749.536 -0.864,749.536 -0.864,749.536 -0.864,749.536 -0.864,749.536 z");
        _x3C_Slice_x3E_.attr({
            id: '_x3C_Slice_x3E_',
            fill: 'none',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', '_x3C_Slice_x3E_');
        return Beany.toSet([path_a, path_b, path_c, path_d, path_e, path_f, path_g, path_h, path_i, path_j, path_k, path_l, path_m, path_n,
            path_o, path_p, path_q, path_r, path_s, path_t, path_u, path_v, path_w, path_x, path_y, path_x, path_z,
            path_aa, path_ab, path_ac, path_ad, path_ae, path_af, path_ag, path_ah, path_ai, path_aj, path_ak, path_al, path_am, path_an,
            path_ao, path_ap, path_aq, path_ar, path_as, path_at, path_au, path_av, path_aw, path_ax, path_ay, path_ax, path_az,
            path_ba, path_bb, path_bc, path_bd, path_be, path_bf, path_bg, path_bh, path_bi, path_bj, path_bk, path_bl, path_bm, path_bn,
            path_bo, path_bp, path_bq, path_br, path_bs, path_bt, path_bu, path_bv, path_bw, path_bx, path_by, path_bx, path_bz,
            path_ca, path_cb, path_cc, path_cd, path_ce, path_cf, path_cg, path_ch, path_ci, path_cj, path_ck, path_cl, path_cm, path_cn,
            path_co, path_cp, path_cq, path_cr, path_cs, _x3C_Slice_x3E_], rsr);
    },
    drawHeading: function (paper) {
        var txt1 = paper.text(1920 / 2 - 200, 1080 / 2 + 160, "5 ");
        var txt2 = paper.text(1920 / 2  - 75, 1080 / 2 + 160, "PROJECTS");
        var txt3 = paper.text(1920 / 2  - 75, 1080 / 2 + 170, "YEARS");
        var txt4 = paper.text(1920 / 2 - 20, 1080/ 2 + 230, "WITH");
        var txt5 = paper.text(1920 / 2 + 140, 1080/ 2 + 230, "SUTUNAM");

        var big_txt = paper.set(txt1, txt2, txt3);
        var small_txt = paper.set(txt4, txt5);

        big_txt.attr({
            "fill": "#fff",
            "font-size": 100,
            "text-anchor": "start",
            "font-family": "gotham-exlight",
            "letter-spacing": "2px",
            "opacity": 0
        });
        small_txt.attr({"fill": "brown", "font-size": 35, "font-family": "gotham-bold", "opacity": 1});
        var txt_set = paper.set(txt1, txt2);
        var faded_txt = Raphael.animation({transform: 't0' + ',-20', opacity: 1}, 2000, function () {
            //Beany.transformEffect(txt2, txt3);
        });
        txt_set.animate(faded_txt.delay(2000));

        return paper.set([txt1, txt2, txt3, txt4,txt5]);
    },
    drawBtn: function (paper) {
        var path_a = paper.path("M24,30c0,5.5-4.5,10-10,10h-4C4.5,40,0,35.5,0,30V10 C0,4.5,4.5,0,10,0h4c5.5,0,10,4.5,10,10V30z");
        path_a.attr({
            fill: 'none',
            stroke: '#000000',
            "stroke-miterlimit": '10',
            'stroke-width': '1',
            'stroke-opacity': '1'
        }).data('id', 'path_a');
        var path_b = paper.path("M16,17.7c0,1.8-1.5,3.3-3.3,3.3h-1.5C9.5,21,8,19.5,8,17.7V9.3 C8,7.5,9.5,6,11.3,6h1.5C14.5,6,16,7.5,16,9.3V17.7z");
        path_b.attr({
            fill: '#393939',
            stroke: '#000000',
            "stroke-miterlimit": '10',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_b');
        var ellipse_c = paper.ellipse(12.7, 9.5, 2.2, 2.5);
        ellipse_c.attr({
            fill: '#FFFFFF',
            stroke: '#000000',
            "stroke-miterlimit": '10',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'ellipse_c');
        var tbn_el = paper.set(path_a, path_b, ellipse_c);
        tbn_el.attr({"transform": "t" + (1920 / 2 - 10) + "," + (1080 / 2 + 300)});

        return Beany.toSet([path_a,path_b,ellipse_c], paper);
    },
    drawBackground: function (rsr) {
        var path_a = rsr.path("M 38.896,176.805 215.519,219.662 29.805,302.779 z");
        path_a.attr({
            fill: '#E65525',
            'stroke-width': '0',
            'stroke-opacity': '1',
            'transform': 't0,700 s2,2 r45',
            'opacity': 0
        }).data('id', 'path_a');
        var path_a_animated = Raphael.animation({'transform': 't0,600 s2,2 r0', 'opacity': 1}, 5000, "easeInOut");
        path_a.animate(path_a_animated);

        var path_b = rsr.path("M 393.442,359.273 363.571,458.623 489.545,422.909 z");
        path_b.attr({
            fill: '#E65525',
            'stroke-width': '0',
            'stroke-opacity': '1',
            'transform': 't1300,800 s2,2',
            'opacity': 0
        }).data('id', 'path_b');
        var path_b_animated = Raphael.animation({'transform': 't1300,600 s2,2 r0', 'opacity': 1}, 5000, "easeInOut");
        path_b.animate(path_b_animated);

        var path_c = rsr.path("M 246.688,538.494 192.143,542.39 227.857,478.753 z");
        path_c.attr({
            fill: '#E65525',
            'stroke-width': '0',
            'stroke-opacity': '1',
            'transform': 't200,300 s2,2',
            'opacity': 0
        }).data('id', 'path_c');
        var path_c_animated = Raphael.animation({'transform': 't200,-200 s2,2', 'opacity': 1}, 5000, "easeInOut");
        path_c.animate(path_c_animated);

        var path_d = rsr.path("M 206.429,95.636 219.416,56.675 259.026,119.013 z");
        path_d.attr({
            fill: '#E65525',
            'stroke-width': '0',
            'stroke-opacity': '1',
            'transform': 't1300,-200 s2,2 r0',
            'opacity': 1
        }).data('id', 'path_d');
        var path_d_animated = Raphael.animation({'transform': 't1300,-100 s2,2 r0', 'opacity': 1}, 5000, "easeInOut");
        path_d.animate(path_d_animated);

        var path_e = rsr.path("M 414.221,156.675 413.571,168.364 426.558,162.519 z");
        path_e.attr({fill: '#E65525', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_e');

        var path_f = rsr.path("M 502.532,4.078 405.13,56.675 511.623,43.039 z");
        path_f.attr({
            fill: '#E65525',
            'stroke-width': '0',
            'stroke-opacity': '1',
            'transform': 't1300,100 s2,2',
            'opacity': 0
        }).data('id', 'path_f');
        var path_f_animated = Raphael.animation({'transform': 't1300,0 s2,2 r0', 'opacity': 1}, 5000, "easeInOut");
        path_f.animate(path_f_animated);
    }
    ,
    toSet: function (arr, paper) {
        var _set = paper.set();
        for (var i = 0; i < arr.length; i++) {
            _set.push(arr[i]);
        }
        return _set;
    },
    transformEffect: function (from_txt, to_txt) {
        var from_txt_move_to = Raphael.animation({transform: 't0' + ',-40', opacity: 0}, 1000, function () {
            var to_txt_move_to = Raphael.animation({transform: 't0' + ',-30', opacity: 1}, 1000);
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
            if (index % 20 == 0) x = -200, y = -1000;
            if (index % 21 == 0) x = 200, y = 1000;
            if (index % 23 == 0) x = -200, y = -1000;
            if (index % 25 == 0) x = 200, y = 1000;
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

        object.forEach(function (element, index) {
            var y = Math.random() * -20000;
            var duration = Math.random() * 1800;
            setTimeout(function () {
                fade_out_el = Raphael.animation({transform: 'T' + transformX + ',' + y, opacity: 0}, duration);
                element.animate(fade_out_el);
            }, 100);

        });
    },
    floatUpSync: function (object,transformX, transformY) {
        var fade_out_el = Raphael.animation({transform: 'T' +transformX+',' + transformY, opacity: 0}, 3000);
        object.animate(fade_out_el);
    },
    changeBgColor: function(object, color) {
        object.animate({fill : color},2000);
    },
    fadeOut: function(object) {
        object.animate({opacity: 0}, 1000);
    }
};

jQuery(window).load(function () {
    var state = 1;
    var paper = Beany.getPaperSingleton("container", jQuery(window).width(), jQuery(window).height());
    var bg = Beany.drawBg(paper);
    var lion = Beany.drawLion(paper);
    var heading = Beany.drawHeading(paper);
    var btn = Beany.drawBtn(paper);
    var lion_wrapper = (1920/2)-(lion[lion.length - 1 ].getBBox(true).width/2);
    Beany.recombine(lion, 't' + (lion_wrapper)+ ',50');


    btn.click(function() {
        console.log('click')
        if(state == 1) {
            Beany.transformEffect(heading[1], heading[2])
            state++;
        }
        else if(state == 2) {
            Beany.floatUp(lion, lion_wrapper);
            Beany.floatUpSync(heading,0, -1000);
            Beany.fadeOut(btn);
            Beany.changeBgColor(bg, '#000');
            state++;
        }
    })
});