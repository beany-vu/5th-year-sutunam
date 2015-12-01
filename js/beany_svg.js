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
            _paper.setViewBox(0, 0, 1920, 1080, true);
            _paper.setSize('100%', '100%');

        }
        return _paper;
    },
    drawBg: function (id) {
        var bg_container = Raphael("background");
        bg_container.setViewBox(0, 0, '100%', '100%', true);
        bg_container.setSize('100%', '100%');
        var rect = bg_container.rect(0, 0, '100%', '100%');
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
    drawCresus: function (rsr) {
        var path_d = rsr.path("M 971.9,497.7 913,598.2 977,498.9 z");
        path_d.attr({
            fill: 'none',
            stroke: '#F6F5F5',
            "stroke-width": '0.5',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_d');
        var path_e = rsr.path("M 974.2,500.9 1085.4,468.2 973.1,496.2 z");
        path_e.attr({fill: '#F3E2E4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_e');
        var path_f = rsr.path("M 974.8,495.8 958.5,450.9 969.8,497.9 z");
        path_f.attr({fill: '#FFFFFF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_f');
        var path_g = rsr.path("M 899.5,739.3 965.9,679.7 897.7,639.2 z");
        path_g.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.38',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_g');
        var path_h = rsr.path("M 995.4,659 968.7,650 1061.7,632 z");
        path_h.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.11',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_h');
        var path_i = rsr.path("M 1087.3,606.8 1083,633.7 1109.4,622.8 z");
        path_i.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.6',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_i');
        var path_j = rsr.path("M 1225.6,678.4 1255.1,720 1261.3,700.7 z");
        path_j.attr({
            opacity: '0.7',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.5',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_j');
        var path_k = rsr.path("M 1194.8,389.7 1311.1,309.2 1174.6,336 z");
        path_k.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.45',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_k');
        var path_l = rsr.path("M 871.4,691 899.5,739.3 823.6,725.1 z");
        path_l.attr({
            opacity: '0.8',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-miterlimit": '10',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_l');
        var path_m = rsr.path("M 878.2,653.6 871.4,691 840.5,682.4 z");
        path_m.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_m');
        var path_n = rsr.path("M 844.1,626.6 838.6,642.1 853.5,629.5 z");
        path_n.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.78',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_n');
        var path_o = rsr.path("M 838.4,642.3 863.2,669.8 821.2,701.5 z");
        path_o.attr({
            opacity: '0.7',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.8',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_o');
        var path_p = rsr.path("M 899.5,739.3 835.3,898.8 823.6,725.1 z");
        path_p.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.34',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_p');
        var path_q = rsr.path("M 952.7,739.4 832.2,773.8 922.5,792.2 z");
        path_q.attr({
            opacity: '0.7',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.8',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_q');
        var path_r = rsr.path("M 849.8,599.8 843.7,627.6 840,587.9 z");
        path_r.attr({
            opacity: '0.7',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.7',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_r');
        var path_s = rsr.path("M 840,587.2 843,626.3 832.5,618.8 z");
        path_s.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.2',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_s');
        var path_t = rsr.path("M 965.9,679.7 986,646.9 1020.2,640.6 z");
        path_t.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.22',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_t');
        var path_u = rsr.path("M 861.4,839.9 769.1,834.9 837.4,955.9 z");
        path_u.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#F2C68E',
            "stroke-width": '0.4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_u');
        var path_v = rsr.path("M 965.9,679.7 1019.9,640.8 1003.7,700.6 z");
        path_v.attr({
            opacity: '0.7',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.7',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_v');
        var path_w = rsr.path("M 871.4,691 832.2,773.8 840.5,682.4 z");
        path_w.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.3',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_w');
        var path_x = rsr.path("M 1135.4,789.9 1075.7,801.4 1083.9,779 z");
        path_x.attr({fill: '#EBC99D', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_x');
        var path_y = rsr.path("M 1273.1,249.9 1348.4,263.4 1310.1,218.6 z");
        path_y.attr({
            opacity: '0.7',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.7',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_y');
        var path_z = rsr.path("M 244.4,1025.9 548.3,866.4 706.4,998.9 z");
        path_z.attr({fill: '#27242B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_z');
        var path_aa = rsr.path("M 789.9,232.2 866.7,176.9 765.7,266.4 z");
        path_aa.attr({
            opacity: '0.7',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.3',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_aa');
        var path_ab = rsr.path("M 1072.8,394.7 983.8,379 987.8,385.1 z");
        path_ab.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.78',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_ab');
        var path_ac = rsr.path("M 954.6,665.4 965.9,679.7 878.2,653.6 z");
        path_ac.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.3',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_ac');
        var path_ad = rsr.path("M 1086.3,398.2 1054.4,390.4 1136.1,449.7 z");
        path_ad.attr({fill: '#AA814E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ad');
        var path_ae = rsr.path("M 859,453.7 886.1,422.4 915.6,408 z");
        path_ae.attr({
            opacity: '0.7',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_ae');
        var path_af = rsr.path("M 922.5,792.2 823.6,725.1 840.5,682.4 z");
        path_af.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.3',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_af');
        var path_ag = rsr.path("M 845.3,529.9 859,453.7 831.8,528.3 z");
        path_ag.attr({
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.2',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_ag');
        var path_ah = rsr.path("M 1011.5,914.4 1022.7,924 1030.1,912.6 z");
        path_ah.attr({fill: '#7D5A32', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ah');
        var path_ai = rsr.path("M 965.4,492.6 979.2,490.4 982.7,503.3 z");
        path_ai.attr({fill: '#CDA56B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ai');
        var path_aj = rsr.path("M 878.2,653.6 965.9,679.7 952.7,739.4 z");
        path_aj.attr({fill: '#AB814F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aj');
        var path_ak = rsr.path("M 954.6,665.4 948.6,717.6 899.5,739.3 z");
        path_ak.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.25',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_ak');
        var path_al = rsr.path("M 1159.5,435.1 1139.2,416.3 1136.1,449.7 z");
        path_al.attr({
            opacity: '0.7',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.78',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_al');
        var path_am = rsr.path("M 1124.1,328.9 1105.3,303.1 1144.9,292.5 z");
        path_am.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.3',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_am');
        var path_an = rsr.path("M 840,587.2 852.6,582.3 867.4,621 z");
        path_an.attr({fill: '#5B4228', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_an');
        var path_ao = rsr.path("M 1107.9,558.9 1108.4,591 1140.6,537.6 z");
        path_ao.attr({
            opacity: '0.7',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.8',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_ao');
        var path_ap = rsr.path("M 831.8,528.3 852.6,582.3 845.3,529.9 z");
        path_ap.attr({fill: '#CCA46A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ap');
        var path_aq = rsr.path("M 1754.9,724.9 1656.1,1012.4 1458,760.9 z");
        path_aq.attr({fill: '#27242B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aq');
        var path_ar = rsr.path("M 806.7,764.8 798.1,716.1 763.6,805.9 z");
        path_ar.attr({fill: '#7D5A32', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ar');
        var path_as = rsr.path("M 880.6,362.6 881.5,326.9 889.1,351.1 z");
        path_as.attr({fill: '#CDA56B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_as');
        var path_at = rsr.path("M 1231.3,282.7 1224.3,306.1 1273.1,249.9 z");
        path_at.attr({
            opacity: '0.7',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.7',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_at');
        var path_au = rsr.path("M 1177.1,509 1141.9,515.8 1148.9,496.8 z");
        path_au.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.14',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_au');
        var path_av = rsr.path("M 1132.2,443.9 1206.1,408.9 1120.1,372.2 z");
        path_av.attr({
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.7',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_av');
        var path_aw = rsr.path("M 1167.5,328.9 1117,321.8 1099,355.8 z");
        path_aw.attr({
            opacity: '0.7',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '1.5',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_aw');
        var path_ax = rsr.path("M 914.8,402.1 987.8,385.1 915.6,408 z");
        path_ax.attr({
            opacity: '0.7',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.6',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_ax');
        var path_ay = rsr.path("M 1311.1,309.2 1254.1,288.2 1348.4,263.4 z");
        path_ay.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_ay');
        var path_az = rsr.path("M 858.2,875.5 857.4,935.9 943.4,880.9 z");
        path_az.attr({
            opacity: '0.5',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.3',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_az');
        var path_ba = rsr.path("M 1081,358.4 1144.9,292.5 1174.6,336 z");
        path_ba.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_ba');
        var path_bb = rsr.path("M 746,405.5 723.9,397.7 755.1,399.7 z");
        path_bb.attr({fill: '#7D5A32', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bb');
        var path_bc = rsr.path("M 867.4,621 898.2,639.2 852.6,582.3 z");
        path_bc.attr({fill: '#AA814E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bc');
        var path_bd = rsr.path("M 1142.1,484.6 1173.6,488 1141.4,516.6 z");
        path_bd.attr({
            opacity: '0.7',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.3',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_bd');
        var path_be = rsr.path("M 1116.7,430.1 1139.2,416.3 1136.1,449.7 z");
        path_be.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.78',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_be');
        var path_bf = rsr.path("M 1254.1,288.2 1273.1,249.9 1144.9,292.5 z");
        path_bf.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.71',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_bf');
        var path_bg = rsr.path("M 1072.9,595.4 1052,634.2 1090.1,622.6 z");
        path_bg.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.3',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_bg');
        var path_bh = rsr.path("M 1090.4,622.6 1081.4,644.2 1061.7,632 z");
        path_bh.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.29',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_bh');
        var path_bi = rsr.path("M 1109.4,622.8 1104.5,640.4 1090.4,622.6 z");
        path_bi.attr({fill: '#F3E2E4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bi');
        var path_bj = rsr.path("M 1162.5,187.8 1277.2,112.6 1143.7,54.9 z");
        path_bj.attr({fill: '#F3E2E4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bj');
        var path_bk = rsr.path("M 1194.8,389.7 1311.1,309.2 1106.2,362.9 z");
        path_bk.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.3',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_bk');
        var path_bl = rsr.path("M 1019.9,640.8 954.6,665.4 900,641.2 z");
        path_bl.attr({
            opacity: '0.6',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_bl');
        var path_bm = rsr.path("M 1048.4,378.6 1054.4,390.8 1086.7,398 z");
        path_bm.attr({fill: '#EBC99D', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bm');
        var path_bn = rsr.path("M 915.6,408 886.9,422 914.8,402.1 z");
        path_bn.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_bn');
        var path_bo = rsr.path("M 1194.8,389.7 1132.2,443.9 1001.2,378.7 z");
        path_bo.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.3',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_bo');
        var path_bp = rsr.path("M 859,453.7 880.4,436.6 831.8,528.3 z");
        path_bp.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#F2C68E',
            "stroke-width": '0.4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_bp');
        var path_bq = rsr.path("M 996,695.6 943.9,881.2 922.5,792.2 z");
        path_bq.attr({
            opacity: '0.6',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.6',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_bq');
        var path_br = rsr.path("M 914.8,402.1 984.3,379.2 987.8,385.1 z");
        path_br.attr({
            opacity: '0.7',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.6',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_br');
        var path_bs = rsr.path("M 1091.9,378.1 1085.4,411.7 1106.2,362.9 z");
        path_bs.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.5',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_bs');
        var path_bt = rsr.path("M 1091.9,378.1 1103.7,415.9 1139.2,416.3 z");
        path_bt.attr({
            opacity: '0.6',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_bt');
        var path_bu = rsr.path("M 943.9,881.2 880.3,819 858.2,875.5 z");
        path_bu.attr({
            opacity: '0.7',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.7',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_bu');
        var path_bv = rsr.path("M 1072.9,242.1 1058.5,192.8 1080.9,205.4 z");
        path_bv.attr({
            opacity: '0.7',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.5',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_bv');
        var path_bw = rsr.path("M 860.3,829 769.1,824.9 812.2,783.8 z");
        path_bw.attr({
            opacity: '0.7',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.7',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_bw');
        var path_bx = rsr.path("M 866.7,176.9 765.7,266.4 780.8,299.2 z");
        path_bx.attr({
            opacity: '0.7',
            fill: 'none',
            stroke: '#F2C68E',
            "stroke-width": '0.6',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_bx');
        var path_by = rsr.path("M 1104.5,640.4 1083,633.7 1081.4,644.2 z");
        path_by.attr({
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.1',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_by');
        var path_bz = rsr.path("M 1311.1,309.2 1254.1,288.2 1174.6,336 z");
        path_bz.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.71',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_bz');
        var path_ca = rsr.path("M 902.3,625.1 898.2,639.2 852.6,582.3 z");
        path_ca.attr({fill: '#F2C68E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ca');
        var path_cb = rsr.path("M 863.2,669.8 853.8,629.5 878.2,653.6 z");
        path_cb.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.5',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_cb');
        var path_cc = rsr.path("M 963.5,638.3 968.7,650.3 898.2,639.2 z");
        path_cc.attr({fill: '#7D5A32', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cc');
        var path_cd = rsr.path("M 840,587.2 852.6,582.3 831.8,528.3 z");
        path_cd.attr({fill: '#61492C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cd');
        var path_ce = rsr.path("M 1032.7,622.7 1052,634.2 1107.9,558.9 z");
        path_ce.attr({fill: '#AA814E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ce');
        var path_cf = rsr.path("M 1140.6,537.6 1136.1,449.7 1142.1,484.6 z");
        path_cf.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.78',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_cf');
        var path_cg = rsr.path("M 1105.3,303.1 1001.2,378.7 1106.2,362.9 z");
        path_cg.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.3',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_cg');
        var path_ch = rsr.path("M 1136.1,449.7 1103.6,415.9 1132.4,486 z");
        path_ch.attr({
            opacity: '0.7',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.7',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_ch');
        var path_ci = rsr.path("M 902.3,625.1 963.5,638.3 898.2,639.2 z");
        path_ci.attr({fill: '#AA814E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ci');
        var path_cj = rsr.path("M 1001.2,378.7 1079.8,358.4 1105.3,303.1 z");
        path_cj.attr({
            opacity: '0.7',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.5',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_cj');
        var path_ck = rsr.path("M 968.7,650.3 963.5,638.3 1032.7,622.7 z");
        path_ck.attr({fill: '#F2C68E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ck');
        var path_cl = rsr.path("M 843.7,626.3 867.4,621 866.3,629.7 z");
        path_cl.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.3',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_cl');
        var path_cm = rsr.path("M 1108.4,591 1108.4,591 1107.9,558.9 z");
        path_cm.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.38',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_cm');
        var path_cn = rsr.path("M 1107.9,558.9 1052,634.2 1108.4,591 z");
        path_cn.attr({fill: '#F2C68E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cn');
        var path_co = rsr.path("M 1108.4,591 968.7,650.3 1052,634.2 z");
        path_co.attr({fill: '#7D5A32', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_co');
        var path_cp = rsr.path("M 1140.6,537.6 1132.4,486 1107.9,558.9 z");
        path_cp.attr({
            opacity: '0.7',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-miterlimit": '10',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cp');
        var path_cq = rsr.path("M 983.8,379 1048.4,378.6 1054.4,390.4 z");
        path_cq.attr({
            opacity: '0.3',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.63',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_cq');
        var path_cr = rsr.path("M 1157.6,665.5 1059.5,723.3 1141,708.8 z");
        path_cr.attr({
            opacity: '0.6',
            fill: 'none',
            stroke: '#CCA46A',
            "stroke-width": '0.7',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_cr');
        var path_cs = rsr.path("M 1063.3,513.2 1049.7,538.5 1080.9,537 z");
        path_cs.attr({fill: '#CDA56B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cs');
        var path_ct = rsr.path("M 712.2,633 749.2,637.2 751.9,656.8 z");
        path_ct.attr({fill: '#7D5A32', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ct');
        var path_cu = rsr.path("M 965.4,492.6 982.7,503.3 968.4,506.1 z");
        path_cu.attr({fill: '#AA814E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cu');
        var path_cv = rsr.path("M 1173.6,487.6 1148.9,496.8 1177.1,509 z");
        path_cv.attr({fill: '#F3E2E4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cv');
        return Beany.toSet([path_d, path_e, path_f, path_g, path_h, path_i, path_j, path_k, path_l, path_m, path_n,
            path_o, path_p, path_q, path_r, path_s, path_t, path_u, path_v, path_w, path_x, path_y, path_x, path_z,
            path_aa, path_ab, path_ac, path_ad, path_ae, path_af, path_ag, path_ah, path_ai, path_aj, path_ak, path_al, path_am, path_an,
            path_ao, path_ap, path_aq, path_ar, path_as, path_at, path_au, path_av, path_aw, path_ax, path_ay, path_ax, path_az,
            path_ba, path_bb, path_bc, path_bd, path_be, path_bf, path_bg, path_bh, path_bi, path_bj, path_bk, path_bl, path_bm, path_bn,
            path_bo, path_bp, path_bq, path_br, path_bs, path_bt, path_bu, path_bv, path_bw, path_bx, path_by, path_bx, path_bz,
            path_ca, path_cb, path_cc, path_cd, path_ce, path_cf, path_cg, path_ch, path_ci, path_cj, path_ck, path_cl, path_cm, path_cn,
            path_co, path_cp, path_cq, path_cr, path_cs, path_ct, path_cu, path_cv], rsr);
    },
    drawDurance: function (rsr) {
        var path_e = rsr.path("M 1271.2,394.9 1277.4,393.3 1342.6,584.3 z");
        path_e.attr({fill: '#D8AC8A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_e');


        var path_f = rsr.path("M 1367.6,391.7 1313.9,566.3 1371.2,395.1 z");
        path_f.attr({fill: '#D8AC8A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_f');


        var path_g = rsr.path("M 1358.1,387.1 1361.7,389.4 1308.2,577 z");
        path_g.attr({fill: '#E7C94C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_g');


        var path_h = rsr.path("M 1343.2,587.7 1262,384.9 1257.7,386.6 z");
        path_h.attr({fill: '#E7C94C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_h');


        var path_i = rsr.path("M 1323.4,366 1329.6,365.9 1321.2,621.6 z");
        path_i.attr({fill: '#E7C94C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_i');


        var path_j = rsr.path("M 1324.6,590 1308.8,347.9 1305.3,349.5 z");
        path_j.attr({fill: '#D8AC8A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_j');


        var path_k = rsr.path("M 1121,480.6 1098.7,628.2 1145.3,628.2 z");
        path_k.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_k');


        var path_l = rsr.path("M 1375.9,629.7 1412.3,629.7 1400.6,495 z");
        path_l.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_l');


        var path_m = rsr.path("M 1269,544.5 1379.1,642.1 1375.8,541.9 z");
        path_m.attr({fill: '#9E6641', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_m');


        var path_n = rsr.path("M 1375.8,541.9 1361.2,560.7 1379.1,642.1 z");
        path_n.attr({fill: '#514032', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_n');


        var path_o = rsr.path("M 1289.2,505 1349.5,496 1347.8,503.1 z");
        path_o.attr({fill: '#9E6641', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_o');


        var path_p = rsr.path("M 1321.9,500.5 1288.8,499.2 1289.2,505 z");
        path_p.attr({fill: '#514032', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_p');


        var path_q = rsr.path("M 1335.5,525.3 1350.2,534.1 1339.3,503.1 z");
        path_q.attr({fill: '#5C351F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_q');


        var path_r = rsr.path("M 1303.7,532.4 1375.8,541.9 1350.2,534.1 z");
        path_r.attr({fill: '#7B4830', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_r');


        var path_s = rsr.path("M 1375.8,541.9 1269,544.5 1303.7,532.4 z");
        path_s.attr({fill: '#6F462C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_s');


        var path_t = rsr.path("M 1303.7,532.4 1350.2,534.1 1335.5,525.3 z");
        path_t.attr({fill: '#4B3322', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_t');


        var path_u = rsr.path("M 1304,504.5 1335.5,525.3 1303.7,532.4 z");
        path_u.attr({fill: '#7B4830', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_u');


        var path_v = rsr.path("M 1346.6,612.5 1266.8,642.1 1269,544.5 z");
        path_v.attr({fill: '#5C351F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_v');


        var path_w = rsr.path("M 1304,504.5 1335.5,525.3 1339.3,503.1 z");
        path_w.attr({fill: '#885E43', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_w');


        var path_x = rsr.path("M 1109.3,565.1 1070.7,567.9 1125.5,574.5 z");
        path_x.attr({fill: '#F9F9FA', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_x');


        var path_y = rsr.path("M 1443.6,629.7 1449.2,563.9 1463.9,629.7 z");
        path_y.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_y');


        var path_z = rsr.path("M 1011.1,591.7 1018.9,603.1 1002.5,603.1 z");
        path_z.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_z');


        var path_aa = rsr.path("M 1125.5,574.5 1068.6,580.9 1124.9,619.5 z");
        path_aa.attr({fill: '#F9F9FA', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aa');


        var path_ab = rsr.path("M 1123,648.1 1089,633.5 1124.9,619.5 z");
        path_ab.attr({fill: '#F4F4F4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ab');


        var path_ac = rsr.path("M 1176.3,362 1175.5,353.1 1179.3,358.6 z");
        path_ac.attr({fill: '#F7F192', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ac');


        var path_ad = rsr.path("M 1022.9,624.2 999.2,624.2 1011.6,605 z");
        path_ad.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ad');


        var path_ae = rsr.path("M 1168.9,673.2 1185.6,598 1138.2,468.4 z");
        path_ae.attr({fill: '#9A3B64', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ae');


        var path_af = rsr.path("M 1176,425.7 1183.8,362 1191.8,417.3 z");
        path_af.attr({fill: '#F5EB16', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_af');


        var path_ag = rsr.path("M 1111.1,609.9 1073.8,584.5 1074.2,653.7 z");
        path_ag.attr({fill: '#F4F4F4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ag');


        var path_ah = rsr.path("M 1069,516.5 1073.5,552.5 1060.5,542.7 z");
        path_ah.attr({fill: '#F6C813', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ah');


        var path_ai = rsr.path("M 1123,648.1 1074.2,653.7 1089,633.5 z");
        path_ai.attr({fill: '#F1D5E4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ai');


        var path_aj = rsr.path("M 1170.5,476.9 1185.6,598 1221.1,475.8 z");
        path_aj.attr({fill: '#ED4F81', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aj');


        var path_ak = rsr.path("M 1000,614.7 1011.6,596.7 1022,614.7 z");
        path_ak.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ak');


        var path_al = rsr.path("M 1170.5,476.9 1138.2,468.4 1213.8,450.1 z");
        path_al.attr({fill: '#D8417D', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_al');


        var path_am = rsr.path("M 1168.9,673.2 1154,573.8 1136.3,668.3 z");
        path_am.attr({fill: '#CA4178', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_am');


        var path_an = rsr.path("M 1170.5,476.9 1185.6,598 1138.2,468.4 z");
        path_an.attr({fill: '#AE3C68', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_an');


        var path_ao = rsr.path("M 1025.3,645.4 1033.7,626 1074.2,653.7 z");
        path_ao.attr({fill: '#F1D5E4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ao');


        var path_ap = rsr.path("M 1401.6,497.9 1416,629.7 1404.2,629.7 z");
        path_ap.attr({fill: '#DBD0D3', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ap');


        var path_aq = rsr.path("M 1213.8,450.1 1260.9,465.2 1221.1,475.8 z");
        path_aq.attr({fill: '#F26F8C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aq');


        var path_ar = rsr.path("M 1025.2,575.1 1070.7,567.9 1033.5,562.1 z");
        path_ar.attr({fill: '#F4F4F4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ar');


        var path_as = rsr.path("M 1033.7,626 1056.9,579.2 1073.8,584.5 z");
        path_as.attr({fill: '#F9F9FA', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_as');


        var path_at = rsr.path("M 1591.1,602 1608.8,681.9 1528.2,681.9 z");
        path_at.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_at');


        var path_au = rsr.path("M 891.4,299.2 889.6,317.1 880.8,326.4 z");
        path_au.attr({fill: '#762369', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_au');


        var path_av = rsr.path("M 289.2,660.6 342.7,563.1 357.7,660.6 z");
        path_av.attr({fill: '#DBD0D3', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_av');


        var path_aw = rsr.path("M 958.6,629.7 973.4,494.9 915.2,629.7 z");
        path_aw.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aw');


        var path_ax = rsr.path("M 1073.8,584.5 1074.2,653.7 1033.7,626 z");
        path_ax.attr({fill: '#F9F9FA', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ax');


        var path_ay = rsr.path("M 1229.5,676.8 1168.9,673.2 1185.6,598 z");
        path_ay.attr({fill: '#EF5489', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ay');


        var path_az = rsr.path("M 1025.3,645.4 1025.2,575.1 1056.9,579.2 z");
        path_az.attr({fill: '#F2EFF0', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_az');
        var path_ba = rsr.path("M 1217.1,419.6 1183.8,362 1191.8,417.3 z");
        path_ba.attr({fill: '#F4EB2B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ba');
        var path_bb = rsr.path("M 1089,633.5 1124.9,619.5 1111.1,609.9 z");
        path_bb.attr({fill: '#F4EDF0', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bb');
        var path_bc = rsr.path("M 1266.8,642.1 1379.1,642.1 1344.9,611 z");
        path_bc.attr({fill: '#7B4830', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bc');
        var path_bd = rsr.path("M 1200.8,461.8 1199.7,443.1 1195.9,442.5 z");
        path_bd.attr({fill: '#3F1944', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bd');


        var path_be = rsr.path("M 1136.3,668.3 1154,573.8 1142.3,573.1 z");
        path_be.attr({fill: '#6F2E4C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_be');
        var path_bf = rsr.path("M 1262.3,663.3 1221.1,475.8 1185.6,598 z");
        path_bf.attr({fill: '#962E62', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bf');


        var path_bg = rsr.path("M 1423.8,638.2 1438.2,638.2 1430.6,611.7 z");
        path_bg.attr({fill: '#DBD0D3', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bg');


        var path_bh = rsr.path("M 1142.2,573.1 1138.2,468.4 1154,573.8 z");
        path_bh.attr({fill: '#B6426F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bh');
        var path_bi = rsr.path("M 1070.7,567.9 1025.2,575.1 1068.6,580.9 z");
        path_bi.attr({fill: '#FFFFFF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bi');


        var path_bj = rsr.path("M 1221.1,475.8 1213.8,450.1 1170.5,476.9 z");
        path_bj.attr({fill: '#F59BAE', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bj');


        var path_bk = rsr.path("M 1109.3,565.1 1070.7,567.9 1083.8,557.8 z");
        path_bk.attr({fill: '#F4F4F4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bk');
        var path_bl = rsr.path("M 1096.2,769.9 1055.3,658.8 1062,769.9 z");
        path_bl.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bl');


        var path_bm = rsr.path("M 1068.6,580.9 1125.5,574.5 1070.7,567.9 z");
        path_bm.attr({fill: '#F4F4F4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bm');
        var path_bn = rsr.path("M 257,451.4 198,707.2 324.4,707.2 z");
        path_bn.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bn');
        var path_bo = rsr.path("M 1069,516.5 1070.6,495.3 1060.5,542.7 z");
        path_bo.attr({fill: '#F7F192', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bo');
        var path_bp = rsr.path("M 1644,525.8 1684.9,651.5 1630,651.5 z");
        path_bp.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bp');


        var path_bq = rsr.path("M 1185.2,351.4 1186.9,342.1 1182.7,347.2 z");
        path_bq.attr({fill: '#F4EB2B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bq');


        var path_br = rsr.path("M 1262.3,663.3 1185.6,598 1229.5,676.8 z");
        path_br.attr({fill: '#CA4178', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_br');


        var path_bs = rsr.path("M 1221.1,475.8 1260.9,465.2 1262.3,663.3 z");
        path_bs.attr({fill: '#CE3D77', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bs');
        var path_bt = rsr.path("M 1191.8,417.3 1198.9,447.2 1217.1,419.6 z");
        path_bt.attr({fill: '#F5EB16', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bt');
        var path_bu = rsr.path("M 1068.6,580.9 1056.9,579.2 1073.8,584.5 z");
        path_bu.attr({fill: '#F9F9FA', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bu');


        var path_bv = rsr.path("M 1070.6,495.3 1090.9,537.8 1069,516.5 z");
        path_bv.attr({fill: '#FEDF00', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bv');
        var path_bw = rsr.path("M 878.4,268.1 891.4,299.2 912,258.1 z");
        path_bw.attr({fill: '#D0489A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bw');
        var path_bx = rsr.path("M 850.3,215.1 901.8,261.1 912,258.1 z");
        path_bx.attr({fill: '#D73493', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bx');
        var path_by = rsr.path("M 866.7,198.1 887.3,240.8 912,258.1 z");
        path_by.attr({fill: '#BD268D', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_by');


        var path_bz = rsr.path("M 878.4,268.1 850.3,215.1 901.8,261.1 z");
        path_bz.attr({fill: '#3F164C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bz');


        var path_ca = rsr.path("M 1033.5,562.1 1083.8,557.8 1070.7,567.9 z");
        path_ca.attr({fill: '#F4EDF0', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ca');
        var path_cb = rsr.path("M 958.3,722.1 978.2,654.2 1018.6,722.1 z");
        path_cb.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cb');


        var path_cc = rsr.path("M 868.7,227.8 887.3,240.8 866.7,198.1 z");
        path_cc.attr({fill: '#762369', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cc');


        var path_cd = rsr.path("M 1337.3,542.9 1361.2,561.2 1375.8,541.9 z");
        path_cd.attr({fill: '#7B4830', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cd');


        var path_ce = rsr.path("M 929.4,254.5 945.9,267.9 932.2,263 z");
        path_ce.attr({fill: '#D4489A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ce');
        var path_cf = rsr.path("M 891.4,299.2 904,325.7 889.6,317.1 z");
        path_cf.attr({fill: '#D73493', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cf');


        var path_cg = rsr.path("M 875.1,312.2 863.9,315.8 878.4,268.1 z");
        path_cg.attr({fill: '#3F164C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cg');
        var path_ch = rsr.path("M 932.2,263 945.9,267.9 925.3,278.5 z");
        path_ch.attr({fill: '#76256E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ch');
        var path_ci = rsr.path("M 932.2,263 912,258.1 929.4,254.5 z");
        path_ci.attr({fill: '#D73493', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ci');


        var path_cj = rsr.path("M 943.1,269.2 965.8,288.5 938.8,271 z");
        path_cj.attr({fill: '#CF2790', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cj');
        var path_ck = rsr.path("M 934.4,273.4 965.8,288.5 938.8,271 z");
        path_ck.attr({fill: '#68205F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ck');


        var path_cl = rsr.path("M 891.4,299.2 904,325.7 903,296.4 z");
        path_cl.attr({fill: '#762369', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cl');


        var path_cm = rsr.path("M 903,296.4 925.3,278.5 912,258.1 z");
        path_cm.attr({fill: '#762369', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cm');


        var path_cn = rsr.path("M 903,296.4 912,258.1 891.4,299.2 z");
        path_cn.attr({fill: '#3F164C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cn');


        var path_co = rsr.path("M 912,258.1 932.2,263 925.3,278.5 z");
        path_co.attr({fill: '#AC206D', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_co');
        var path_cp = rsr.path("M 875.1,312.2 878.4,268.1 880.8,326.4 z");
        path_cp.attr({fill: '#D73493', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cp');


        var path_cq = rsr.path("M 880.8,326.4 891.4,299.2 878.4,268.1 z");
        path_cq.attr({fill: '#3F164C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cq');
        var path_cr = rsr.path("M 863.9,315.8 867.7,287 878.4,268.1 z");
        path_cr.attr({fill: '#D73493', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cr');


        var path_cs = rsr.path("M 1198.9,447.2 1176,425.7 1191.8,417.3 z");
        path_cs.attr({fill: '#F6C813', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cs');


        var path_ct = rsr.path("M 1070.3,570 1073.7,567.1 1074.2,540.6 z");
        path_ct.attr({fill: '#3F1944', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ct');


        var path_cu = rsr.path("M 1069,516.5 1090.9,537.8 1073.4,550.5 z");
        path_cu.attr({fill: '#F4EB2B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cu');


        var path_cv = rsr.path("M 1715.7,695.6 1639.5,695.6 1723.2,463.3 z");
        path_cv.attr({fill: '#DBD0D3', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cv');
        var path_cw = rsr.path("M 1302,624.9 1268.1,718.6 1319.7,718.6 z");
        path_cw.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cw');
        return Beany.toSet([path_e, path_f, path_g, path_h, path_i, path_j, path_k, path_l, path_m, path_n,
            path_o, path_p, path_q, path_r, path_s, path_t, path_u, path_v, path_w, path_x, path_y, path_x, path_z,
            path_aa, path_ab, path_ac, path_ad, path_ae, path_af, path_ag, path_ah, path_ai, path_aj, path_ak, path_al, path_am, path_an,
            path_ao, path_ap, path_aq, path_ar, path_as, path_at, path_au, path_av, path_aw, path_ax, path_ay, path_ax, path_az,
            path_ba, path_bb, path_bc, path_bd, path_be, path_bf, path_bg, path_bh, path_bi, path_bj, path_bk, path_bl, path_bm, path_bn,
            path_bo, path_bp, path_bq, path_br, path_bs, path_bt, path_bu, path_bv, path_bw, path_bx, path_by, path_bx, path_bz,
            path_ca, path_cb, path_cc, path_cd, path_ce, path_cf, path_cg, path_ch, path_ci, path_cj, path_ck, path_cl, path_cm, path_cn,
            path_co, path_cp, path_cq, path_cr, path_cs, path_ct, path_cu, path_cv, path_cw], rsr);
    },
    drawBYS: function (rsr) {
        var path_h = rsr.path("M 433.7,329 455,333 438.5,350.7 z");
        path_h.attr({
            fill: 'none',
            stroke: '#282A3F',
            "stroke-width": '4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_h');
        var path_i = rsr.path("M 1005.1,995.8 993.4,977.5 980.9,995.8 z");
        path_i.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_i');
        var path_j = rsr.path("M 1077.2,942.2 1099,932 1080.8,920.3 z");
        path_j.attr({
            fill: 'none',
            stroke: '#CEDC28',
            "stroke-width": '4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_j');
        var path_k = rsr.path("M 872.9,894.2 876.8,916 894,899.1 z");
        path_k.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_k');
        var path_l = rsr.path("M 1173.1,987.2 1152.6,974.5 1172.8,965.5 z");
        path_l.attr({
            fill: 'none',
            stroke: '#282A3F',
            "stroke-width": '4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_l');
        var path_m = rsr.path("M 1055,842.9 1050.1,819.3 1070.6,827.9 z");
        path_m.attr({
            fill: 'none',
            stroke: '#282A3F',
            "stroke-width": '4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_m');
        var path_n = rsr.path("M 1452.8,907.4 1433.9,895.7 1451.7,883.3 z");
        path_n.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_n');
        var path_o = rsr.path("M 828,988.5 808.1,1002.1 808.1,979.9 z");
        path_o.attr({
            fill: 'none',
            stroke: '#CEDC28',
            "stroke-width": '4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_o');
        var path_p = rsr.path("M 1236.6,832.1 1238.6,854.2 1257.2,838.9 z");
        path_p.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_p');
        var path_q = rsr.path("M 1368.5,756.9 1346.1,748 1364.5,735.6 z");
        path_q.attr({
            fill: 'none',
            stroke: '#CEDC28',
            "stroke-width": '4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_q');
        var path_r = rsr.path("M 477.6,696.6 489.2,675.8 467.4,677.1 z");
        path_r.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_r');
        var path_s = rsr.path("M 962.3,99.6 979.2,113.6 982.1,90 z");
        path_s.attr({
            fill: 'none',
            stroke: '#CEDC28',
            "stroke-width": '4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_s');
        var path_t = rsr.path("M 820.2,858.2 796.7,852.4 813.3,837.7 z");
        path_t.attr({fill: '#8F53A1', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_t');
        var path_u = rsr.path("M 1469.1,626.6 1488.1,615.8 1490.1,637.8 z");
        path_u.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_u');
        var path_v = rsr.path("M 1201.5,293.9 1220.8,283.4 1222.4,305.4 z");
        path_v.attr({
            fill: 'none',
            stroke: '#CEDC28',
            "stroke-width": '4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_v');
        var path_w = rsr.path("M 805.1,74.2 783.3,77.5 795.2,95.9 z");
        path_w.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_w');
        var path_x = rsr.path("M 627.6,928.4 612.4,912.3 607.3,935.8 z");
        path_x.attr({
            fill: 'none',
            stroke: '#282A3F',
            "stroke-width": '4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_x');
        var path_y = rsr.path("M 616.8,157.4 638.7,166.7 634.8,145 z");
        path_y.attr({
            fill: 'none',
            stroke: '#CEDC28',
            "stroke-width": '4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_y');
        var path_z = rsr.path("M 1126.6,645.4 1147.4,638.3 1145.3,660.2 z");
        path_z.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_z');
        var path_aa = rsr.path("M 662.5,818.8 641.1,829.2 643.6,807.5 z");
        path_aa.attr({
            fill: 'none',
            stroke: '#CEDC28',
            "stroke-width": '4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_aa');
        var path_ab = rsr.path("M 853,344.8 866.9,361.7 845.6,367.4 z");
        path_ab.attr({
            fill: 'none',
            stroke: '#CEDC28',
            "stroke-width": '4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_ab');
        var path_ac = rsr.path("M 901.9,691.1 906.4,669.7 924.2,682.7 z");
        path_ac.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ac');
        var path_ad = rsr.path("M 836.5,813.6 815.2,824.3 834,835.5 z");
        path_ad.attr({
            fill: 'none',
            stroke: '#282A3F',
            "stroke-width": '4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_ad');
        var path_ae = rsr.path("M 1319.2,407.2 1322.6,385.5 1300.9,395.3 z");
        path_ae.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ae');
        var path_af = rsr.path("M 914.8,268.9 911.7,247.1 893.8,262.7 z");
        path_af.attr({
            fill: 'none',
            stroke: '#282A3F',
            "stroke-width": '4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_af');
        var path_ag = rsr.path("M 587.9,464.1 565.2,455.6 583.4,442.9 z");
        path_ag.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ag');
        var path_ah = rsr.path("M 1005.2,543.6 992.8,523.3 983.2,543 z");
        path_ah.attr({
            fill: 'none',
            stroke: '#282A3F',
            "stroke-width": '4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_ah');
        var path_ai = rsr.path("M 1213.3,669.8 1214.8,691.7 1234.2,681.2 z");
        path_ai.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ai');
        var path_aj = rsr.path("M 690.6,293.6 667.4,299.2 683.2,314.4 z");
        path_aj.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aj');
        var path_ak = rsr.path("M 1135.7,197.2 1122.2,179.8 1143.5,174.7 z");
        path_ak.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ak');
        var path_al = rsr.path("M 1415.9,160.2 1439.7,160.2 1427.7,178.6 z");
        path_al.attr({
            fill: 'none',
            stroke: '#282A3F',
            "stroke-width": '4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_al');
        var group_a = rsr.set();
        var path_am = rsr.path("M 1067.2,584 1073.9,666.2 1043.8,668.3 z").attr({
            fill: '#191519',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_am');
        var path_an = rsr.path("M 1017,671.8 1043.8,668.3 1005.3,591.5 z").attr({
            fill: '#2E2731',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_an');
        var path_ao = rsr.path("M 1067.2,584 1005.3,591.5 1043.8,668.3 z").attr({
            fill: '#201A21',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ao');
        var path_ap = rsr.path("M 1011.1,670.3 1017,735.1 1033.3,668.8 z").attr({
            fill: '#E46F8E',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ap');
        var path_aq = rsr.path("M 1079.1,663.1 1033.3,668.8 1087.7,727.6 z").attr({
            fill: '#E46F8E',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_aq');
        var path_ar = rsr.path("M 1017,735.1 1033.3,668.8 1087.7,727.6 z").attr({
            fill: '#D2577D',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ar');
        group_a.attr({'name': 'group_a'});
        var group_b = rsr.set();
        var path_as = rsr.path("M 743.7,637.5 776.7,618.7 829.8,711.7 z").attr({
            fill: '#302D3F',
            parent: 'group_b',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_as');
        var path_at = rsr.path("M 743.7,637.5 829.8,711.7 796.8,730.5 z").attr({
            fill: '#393856',
            parent: 'group_b',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_at');
        group_b.attr({'name': 'group_b'});
        var group_c = rsr.set();
        var path_au = rsr.path("M 911.8,803.3 933.5,800.4 927.2,821.5 z").attr({
            fill: '#8F53A1',
            parent: 'group_c',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_au');
        group_c.attr({'name': 'group_c'});
        var group_d = rsr.set();
        var path_av = rsr.path("M 709.6,531 732.5,546.3 619.1,715.9 z").attr({
            fill: '#292836',
            parent: 'group_d',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_av');
        var path_aw = rsr.path("M 752.1,514.4 731.2,545.6 710.7,531.9 z").attr({
            fill: '#302D3F',
            parent: 'group_d',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_aw');
        var path_ax = rsr.path("M 756.4,477.5 767.8,462.5 774.5,466.4 z").attr({
            fill: '#F7D859',
            parent: 'group_d',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ax');
        var path_ay = rsr.path("M 596.2,700.6 709.6,531 619.1,715.9 z").attr({
            fill: '#1F1D26',
            parent: 'group_d',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ay');
        var path_az = rsr.path("M 756.4,477.5 774.5,466.4 764.3,482.7 z").attr({
            fill: '#F6A930',
            parent: 'group_d',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_az');
        var path_ba = rsr.path("M 749.7,513.8 733,502.6 766,483.3 z").attr({
            fill: '#42437D',
            parent: 'group_d',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ba');
        var path_bb = rsr.path("M 733,502.6 766,483.3 755.3,476.1 z").attr({
            fill: '#5051A3',
            parent: 'group_d',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bb');
        var path_bc = rsr.path("M 731.6,500.7 710.7,531.9 752.1,514.4 z").attr({
            fill: '#393856',
            parent: 'group_d',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bc');
        group_d.attr({'name': 'group_d'});
        var group_e = rsr.set();
        var path_bd = rsr.path("M 887.3,485.6 912.2,448.5 906.1,487.9 z").attr({
            fill: '#C7B4B1',
            parent: 'group_e',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bd');
        var path_be = rsr.path("M 887.3,485.6 907.5,487.5 908.5,499.8 z").attr({
            fill: '#B6A7A2',
            parent: 'group_e',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_be');
        var path_bf = rsr.path("M 887.3,485.6 912.2,448.5 880.8,443 z").attr({
            fill: '#9B9B9B',
            parent: 'group_e',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bf');
        var path_bg = rsr.path("M 901.2,400.8 892.4,400.2 911.7,391.1 z").attr({
            fill: '#C01F42',
            parent: 'group_e',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bg');
        var path_bh = rsr.path("M 913.2,387.2 911.7,391.1 892.4,400.2 z").attr({
            fill: '#D32A52',
            parent: 'group_e',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bh');
        var path_bi = rsr.path("M 880.8,443 873.1,482.5 887.3,485.6 z").attr({
            fill: '#EEEFED',
            parent: 'group_e',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bi');
        var path_bj = rsr.path("M 899.5,446.6 909.6,448 915.6,408.9 z").attr({
            fill: '#C2264F',
            parent: 'group_e',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bj');
        var path_bk = rsr.path("M 884.5,615.4 908.5,499.8 887.4,548.9 z").attr({
            fill: '#80132E',
            parent: 'group_e',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bk');
        var path_bl = rsr.path("M 915.6,408.9 883.9,444.3 899.5,446.6 z").attr({
            fill: '#DC2A5C',
            parent: 'group_e',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bl');
        var path_bm = rsr.path("M 892.4,400.2 883.9,444.3 901.2,400.8 z").attr({
            fill: '#DE2D5A',
            parent: 'group_e',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bm');
        var path_bn = rsr.path("M 866.7,491.6 887.4,548.9 848,607.9 z").attr({
            fill: '#CF2A5E',
            parent: 'group_e',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bn');
        var path_bo = rsr.path("M 870.6,481.7 887.3,485.6 868.3,492.2 z").attr({
            fill: '#B6A7A2',
            parent: 'group_e',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bo');
        var path_bp = rsr.path("M 915.6,408.9 913.2,387.2 911.7,391.1 z").attr({
            fill: '#C01F42',
            parent: 'group_e',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bp');
        var path_bq = rsr.path("M 866.7,491.6 908.5,499.8 887.4,548.9 z").attr({
            fill: '#BF2558',
            parent: 'group_e',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bq');
        var path_br = rsr.path("M 901.2,400.8 915.6,408.9 883.9,444.3 z").attr({
            fill: '#E6426D',
            parent: 'group_e',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_br');
        var path_bs = rsr.path("M 874.5,616.4 887.4,548.9 856.4,613 z").attr({
            fill: '#B21E54',
            parent: 'group_e',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bs');
        var path_bt = rsr.path("M 856.4,613 887.4,548.9 848,607.9 z").attr({
            fill: '#BF2858',
            parent: 'group_e',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bt');
        var path_bu = rsr.path("M 874.5,616.4 887.4,548.9 884.5,615.4 z").attr({
            fill: '#9D1B47',
            parent: 'group_e',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bu');
        var path_bv = rsr.path("M 887.3,485.6 908.5,499.8 868.3,492.2 z").attr({
            fill: '#FEF0EC',
            parent: 'group_e',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bv');
        var path_bw = rsr.path("M 911.7,391.1 915.6,408.9 901.2,400.8 z").attr({
            fill: '#DC2A5C',
            parent: 'group_e',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bw');
        group_e.attr({'name': 'group_e'});
        var group_f = rsr.set();
        var path_bx = rsr.path("M 1283.6,382.7 1235.3,406.7 1235.1,414.8 z").attr({
            fill: '#282A3F',
            parent: 'group_f',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bx');
        var path_by = rsr.path("M 1279.6,389.3 1037.2,336.4 1235.1,414.8 z").attr({
            fill: '#373851',
            parent: 'group_f',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_by');
        var path_bz = rsr.path("M 1279.6,389.3 1018.4,282.1 1283.6,382.7 z").attr({
            fill: '#282A3F',
            parent: 'group_f',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bz');
        var path_ca = rsr.path("M 1184.5,546.1 1235.1,414.8 1189.4,542.9 z").attr({
            fill: '#242535',
            parent: 'group_f',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ca');
        var path_cb = rsr.path("M 1014.3,289 1037.2,336.4 1279.6,389.3 z").attr({
            fill: '#373851',
            parent: 'group_f',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cb');
        var path_cc = rsr.path("M 1283.6,382.7 1235.1,414.8 1279.6,389.3 z").attr({
            fill: '#282A3F',
            parent: 'group_f',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cc');
        var path_cd = rsr.path("M 1235.5,422.8 1235.1,414.8 1189.4,542.9 z").attr({
            fill: '#242535',
            parent: 'group_f',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cd');
        var path_ce = rsr.path("M 1184.5,546.1 1037.2,336.4 1235.1,414.8 z").attr({
            fill: '#282A3F',
            parent: 'group_f',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ce');
        var path_cf = rsr.path("M 1184.5,546.1 986.8,468 1037.2,336.4 z").attr({
            fill: '#282A3F',
            parent: 'group_f',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cf');
        var path_cg = rsr.path("M 1018.4,282.1 1279.6,389.3 1014.3,289 z").attr({
            fill: '#282A3F',
            parent: 'group_f',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cg');
        var path_ch = rsr.path("M 1212.7,422.3 1050.3,357.8 1031.7,406.5 z").attr({
            fill: '#D1DE4F',
            parent: 'group_f',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ch');
        var path_ci = rsr.path("M 1031.7,406.5 1212.7,422.3 1194.1,471 z").attr({
            fill: '#D1DE4F',
            parent: 'group_f',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ci');
        var path_cj = rsr.path("M 1172.7,526.9 1010.3,462.4 1191.4,477.9 z").attr({
            fill: '#F4BA81',
            parent: 'group_f',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cj');
        var path_ck = rsr.path("M 1029,413.4 1010.3,462.4 1191.4,477.9 z").attr({
            fill: '#F4BA81',
            parent: 'group_f',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ck');
        group_f.attr({'name': 'group_f'});
        var group_g = rsr.set();
        var path_cl = rsr.path("M 1269.7,540.3 1218.2,553.7 1250.1,587 z").attr({
            fill: '#DA8168',
            parent: 'group_g',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cl');
        var path_cm = rsr.path("M 1202,550.9 1218.1,524.4 1218.2,553.7 z").attr({
            fill: '#B96B46',
            parent: 'group_g',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cm');
        var path_cn = rsr.path("M 1250.1,587 1278.9,584.3 1269.3,618.2 z").attr({
            fill: '#2F3147',
            parent: 'group_g',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cn');
        var path_co = rsr.path("M 1218.2,553.7 1202,550.9 1227,593.6 z").attr({
            fill: '#E2876A',
            parent: 'group_g',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_co');
        var path_cp = rsr.path("M 1218.2,553.7 1250.2,515.1 1269.7,540.3 z").attr({
            fill: '#B36346',
            parent: 'group_g',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cp');
        var path_cq = rsr.path("M 1266.7,520.3 1250.2,515.1 1269.7,540.3 z").attr({
            fill: '#A65C44',
            parent: 'group_g',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cq');
        var path_cr = rsr.path("M 1269.7,540.3 1283.1,532.9 1278.9,584.3 z").attr({
            fill: '#F28D7A',
            parent: 'group_g',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cr');
        var path_cs = rsr.path("M 1250.1,587 1227,593.6 1249.5,621.7 z").attr({
            fill: '#282A3F',
            parent: 'group_g',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cs');
        var path_ct = rsr.path("M 1250.1,587 1249.5,621.7 1269.3,618.2 z").attr({
            fill: '#2F3147',
            parent: 'group_g',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ct');
        var path_cu = rsr.path("M 1250.2,515.1 1218.2,553.7 1218.1,524.4 z").attr({
            fill: '#B96B46',
            parent: 'group_g',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cu');
        var path_cv = rsr.path("M 1281.4,612.6 1269.3,618.2 1278.9,584.3 z").attr({
            fill: '#282A3F',
            parent: 'group_g',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cv');
        var path_cw = rsr.path("M 1218.2,553.7 1227,593.6 1250.1,587 z").attr({
            fill: '#DA8168',
            parent: 'group_g',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cw');
        var path_cx = rsr.path("M 1269.7,540.3 1266.7,520.3 1283.1,532.9 z").attr({
            fill: '#B96B46',
            parent: 'group_g',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cx');
        var path_cy = rsr.path("M 1249.5,621.7 1234,621.2 1227,593.6 z").attr({
            fill: '#282A3F',
            parent: 'group_g',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cy');
        var path_cz = rsr.path("M 1250.1,587 1278.9,584.3 1269.7,540.3 z").attr({
            fill: '#E2876A',
            parent: 'group_g',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cz');
        group_g.attr({'name': 'group_g'});
        return Beany.toSet([path_h, path_i, path_j, path_k, path_l, path_m, path_n,
            path_o, path_p, path_q, path_r, path_s, path_t, path_u, path_v, path_w, path_x, path_y, path_x, path_z,
            path_aa, path_ab, path_ac, path_ad, path_ae, path_af, path_ag, path_ah, path_ai, path_aj, path_ak, path_al, path_am, path_an,
            path_ao, path_ap, path_aq, path_ar, path_as, path_at, path_au, path_av, path_aw, path_ax, path_ay, path_ax, path_az,
            path_ba, path_bb, path_bc, path_bd, path_be, path_bf, path_bg, path_bh, path_bi, path_bj, path_bk, path_bl, path_bm, path_bn,
            path_bo, path_bp, path_bq, path_br, path_bs, path_bt, path_bu, path_bv, path_bw, path_bx, path_by, path_bx, path_bz,
            path_ca, path_cb, path_cc, path_cd, path_ce, path_cf, path_cg, path_ch, path_ci, path_cj, path_ck, path_cl, path_cm, path_cn,
            path_co, path_cp, path_cq, path_cr, path_cs, path_ct, path_cu, path_cv, path_cw, path_cx, path_cy, path_cz], rsr);
    },
    drawClub75: function (rsr) {
        var path_b = rsr.path("M 1068.3,474.9 1079.3,428.7 1090.7,474.9 z");
        path_b.attr({fill: '#11535A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_b');
        var path_c = rsr.path("M 804.2,451.5 743,494.7 856.6,514.5 z");
        path_c.attr({fill: '#AB2525', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_c');
        var path_d = rsr.path("M 960.2,459 1082.9,547.8 1130.4,568 z");
        path_d.attr({fill: '#22221F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_d');
        var path_e = rsr.path("M 743,494.7 733.5,476.5 764.2,473.1 z");
        path_e.attr({fill: '#418AC9', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_e');
        var path_f = rsr.path("M 1103.7,556.6 1075.3,602.5 1032.1,558.1 z");
        path_f.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_f');
        var path_g = rsr.path("M 727.9,555.1 767.4,617 732,600.2 z");
        path_g.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_g');
        var path_h = rsr.path("M 869.3,602.8 806.5,581.7 857.9,639 z");
        path_h.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_h');
        var path_i = rsr.path("M 743,494.7 733.5,476.5 728.7,495.4 z");
        path_i.attr({fill: '#1958A2', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_i');
        var path_j = rsr.path("M 748.2,513.3 743,494.7 761.4,491.9 z");
        path_j.attr({fill: '#2866B1', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_j');
        var path_k = rsr.path("M 743,494.7 728.7,495.4 748.2,513.3 z");
        path_k.attr({fill: '#418AC9', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_k');
        var path_l = rsr.path("M 987.8,669.4 939.3,666.8 869.3,602.8 z");
        path_l.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_l');
        var path_m = rsr.path("M 869.3,602.8 987.8,669.4 975.4,638.6 z");
        path_m.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_m');
        var path_n = rsr.path("M 1011.9,492.4 933.7,435.9 928.2,438.4 z");
        path_n.attr({fill: '#22221F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_n');
        var path_o = rsr.path("M 804.2,451.5 783.6,416.1 763.3,488.5 z");
        path_o.attr({fill: '#BA2927', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_o');
        var path_p = rsr.path("M 874.6,476.5 909.7,458.1 965.9,518.6 z");
        path_p.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_p');
        var path_q = rsr.path("M 960.2,458 1017.6,522.8 1037.4,514.1 z");
        path_q.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_q');
        var path_r = rsr.path("M 861.5,485.8 876.6,459.2 909.7,458.1 z");
        path_r.attr({fill: '#32334C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_r');
        var path_s = rsr.path("M 1126.2,664.7 1049.9,677.8 987.8,669.4 z");
        path_s.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_s');
        var path_t = rsr.path("M 949.9,501.7 909.7,458.1 960.2,458 z");
        path_t.attr({fill: '#32334C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_t');
        var path_u = rsr.path("M 1037.4,514.1 1017.6,522.8 1088.7,550.1 z");
        path_u.attr({fill: '#373851', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_u');
        var path_v = rsr.path("M 753.3,567.8 727.9,555.1 748.2,513.3 z");
        path_v.attr({fill: '#452D6A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_v');
        var path_w = rsr.path("M 1142.3,622.1 1132.4,598.8 1178.8,601.8 z");
        path_w.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_w');
        var path_x = rsr.path("M 939.3,666.8 987.8,669.4 987.4,676.4 z");
        path_x.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_x');
        var path_y = rsr.path("M 1154.6,656.2 1120.4,643.8 1126.2,664.7 z");
        path_y.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_y');
        var path_z = rsr.path("M 962.1,523.6 975.4,638.6 869.3,602.8 z");
        path_z.attr({fill: '#A5A7B3', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_z');
        var path_aa = rsr.path("M 1017.6,522.8 949.9,501.7 989.4,490.9 z");
        path_aa.attr({fill: '#2F3147', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aa');
        var path_ab = rsr.path("M 876.6,459.2 886.9,402.1 960.2,458 z");
        path_ab.attr({fill: '#373851', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ab');
        var path_ac = rsr.path("M 1033.3,527.6 1103.7,556.6 1049.9,560.1 z");
        path_ac.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ac');
        var path_ad = rsr.path("M 1154.6,656.2 1120.4,643.8 1142.3,622.1 z");
        path_ad.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ad');
        var path_ae = rsr.path("M 886.9,402.1 845.4,416.6 876.6,459.2 z");
        path_ae.attr({fill: '#32334C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ae');
        var path_af = rsr.path("M 857.9,639 939.3,666.8 869.3,602.8 z");
        path_af.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_af');
        var path_ag = rsr.path("M 1142.3,622.1 1063.7,589.1 1062,578.5 z");
        path_ag.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ag');
        var path_ah = rsr.path("M 975.4,638.6 1126.2,664.7 987.8,669.4 z");
        path_ah.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ah');
        var path_ai = rsr.path("M 764.2,473.1 741.7,453.8 755.1,420.5 z");
        path_ai.attr({fill: '#418AC9', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ai');
        var path_aj = rsr.path("M 804.2,451.5 844.6,505.1 840.1,459.9 z");
        path_aj.attr({fill: '#BA2927', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aj');
        var path_ak = rsr.path("M 1132.4,598.8 1062,578.5 1160.2,580.5 z");
        path_ak.attr({fill: '#464C63', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ak');
        var path_al = rsr.path("M 1077.9,566.1 1062,578.5 1160.2,580.5 z");
        path_al.attr({fill: '#3F435B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_al');
        var path_am = rsr.path("M 755.1,420.5 741.7,453.8 747.9,422.5 z");
        path_am.attr({fill: '#1958A2', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_am');
        var path_an = rsr.path("M 869.3,602.8 864.4,507.1 962.1,523.6 z");
        path_an.attr({fill: '#9B9DA6', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_an');
        var path_ao = rsr.path("M 1077.9,566.1 1103.7,556.6 1160.2,580.5 z");
        path_ao.attr({fill: '#3F435B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ao');
        var path_ap = rsr.path("M 1154.6,656.2 1142.3,622.1 1185.9,640.7 z");
        path_ap.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ap');
        var path_aq = rsr.path("M 987.8,669.4 987.4,676.4 1040.9,676.1 z");
        path_aq.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aq');
        var path_ar = rsr.path("M 975.4,638.6 987.5,585.2 962.1,523.6 z");
        path_ar.attr({fill: '#9B9DA6', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ar');
        var path_as = rsr.path("M 1120.4,643.8 1126.2,664.7 975.4,638.6 z");
        path_as.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_as');
        var path_at = rsr.path("M 767.4,617 806.5,581.7 857.9,639 z");
        path_at.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_at');
        var path_au = rsr.path("M 1142.3,622.1 1185.9,640.7 1178.8,601.8 z");
        path_au.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_au');
        var path_av = rsr.path("M 1132.4,598.8 1178.8,601.8 1160.2,580.5 z");
        path_av.attr({fill: '#373851', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_av');
        var path_aw = rsr.path("M 748.2,513.3 767.1,526.5 763.2,527.6 z");
        path_aw.attr({fill: '#32334C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aw');
        var path_ax = rsr.path("M 960.2,458 949.9,501.7 989.4,490.9 z");
        path_ax.attr({fill: '#373851', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ax');
        var path_ay = rsr.path("M 765.6,483.1 755.1,420.5 783.6,416.1 z");
        path_ay.attr({fill: '#AB2525', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ay');
        var path_az = rsr.path("M 1020.9,640.8 1120.4,643.8 1142.3,622.1 z");
        path_az.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_az');
        var path_ba = rsr.path("M 1191.3,627.8 1178.8,601.8 1185.9,640.7 z");
        path_ba.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ba');
        var path_bb = rsr.path("M 1070.5,638.9 1060.6,568.9 1020.9,640.8 z");
        path_bb.attr({fill: '#9B9DA6', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bb');
        var path_bc = rsr.path("M 753.3,567.8 748.2,513.3 794.3,556.9 z");
        path_bc.attr({fill: '#1A2954', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bc');
        var path_bd = rsr.path("M 876.6,459.2 823.9,476.4 854.3,499.8 z");
        path_bd.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bd');
        var path_be = rsr.path("M 817.7,457.1 876.6,459.2 823.9,476.4 z");
        path_be.attr({fill: '#2F3147', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_be');
        var path_bf = rsr.path("M 764.2,473.1 733.5,476.5 741.7,453.8 z");
        path_bf.attr({fill: '#1958A2', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bf');
        var path_bg = rsr.path("M 1095.4,482.8 1063,482.8 1063,487.4 z");
        path_bg.attr({fill: '#11535A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bg');
        var path_bh = rsr.path("M 728.7,495.4 748.2,513.3 727.9,555.1 z");
        path_bh.attr({fill: '#1958A2', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bh');
        var path_bi = rsr.path("M 727.9,555.1 806.5,581.7 767.4,617 z");
        path_bi.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bi');
        var path_bj = rsr.path("M 1033.3,527.6 1022.6,545.6 1047.6,554.9 z");
        path_bj.attr({fill: '#373851', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bj');
        var path_bk = rsr.path("M 761.4,491.9 767.1,526.5 748.2,513.3 z");
        path_bk.attr({fill: '#32334C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bk');
        var path_bl = rsr.path("M 859.4,471.6 864.4,507.1 888.1,476.2 z");
        path_bl.attr({fill: '#1958A2', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bl');
        var path_bm = rsr.path("M 838.4,505.5 794.3,556.9 864.4,507.1 z");
        path_bm.attr({fill: '#1958A2', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bm');
        var path_bn = rsr.path("M 1142.3,622.1 1063.7,589.1 1070.5,638.9 z");
        path_bn.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bn');
        var path_bo = rsr.path("M 1062,578.5 1132.4,598.8 1142.3,622.1 z");
        path_bo.attr({fill: '#373851', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bo');
        var path_bp = rsr.path("M 761.4,491.9 767.1,526.5 778.2,496.2 z");
        path_bp.attr({fill: '#2866B1', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bp');
        var path_bq = rsr.path("M 845.4,416.6 817.7,457.1 876.6,459.2 z");
        path_bq.attr({fill: '#32334C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bq');
        var path_br = rsr.path("M 761.4,491.9 764.2,473.1 796.6,502.5 z");
        path_br.attr({fill: '#418AC9', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_br');
        var path_bs = rsr.path("M 987.5,585.2 1020.9,640.8 975.4,638.6 z");
        path_bs.attr({fill: '#A5A7B3', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bs');
        var path_bt = rsr.path("M 869.3,602.8 826.1,587.9 864.4,507.1 z");
        path_bt.attr({fill: '#1A2954', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bt');
        var path_bu = rsr.path("M 821.3,504.4 838.4,505.5 800,516.9 z");
        path_bu.attr({fill: '#452D6A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bu');
        var path_bv = rsr.path("M 802.4,518.5 767.1,526.5 777.9,496.8 z");
        path_bv.attr({fill: '#1958A2', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bv');
        var path_bw = rsr.path("M 794.3,556.9 838.4,505.5 763.2,527.6 z");
        path_bw.attr({fill: '#226AAF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bw');
        var path_bx = rsr.path("M 821.3,504.4 864.4,507.1 859.4,471.6 z");
        path_bx.attr({fill: '#418AC9', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bx');
        var path_by = rsr.path("M 753.2,564.1 826.1,587.9 794.3,556.9 z");
        path_by.attr({fill: '#452D6A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_by');
        var path_bz = rsr.path("M 1020.9,640.8 1027.9,588.9 987.5,585.2 z");
        path_bz.attr({fill: '#9B9DA6', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bz');
        var path_ca = rsr.path("M 1027.9,588.9 1048.7,591.8 1020.9,640.8 z");
        path_ca.attr({fill: '#A5A7B3', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ca');
        var path_cb = rsr.path("M 778.1,496.9 821.3,504.4 799.9,516.8 z");
        path_cb.attr({fill: '#226AAF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cb');
        var path_cc = rsr.path("M 864.4,507.1 888.1,476.2 883.7,520.3 z");
        path_cc.attr({fill: '#2866B1', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cc');
        var path_cd = rsr.path("M 826.1,587.9 794.3,556.9 864.4,507.1 z");
        path_cd.attr({fill: '#2866B1', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cd');
        var path_ce = rsr.path("M 1086.2,473.1 1079.3,443.5 1072.8,473.1 z");
        path_ce.attr({fill: '#1A7D81', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ce');
        var path_cf = rsr.path("M 761.4,491.9 764.2,473.1 743,494.7 z");
        path_cf.attr({fill: '#1958A2', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cf');
        var path_cg = rsr.path("M 1091.5,502.9 1085.5,462.1 1099.9,502.9 z");
        path_cg.attr({fill: '#11535A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cg');
        var path_ch = rsr.path("M 1066.7,477.7 1091.1,473.8 1066.7,473.8 z");
        path_ch.attr({fill: '#11535A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ch');
        var path_ci = rsr.path("M 1073.4,462.1 1067.5,502.9 1059,502.9 z");
        path_ci.attr({fill: '#11535A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ci');
        var path_cj = rsr.path("M 1091.1,473.8 1091.1,477.7 1066.7,477.7 z");
        path_cj.attr({fill: '#11535A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cj');
        var path_ck = rsr.path("M 1095.4,482.8 1095.4,487.4 1063,487.4 z");
        path_ck.attr({fill: '#11535A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ck');
        var path_cl = rsr.path("M 1047.6,554.9 1060.6,568.9 1048.7,591.8 z");
        path_cl.attr({fill: '#9B9DA6', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cl');
        var path_cm = rsr.path("M 1033.3,527.6 1010.3,570.1 949.9,501.7 z");
        path_cm.attr({fill: '#32334C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cm');
        var path_cn = rsr.path("M 987.5,585.2 958.9,516.1 1022.6,545.6 z");
        path_cn.attr({fill: '#A5A7B3', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cn');
        var path_co = rsr.path("M 979.8,525.8 882.4,520.6 888.1,476.2 z");
        path_co.attr({fill: '#A5A7B3', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_co');
        var path_cp = rsr.path("M 987.5,585.2 1022.6,545.6 1048.7,591.8 z");
        path_cp.attr({fill: '#A8ACB8', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cp');
        var path_cq = rsr.path("M 1022.6,545.6 1047.6,554.9 1048.7,591.8 z");
        path_cq.attr({fill: '#A5A7B3', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cq');
        var group_a = rsr.set();
        var path_cr = rsr.path("M 934.4,448.1 902.2,473.5 889.9,430.7 z").attr({
            fill: '#FAFAFA',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cr');
        var path_cs = rsr.path("M 895.3,459.4 909.5,430.8 886.4,449.7 z").attr({
            fill: '#FAFAFA',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cs');
        var path_ct = rsr.path("M 895,459.4 918.2,438.6 909.2,430.7 z").attr({
            fill: '#FAFAFA',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ct');
        group_a.attr({'name': 'group_a'});
        return Beany.toSet([path_b, path_c, path_d, path_e, path_f, path_g, path_h, path_i, path_j, path_k, path_l, path_m, path_n,
            path_o, path_p, path_q, path_r, path_s, path_t, path_u, path_v, path_w, path_x, path_y, path_x, path_z,
            path_aa, path_ab, path_ac, path_ad, path_ae, path_af, path_ag, path_ah, path_ai, path_aj, path_ak, path_al, path_am, path_an,
            path_ao, path_ap, path_aq, path_ar, path_as, path_at, path_au, path_av, path_aw, path_ax, path_ay, path_ax, path_az,
            path_ba, path_bb, path_bc, path_bd, path_be, path_bf, path_bg, path_bh, path_bi, path_bj, path_bk, path_bl, path_bm, path_bn,
            path_bo, path_bp, path_bq, path_br, path_bs, path_bt, path_bu, path_bv, path_bw, path_bx, path_by, path_bx, path_bz,
            path_ca, path_cb, path_cc, path_cd, path_ce, path_cf, path_cg, path_ch, path_ci, path_cj, path_ck, path_cl, path_cm, path_cn,
            path_co, path_cp, path_cq, path_cr, path_cs, path_ct], rsr);
    },
    drawRenault: function (rsr) {
        var path_i = rsr.path("M 939.1,574.2 994.4,488.3 1047.8,544.5 z");
        path_i.attr({
            fill: '#030303',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_i');
        var path_j = rsr.path("M 886.7,488.3 943.6,566.2 994.4,488.3 z");
        path_j.attr({
            fill: '#010101',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_j');
        var path_k = rsr.path("M 838.3,544.2 886.7,488.3 950.5,573.6 z");
        path_k.attr({fill: '#232323', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_k');
        var path_l = rsr.path("M 1013.2,618.7 1004,755.1 1057.6,673.8 z");
        path_l.attr({
            fill: '#121212',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_l');
        var path_m = rsr.path("M 975.1,801 720.4,787.4 708.9,921.7 z");
        path_m.attr({fill: '#181818', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_m');
        var path_n = rsr.path("M 1004,755.1 1184.2,736.1 1225.8,622.5 z");
        path_n.attr({
            fill: '#C7393A',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_n');
        var path_o = rsr.path("M 872.4,619.8 838.3,544.2 815.1,674.1 z");
        path_o.attr({fill: '#1E1E1E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_o');
        var path_p = rsr.path("M 838.3,544.2 913.5,546.9 872.4,619.8 z");
        path_p.attr({fill: '#232323', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_p');
        var path_q = rsr.path("M 838.3,544.2 649.7,517.3 815.1,674.1 z");
        path_q.attr({
            fill: '#1C1C1C',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_q');
        var path_r = rsr.path("M 633.3,615.4 649.7,517.3 815.1,674.1 z");
        path_r.attr({
            fill: '#010101',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_r');
        var path_s = rsr.path("M 872.4,619.8 883.1,755.7 815.1,674.1 z");
        path_s.attr({
            fill: '#010101',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_s');
        var path_t = rsr.path("M 883.1,755.7 943.7,676.3 1004,755.1 z");
        path_t.attr({
            fill: '#1C1C1C',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_t');
        var path_u = rsr.path("M 1057.6,673.8 1232.7,523.1 1225.8,622.5 z");
        path_u.attr({
            fill: '#010101',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_u');
        var path_v = rsr.path("M 1225.8,622.5 1004,755.1 1057.6,673.8 z");
        path_v.attr({
            fill: '#BF2026',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_v');
        var path_w = rsr.path("M 1235.3,933.6 975.1,801 1183.3,790.5 z");
        path_w.attr({fill: '#181818', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_w');
        var path_x = rsr.path("M 591.6,727.8 720.4,787.4 633.3,615.4 z");
        path_x.attr({fill: '#BE2026', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_x');
        var path_y = rsr.path("M 883.1,755.7 720.4,787.4 633.3,615.4 z");
        path_y.attr({fill: '#A81E22', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_y');
        var path_z = rsr.path("M 869.2,170 773.2,52.4 687.8,168 z");
        path_z.attr({
            fill: '#A51E22',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_z');
        var path_aa = rsr.path("M 1225.8,622.5 1372.6,584.7 1184.2,736.1 z");
        path_aa.attr({
            fill: '#D86067',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_aa');
        var path_ab = rsr.path("M 883.1,755.7 975.1,801 720.4,787.4 z");
        path_ab.attr({
            fill: '#680E17',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ab');
        var path_ac = rsr.path("M 649.7,517.3 765.2,470.4 838.3,544.2 z");
        path_ac.attr({
            fill: '#BF2126',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ac');
        var path_ad = rsr.path("M 591.6,727.8 720.4,787.4 708.9,921.7 z");
        path_ad.attr({
            fill: '#010101',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ad');
        var path_ae = rsr.path("M 1005.5,170.9 935.9,181.5 984.4,126.3 z");
        path_ae.attr({
            fill: '#670E12',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ae');
        var path_af = rsr.path("M 1005.5,170.9 1064.5,105.8 984.4,126.3 z");
        path_af.attr({
            fill: '#8F191C',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_af');
        var path_ag = rsr.path("M 662.6,430.7 649.7,517.3 765.2,470.4 z");
        path_ag.attr({
            fill: '#BA2026',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ag');
        var path_ah = rsr.path("M 1184.2,736.1 975.1,801 1183.3,790.5 z");
        path_ah.attr({
            fill: '#610C0E',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ah');
        var path_ai = rsr.path("M 975.1,801 883.1,755.7 1004,755.1 z");
        path_ai.attr({
            fill: '#751113',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ai');
        var path_aj = rsr.path("M 935.9,181.5 984.4,126.3 918.3,94 z");
        path_aj.attr({
            fill: '#7C1315',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_aj');
        var path_ak = rsr.path("M 663.2,431.4 620,398.8 651.3,294.3 z");
        path_ak.attr({
            fill: '#C82127',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ak');
        var path_al = rsr.path("M 918.3,94 869.2,170 773.2,52.4 z");
        path_al.attr({
            fill: '#901A1C',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_al');
        var path_am = rsr.path("M 918.3,94 869.2,170 935.9,181.5 z");
        path_am.attr({
            fill: '#801517',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_am');
        var path_an = rsr.path("M 993.8,310.5 1005.5,170.9 935.9,181.5 z");
        path_an.attr({
            fill: '#801517',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_an');
        var path_ao = rsr.path("M 765.2,470.4 788,415.3 663.2,431.4 z");
        path_ao.attr({
            fill: '#D22D29',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ao');
        var path_ap = rsr.path("M 869.2,170 687.8,168 778.1,272.9 z");
        path_ap.attr({
            fill: '#B21F24',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ap');
        var path_aq = rsr.path("M 651.3,294.3 778.1,272.9 687.8,168 z");
        path_aq.attr({
            fill: '#BA2025',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_aq');
        var path_ar = rsr.path("M 869.2,170 876.9,307.7 778.1,272.9 z");
        path_ar.attr({
            fill: '#A71E22',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ar');
        var path_as = rsr.path("M 1064.5,105.8 1163,173.1 1070.9,172.3 z");
        path_as.attr({
            fill: '#690F0E',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_as');
        var path_at = rsr.path("M 1005.5,170.9 1070.9,172.3 1064.5,105.8 z");
        path_at.attr({
            fill: '#7C1315',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_at');
        var path_au = rsr.path("M 651.3,294.3 778.1,272.9 788,415.3 z");
        path_au.attr({
            fill: '#E33D3E',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_au');
        var path_av = rsr.path("M 687.8,168 773.2,52.4 621.6,18.7 z");
        path_av.attr({
            fill: '#901A1C',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_av');
        var path_aw = rsr.path("M 1078.7,274.6 1005.5,170.9 993.8,310.5 z");
        path_aw.attr({
            fill: '#8F191C',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_aw');
        var path_ax = rsr.path("M 788,415.3 876.9,307.7 778.1,272.9 z");
        path_ax.attr({
            fill: '#C22026',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ax');
        var path_ay = rsr.path("M 946,379.7 993.8,310.5 1140.6,413.2 z");
        path_ay.attr({
            fill: '#861719',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ay');
        var path_az = rsr.path("M 1011.6,945 701.4,925.6 718.7,1049.3 z");
        path_az.attr({fill: '#791214', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_az');
        var path_ba = rsr.path("M 935.9,181.5 993.8,310.5 876.9,307.7 z");
        path_ba.attr({
            fill: '#8F191C',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ba');
        var path_bb = rsr.path("M 993.8,310.5 876.9,307.7 946,379.7 z");
        path_bb.attr({
            fill: '#A51E22',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bb');
        var path_bc = rsr.path("M 886.7,488.3 765.2,470.4 838.3,544.2 z");
        path_bc.attr({
            fill: '#E94B50',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bc');
        var path_bd = rsr.path("M 876.9,307.7 869.2,170 935.9,181.5 z");
        path_bd.attr({
            fill: '#991C1F',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bd');
        var path_be = rsr.path("M 1078.7,274.6 1161.7,173.3 1244.1,361 z");
        path_be.attr({
            fill: '#670E12',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_be');
        var path_bf = rsr.path("M 1013.2,618.7 1047.8,544.5 1057.6,673.8 z");
        path_bf.attr({
            fill: '#030303',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bf');
        var path_bg = rsr.path("M 1078.7,274.6 993.8,310.5 1140.6,413.2 z");
        path_bg.attr({
            fill: '#8C181B',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bg');
        var path_bh = rsr.path("M 1161.7,173.3 1283.1,250.4 1244.1,361 z");
        path_bh.attr({
            fill: '#60070E',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bh');
        var path_bi = rsr.path("M 994.4,488.3 886.7,488.3 946,379.7 z");
        path_bi.attr({fill: '#BE2026', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bi');
        var path_bj = rsr.path("M 886.7,488.3 765.2,470.4 788,415.3 z");
        path_bj.attr({
            fill: '#EB707A',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bj');
        var path_bk = rsr.path("M 984.4,126.3 1009.9,92.3 918.3,94 z");
        path_bk.attr({
            fill: '#901A1C',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bk');
        var path_bl = rsr.path("M 1232.7,523.1 1047.8,544.5 1057.6,673.8 z");
        path_bl.attr({fill: '#181818', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bl');
        var path_bm = rsr.path("M 788,415.3 946,379.7 886.7,488.3 z");
        path_bm.attr({fill: '#B42024', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bm');
        var path_bn = rsr.path("M 973.2,559.9 1047.8,544.5 1013.2,618.7 z");
        path_bn.attr({
            fill: '#010101',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bn');
        var path_bo = rsr.path("M 1140.6,413.2 1232.7,523.1 994.4,488.3 z");
        path_bo.attr({fill: '#A81E22', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bo');
        var path_bp = rsr.path("M 1183.3,790.5 1184.2,736.1 1352.5,756.1 z");
        path_bp.attr({
            fill: '#67110D',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bp');
        var path_bq = rsr.path("M 1355.7,507 1232.7,523.1 1225.8,622.5 z");
        path_bq.attr({fill: '#181818', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bq');
        var path_br = rsr.path("M 1355.7,507 1232.7,523.1 1244.1,361 z");
        path_br.attr({
            fill: '#781214',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_br');
        var path_bs = rsr.path("M 556.1,884.2 652.4,930.2 535.1,736.3 z");
        path_bs.attr({fill: '#181818', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bs');
        var path_bt = rsr.path("M 749,1062.6 1193.1,1032.8 1034.9,946.5 z");
        path_bt.attr({
            fill: '#7C1315',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bt');
        var path_bu = rsr.path("M 1248.1,944.2 1193.1,1032.8 1034.9,946.5 z");
        path_bu.attr({
            fill: '#901A1C',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bu');
        var path_bv = rsr.path("M 1355.7,507 1225.8,622.5 1372.6,584.7 z");
        path_bv.attr({fill: '#1E1E1E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bv');
        var path_bw = rsr.path("M 1287.6,652.7 1352.5,756.1 1184.2,736.1 z");
        path_bw.attr({
            fill: '#7C1315',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bw');
        var path_bx = rsr.path("M 984.4,126.3 1064.5,105.8 1009.9,92.3 z");
        path_bx.attr({
            fill: '#781214',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_bx');
        var path_by = rsr.path("M 1386.8,767.8 1233.7,847.3 1323,970.6 z");
        path_by.attr({
            fill: '#010101',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_by');
        var path_bz = rsr.path("M 994.4,488.3 946,379.7 1140.6,413.2 z");
        path_bz.attr({fill: '#941A1D', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bz');
        var path_ca = rsr.path("M 943.6,556.8 905.5,619.6 978.3,619.6 z");
        path_ca.attr({fill: '#232323', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ca');
        var path_cb = rsr.path("M 965,705.6 1013.2,618.7 1004,755.1 z");
        path_cb.attr({
            fill: '#181818',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cb');
        var path_cc = rsr.path("M 994.4,488.3 1047.8,544.5 1232.7,523.1 z");
        path_cc.attr({fill: '#C02326', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cc');
        var path_cd = rsr.path("M 982.3,619.6 941.9,692.8 911.7,619.6 z");
        path_cd.attr({fill: '#2E2E2E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cd');
        var path_ce = rsr.path("M 1232.7,523.1 1140.6,413.2 1244.1,361 z");
        path_ce.attr({
            fill: '#791214',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ce');
        var path_cf = rsr.path("M 974.4,618.8 943.7,676.3 1013.2,618.7 z");
        path_cf.attr({fill: '#AFAFAF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cf');
        var path_cg = rsr.path("M 1140.6,413.2 1078.7,274.6 1244.1,361 z");
        path_cg.attr({
            fill: '#7C1315',
            "enable-background": 'new ',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cg');
        var path_ch = rsr.path("M 1013.2,618.7 974.4,618.8 943.1,566.7 z");
        path_ch.attr({fill: '#9B9B9B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ch');
        var path_ci = rsr.path("M 921.1,534.3 943.1,566.7 872.4,619.8 z");
        path_ci.attr({fill: '#AFAFAF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ci');
        var path_cj = rsr.path("M 943.1,566.7 964.9,534.3 921.1,534.3 z");
        path_cj.attr({fill: '#868686', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cj');
        var path_ck = rsr.path("M 964.9,534.3 943.1,566.7 1013.2,618.7 z");
        path_ck.attr({fill: '#AFAFAF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ck');
        var path_cl = rsr.path("M 943.1,566.7 910.9,618.8 872.4,619.8 z");
        path_cl.attr({fill: '#9B9B9B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cl');
        var path_cm = rsr.path("M 910.9,618.8 872.4,619.8 943.7,676.3 z");
        path_cm.attr({fill: '#AFAFAF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cm');
        var path_cn = rsr.path("M 921.1,705.6 943.7,676.3 965,705.6 z");
        path_cn.attr({fill: '#868686', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cn');
        var path_co = rsr.path("M 872.4,619.8 921.1,705.6 943.7,676.3 z");
        path_co.attr({fill: '#9B9B9B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_co');
        var path_cp = rsr.path("M 782.7,600.9 640.6,576.1 786.6,604 z");
        path_cp.attr({fill: '#9B9B9B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cp');
        var path_cq = rsr.path("M 782.7,600.9 640.6,564.7 640.6,576.1 z");
        path_cq.attr({fill: '#AFAFAF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cq');
        var path_cr = rsr.path("M 1364.6,551 1078.6,603 1363.6,542 z");
        path_cr.attr({fill: '#AFAFAF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cr');
        var path_cs = rsr.path("M 1078.2,602.7 1364.2,550.7 1074.2,606.4 z");
        path_cs.attr({fill: '#9B9B9B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cs');
        var path_ct = rsr.path("M 975.1,801 1184.2,736.1 1004,755.1 z").attr({
            fill: '#791214',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_ct');
        var path_cu = rsr.path("M 1235.3,933.6 708.9,921.7 975.1,801 z").attr({
            fill: '#1E1E1E',
            parent: 'group_b',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cu');
        var path_cv = rsr.path("M 883.1,755.7 872.4,619.8 921.1,705.6 z").attr({
            fill: '#1E1E1E',
            "enable-background": 'new ',
            parent: 'group_c',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cv');
        var path_cw = rsr.path("M 876.9,307.7 946,379.7 788,415.3 z").attr({
            fill: '#C92027',
            "enable-background": 'new ',
            parent: 'group_d',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cw');
        var path_cx = rsr.path("M 633.3,615.4 815.1,674.1 883.1,755.7 z").attr({
            fill: '#C02326',
            parent: 'group_e',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cx');
        var path_cy = rsr.path("M 651.3,294.3 788,415.3 663.2,431.4 z").attr({
            fill: '#DB312D',
            parent: 'group_f',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cy');
        var path_cz = rsr.path("M 1005.5,170.9 1161.7,173.3 1078.7,274.6 z").attr({
            fill: '#731012',
            "enable-background": 'new ',
            parent: 'group_g',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_cz');
        var path_da = rsr.path("M 1013.2,618.7 965,705.6 943.7,676.3 z").attr({
            fill: '#9B9B9B',
            parent: 'group_h',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_da');
        return Beany.toSet([path_i, path_j, path_k, path_l, path_m, path_n,
            path_o, path_p, path_q, path_r, path_s, path_t, path_u, path_v, path_w, path_x, path_y, path_x, path_z,
            path_aa, path_ab, path_ac, path_ad, path_ae, path_af, path_ag, path_ah, path_ai, path_aj, path_ak, path_al, path_am, path_an,
            path_ao, path_ap, path_aq, path_ar, path_as, path_at, path_au, path_av, path_aw, path_ax, path_ay, path_ax, path_az,
            path_ba, path_bb, path_bc, path_bd, path_be, path_bf, path_bg, path_bh, path_bi, path_bj, path_bk, path_bl, path_bm, path_bn,
            path_bo, path_bp, path_bq, path_br, path_bs, path_bt, path_bu, path_bv, path_bw, path_bx, path_by, path_bx, path_bz,
            path_ca, path_cb, path_cc, path_cd, path_ce, path_cf, path_cg, path_ch, path_ci, path_cj, path_ck, path_cl, path_cm, path_cn,
            path_co, path_cp, path_cq, path_cr, path_cs, path_ct, path_cu, path_cv, path_cw, path_cx, path_cy, path_cz, path_da], rsr);
    },
    toSet: function (arr, paper) {
        var _set = paper.set();
        for (var i = 0; i < arr.length; i++) {
            _set.push(arr[i]);
        }
        return _set;
    },
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
    changeBgColor: function (object, color) {
        object.animate({fill: color}, 2000, 'easeInOut');
    },
    fadeInUp: function (object, transformX, transformY) {
        object.forEach(function (element, index) {
            var duration = Math.random() * 2000;
            fade_out_el = Raphael.animation({
                transform: 'T ' + transformX + ',' + transformY,
                opacity: 1
            }, duration, 'cubic-bezier(.24, .51, 0, 1)').delay(100);
            element.animate(fade_out_el);
        });
    },
    morph: function (object1, object2, duration) {
        console.log('--Start morph--');
        var max = object1.length;
        if (max == undefined) max = 0;
        console.log('object2.length = ' + object2.length);
        if (max < object2.length) {

            max = object2.length;
        }
        console.log('--max = ' + max + '--');
        for (var i = 0; i < max; i++) {
            //console.log('--' + i + '--');
            if (object1[i]) {
                if (object2[i]) {
                    object1[i].animate({
                        'path': object2[i].attr('path').toString(),
                        'opacity': object2[i].attr('fill-opacity'),
                        'stroke-opacity': object2[i].attr('stoke-opacity'),
                        'stroke-width': object2[i].attr('stroke-width'),
                        'stroke-miterlimit': object2[i].attr('stroke-miterlimit'),
                        'stroke': object2[i].attr('stroke'),
                        'fill': object2[i].attr('fill'),
                        transform: object2[i].attr('transform')
                    }, duration, 'easeInOut');
                }
                else {
                    object1[i].animate({'opacity': 1, transform: 'T150,0'}, duration);
                }
            }
            else if (object2[i]) {
                object2[i].animate({'opacity': 0, transform: 'T150,0'}, duration);
            }
        }
        console.log('--End morph--');
        return object1;
    },
    fireEvent: function (element, event) {
        if (document.createEventObject) {
            // dispatch for IE
            var evt = document.createEventObject();
            return element.fireEvent('on' + event, evt)
        } else {
            // dispatch for firefox + others
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent(event, true, true); // event type,bubbling,cancelable
            return !element.dispatchEvent(evt);
        }
    },
    drawLogoBg: function (id, width, height) {
        return Raphael(id, width, height);
    },
    drawLogo: function (container) {
        return container.path('M7.6,1L7.6,1c0.4,0.4,0.4,1,0,1.4L2.4,7.2C2,7.6,1.4,7.5,1,7.1l0,0c-0.4-0.4-0.4-1,0-1.4L6.2,1 C6.6,0.6,7.2,0.6,7.6,1z' +
            'M12,1L12,1c0.4,0.4,0.4,1,0,1.4L6,8.1c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L10.6,1 C11,0.6,11.6,0.6,12,1z' +
            'M13,4L13,4c0.4,0.4,0.4,1,0,1.4L9.5,8.7c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L11.6,4 C12,3.6,12.6,3.6,13,4z').attr({
            transform: 'S3,3 T20,20',
            'stroke-width': 0,
            fill: '#fff'
        });
    },

};

jQuery(window).load(function () {
    if (jQuery('.home_wrapper').length != 0) {
        var logo_bg = Beany.drawLogoBg('logo', 60, 50);
        var logo = Beany.drawLogo(logo_bg);
        var interval = '';

        jQuery('#logo').click(function () {
            if (!jQuery(this).hasClass('active')) {
                jQuery(this).addClass('active');
                jQuery('#container').removeClass('animated zoomIn').addClass('animated zoomOut');
                jQuery('.main-menu').removeClass('animated zoomOut').addClass('animated zoomIn').show();
                jQuery('.slide-cpl').removeClass('animated fadeIn').addClass('animated fadeOut');
                auto_play_status = 0;
                setTimeout(function () {
                    var menu_active_animation = Raphael.animation({
                        "0%": {"transform": "S3,3 T20,20r45"},
                        "60%": {"transform": "S3,3 T20,-25r45", opacity: 0},
                        "65%": {"transform": "S3,3 T20,25r45", opacity: 0},
                        "70%": {
                            "path": "M24.778,21.419 19.276,15.917 24.777,10.415 21.949,7.585 16.447,13.087 10.945,7.585 8.117,10.415 13.618,15.917 8.116,21.419 10.946,24.248 16.447,18.746 21.948,24.248z",
                            "transform": "S2,2 T10,25",
                            opacity: 0
                        },
                        "100%": {"transform": "S2,2 T10,10", opacity: 1}

                    }, 500);
                    logo.animate(menu_active_animation);
                }, 200);

            }
            else {
                jQuery(this).removeClass('active');
                jQuery('#container').removeClass('animated zoomOut').addClass('animated zoomIn');
                jQuery('.main-menu').addClass('animated zoomIn').addClass('animated zoomOut').show();
                jQuery('.slide-cpl').removeClass('animated fadeOut').addClass('animated fadeIn');
                auto_play_status = 1;
                setTimeout(function () {
                    var menu_deactive_animation = Raphael.animation({
                        "0%": {"transform": "S2,2 T10,10", opacity: 1},
                        "60%": {"transform": "S2,2 T10,-25", opacity: 1},
                        "65%": {"transform": "S2,2 T10,-25", opacity: 0},
                        "70%": {"transform": "S2,2 T10,25", opacity: 0},
                        "90%": {
                            "path": 'M7.6,1L7.6,1c0.4,0.4,0.4,1,0,1.4L2.4,7.2C2,7.6,1.4,7.5,1,7.1l0,0c-0.4-0.4-0.4-1,0-1.4L6.2,1 C6.6,0.6,7.2,0.6,7.6,1z' +
                            'M12,1L12,1c0.4,0.4,0.4,1,0,1.4L6,8.1c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L10.6,1 C11,0.6,11.6,0.6,12,1z' +
                            'M13,4L13,4c0.4,0.4,0.4,1,0,1.4L9.5,8.7c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L11.6,4 C12,3.6,12.6,3.6,13,4z',
                            'transform': 'S3,3 T20,25'
                        },
                        "100%": {"transform": "S3,3 T20,20", opacity: 1},

                    }, 300);
                    logo.animate(menu_deactive_animation);
                }, 400);

            }

        });
        setTimeout(function () {
                jQuery('.heading_wrapper').show();
                jQuery('.heading_wrapper .txt-2').show();
                jQuery('.btn-wrapper button').show();
                jQuery('.btn-wrapper p').show();
            }
            , 3000);


        jQuery('.main-menu li a').hover(
            function () {
                jQuery(this).parent('li').find('.item-bg').show()
            }, function () {
                jQuery(this).parent('li').find('.item-bg').hide()
            });

        var state = 1;
        var auto_play_status = 1;
        var paper = Beany.getPaperSingleton("container", jQuery(window).width(), jQuery(window).height());
        var bg = Beany.drawBg('background');


        var cresus = Beany.drawCresus(paper);
        cresus.attr({'opacity': 0, transform: 'T250,0'});

        var durance = Beany.drawDurance(paper);
        durance.attr({'opacity': 0, transform: 'T0,0'});

        var bys = Beany.drawBYS(paper);
        bys.attr({'opacity': 0, transform: 'T150,0'});

        var club75 = Beany.drawClub75(paper);
        club75.attr({'opacity': 0, transform: 'T150,0'});

        var renault = Beany.drawRenault(paper);
        renault.attr({'opacity': 0, transform: 'T150,0'});

        var shape_obj = cresus.clone();
        shape_obj.attr({transform: 'T150,1000', opacity: 0});

        // lion part
        var lion = Beany.drawLion(paper);
        lion.attr({'opacity': 0});
        var lion_wrapper = (1920 / 2) - (lion[lion.length - 1].getBBox(true).width / 2) - 50;
        Beany.recombine(lion, 't' + (lion_wrapper) + ',50');

        var slide_nav = 1;

        jQuery('.btn-wrapper button').click(function () {
            switch (state) {
                case 1:
                    jQuery('.txt-2').removeClass('animated fadeInup').addClass('animated fadeOutUp');
                    jQuery('.txt-3').removeClass('animated fadeOutUp').addClass('animated fadeInUp').show();
                    state++;
                    break;
                case 2:
                    jQuery('.txt-3').removeClass('animated fadeInUp').addClass('animated fadeOutUp');
                    jQuery('.txt-4').removeClass('animated fadeOutUp').addClass('animated fadeInUp').show();
                    state++;
                    break;
                case 3:
                    Beany.floatUp(lion, lion_wrapper);
                    jQuery('.heading_wrapper').addClass('animated fadeOutUpBig').hide();
                    jQuery('.btn-wrapper button').addClass('animated fadeOutUp');
                    jQuery('.btn-wrapper p').addClass('animated fadeOutUp');

                    setTimeout(function () {
                        jQuery('.btn-wrapper button').hide();
                        jQuery('.btn-wrapper p').hide();
                    }, 400);
                    Beany.changeBgColor(bg, '#000');
                    state++;
                    // start with cresus
                    setTimeout(function () {
                        Beany.fadeInUp(shape_obj, 250, 0);
                        Beany.morph(shape_obj, cresus, 1500);
                    }, 2300);
                    jQuery('.nav').addClass('animated fadeInUp').show();
                    jQuery('.slide').first().addClass('active');

                    setTimeout(function () {
                        jQuery('.prj1').addClass('animated fadeInUp').show();

                    }, 2800);

                    jQuery('.slide_1').click(function () {
                        if (slide_nav != 1) {
                            Beany.morph(shape_obj, cresus, 1600);
                            slide_nav = 1;
                            Beany.changeBgColor(bg, '#191919');
                            jQuery('.prev').addClass('disabled');
                            jQuery('.next').removeClass('disabled');

                            jQuery('.prj').removeClass('animated fadeInUp');
                            jQuery('.prj .prj_info').addClass('animated fadeOutUp');
                            jQuery('.prj1 .prj_info ').removeClass('animated fadeOutUp').addClass('animated fadeInUp');
                            jQuery('.prj1').show();
                            jQuery('.slide').removeClass('active');
                            jQuery(this).addClass('active');
                        }
                    });
                    jQuery('.slide_2').click(function () {
                        if (slide_nav != 2) {
                            Beany.morph(shape_obj, durance, 1600);
                            slide_nav = 2;
                            Beany.changeBgColor(bg, '#EE5688');
                            jQuery('.prev').addClass('disabled');
                            jQuery('.next').addClass('disabled');

                            jQuery('.prj').removeClass('animated fadeInUp');
                            jQuery('.prj .prj_info').addClass('animated fadeOutUp');
                            jQuery('.prj2 .prj_info ').removeClass('fadeOutUp').addClass('animated fadeInUp');
                            jQuery('.prj2').show();
                            jQuery('.slide').removeClass('active');
                            jQuery(this).addClass('active');
                        }
                    });
                    jQuery('.slide_3').click(function () {
                        if (slide_nav != 3) {
                            Beany.morph(shape_obj, bys, 1600);
                            slide_nav = 3;
                            Beany.changeBgColor(bg, '#AB39DB');
                            jQuery('.prev').addClass('disabled');
                            jQuery('.next').addClass('disabled');

                            jQuery('.prj').removeClass('animated fadeInUp');
                            jQuery('.prj .prj_info').addClass('animated fadeOutUp');
                            jQuery('.prj3 .prj_info ').removeClass('fadeOutUp').addClass('animated fadeInUp');
                            jQuery('.prj3').show();
                            jQuery('.slide').removeClass('active');
                            jQuery(this).addClass('active');
                        }
                    });
                    jQuery('.slide_4').click(function () {
                        if (slide_nav != 4) {
                            Beany.morph(shape_obj, club75, 1600);
                            slide_nav = 4;
                            Beany.changeBgColor(bg, '#157C80');
                            jQuery('.prev').addClass('disabled');
                            jQuery('.next').addClass('disabled');

                            jQuery('.prj').removeClass('animated fadeInUp');
                            jQuery('.prj .prj_info').addClass('animated fadeOutUp');
                            jQuery('.prj4 .prj_info ').removeClass('animated fadeOutUp').addClass('animated fadeInUp');
                            jQuery('.prj4').show();
                            jQuery('.slide').removeClass('active');
                            jQuery(this).addClass('active');
                        }
                    });
                    jQuery('.slide_5').click(function () {
                        if (slide_nav != 5) {
                            Beany.morph(shape_obj, renault, 1600);
                            slide_nav = 5;
                            Beany.changeBgColor(bg, '#A90806');
                            jQuery('.prev').removeClass('disabled');
                            jQuery('.next').addClass('disabled');

                            jQuery('.prj').removeClass('animated fadeInUp');
                            jQuery('.prj .prj_info').addClass('animated fadeOutUp');
                            jQuery('.prj5 .prj_info ').removeClass('animated fadeOutUp').addClass('animated fadeInUp');
                            jQuery('.prj5').show();
                            jQuery('.slide').removeClass('active');
                            jQuery(this).addClass('active');
                        }
                    });
                    jQuery('.slide-next').click(function () {
                        switch (slide_nav) {
                            case 1:
                                // current slide == 1 and move to the 2nd(durance)
                                Beany.morph(shape_obj, durance, 1600);
                                slide_nav++;
                                Beany.changeBgColor(bg, '#EE5688');

                                jQuery('.prj').removeClass('animated fadeInUp');
                                jQuery('.prj .prj_info').addClass('animated fadeOutUp');
                                jQuery('.prj2 .prj_info ').removeClass('animated fadeOutUp').addClass('animated fadeInUp');
                                jQuery('.prj2').show();
                                jQuery('.slide').removeClass('active');
                                jQuery('.slide_2').addClass('active');
                                break;
                            case 2:
                                // current slide == 2 and move to the 3rd(bys)
                                Beany.morph(shape_obj, bys, 1600);
                                slide_nav++;
                                Beany.changeBgColor(bg, '#AB39DB');

                                jQuery('.prj').removeClass('animated fadeInUp');
                                jQuery('.prj .prj_info').addClass('animated fadeOutUp');
                                jQuery('.prj3 .prj_info ').removeClass('animated fadeOutUp').addClass('animated fadeInUp');
                                jQuery('.prj3').show();
                                jQuery('.slide').removeClass('active');
                                jQuery('.slide_3').addClass('active');
                                break;

                            case 3:
                                // current slide == 3 and move to the 4th(club75)
                                Beany.morph(shape_obj, club75, 1600);
                                Beany.changeBgColor(bg, '#157C80');
                                slide_nav++;

                                jQuery('.prj').removeClass('animated fadeInUp');
                                jQuery('.prj .prj_info').addClass('animated fadeOutUp');
                                jQuery('.prj4 .prj_info ').removeClass('animated fadeOutUp').addClass('animated fadeInUp');
                                jQuery('.prj4').show();
                                jQuery('.slide').removeClass('active');
                                jQuery('.slide_4').addClass('active');
                                break;
                            case 4:
                                // current slide == 4 and move to the 5th(renault)
                                Beany.morph(shape_obj, renault, 1600);
                                slide_nav++;
                                Beany.changeBgColor(bg, '#A90806');

                                jQuery('.prj').removeClass('animated fadeInUp');
                                jQuery('.prj .prj_info').addClass('animated fadeOutUp');
                                jQuery('.prj5 .prj_info ').removeClass('animated fadeOutUp').addClass('animated fadeInUp');
                                jQuery('.prj5').show();
                                jQuery('.slide').removeClass('active');
                                jQuery('.slide_5').addClass('active');
                                break;
                            case 5:
                                Beany.morph(shape_obj, cresus, 1600);
                                slide_nav = 1;
                                Beany.changeBgColor(bg, '#191919');

                                jQuery('.prj').removeClass('animated fadeInUp');
                                jQuery('.prj .prj_info').addClass('animated fadeOutUp');
                                jQuery('.prj1 .prj_info ').removeClass('animated fadeOutUp').addClass('animated fadeInUp');
                                jQuery('.prj1').show();
                                jQuery('.slide').removeClass('active');
                                jQuery('.slide_1').addClass('active');
                                break;
                            default:
                                break;
                        }
                    });
                    jQuery('.slide-prev').click(function () {
                        switch (slide_nav) {
                            case 5:
                                Beany.morph(shape_obj, club75, 1600);
                                slide_nav--;
                                Beany.changeBgColor(bg, '#157C80');
                                jQuery('.next').removeClass('disabled');

                                jQuery('.prj5 .prj_info').addClass('animated fadeOutUp');
                                jQuery('.prj5').removeClass('animated fadeInUp');
                                jQuery('.prj4 .prj_info ').removeClass('fadeOutUp').addClass('animated fadeInUp');
                                jQuery('.prj4').show();
                                jQuery('.slide').removeClass('active');
                                jQuery('.slide_4').addClass('active');
                                break;
                            case 4:
                                Beany.morph(shape_obj, bys, 1600);
                                Beany.changeBgColor(bg, '#AB39DB');
                                slide_nav--;

                                jQuery('.prj4 .prj_info').addClass('animated fadeOutUp');
                                jQuery('.prj4').removeClass('animated fadeInUp');
                                jQuery('.prj3 .prj_info ').removeClass('fadeOutUp').addClass('animated fadeInUp');
                                jQuery('.prj3').show();
                                jQuery('.slide').removeClass('active');
                                jQuery('.slide_3').addClass('active');
                                break;
                            case 3:
                                Beany.morph(shape_obj, durance, 1600);
                                Beany.changeBgColor(bg, '#EE5688');
                                slide_nav--;

                                jQuery('.prj3 .prj_info').addClass('animated fadeOutUp');
                                jQuery('.prj3').removeClass('animated fadeInUp');
                                jQuery('.prj2 .prj_info ').removeClass('animated fadeOutUp').addClass('animated fadeInUp');
                                jQuery('.prj2').show();
                                jQuery('.slide').removeClass('active');
                                jQuery('.slide_2').addClass('active');
                                break;
                            case 2:
                                Beany.morph(shape_obj, cresus, 1600);
                                slide_nav--;
                                Beany.changeBgColor(bg, '#191919');
                                jQuery('.prev').addClass('disabled');

                                jQuery('.prj2 .prj_info').addClass('animated fadeOutUp');
                                jQuery('.prj2').removeClass('animated fadeInUp');
                                jQuery('.prj1 .prj_info ').removeClass('animated fadeOutUp').addClass('animated fadeInUp');
                                jQuery('.prj1').show();
                                jQuery('.slide').removeClass('active');
                                jQuery('.slide_1').addClass('active');
                                break;
                            case 1:
                                Beany.morph(shape_obj, renault, 1600);
                                slide_nav = 5;
                                Beany.changeBgColor(bg, '#A90806');

                                jQuery('.prj1 .prj_info').addClass('animated fadeOutUp');
                                jQuery('.prj1').removeClass('animated fadeInUp');
                                jQuery('.prj5 .prj_info ').removeClass('animated fadeOutUp').addClass('animated fadeInUp');
                                jQuery('.prj5').show();
                                jQuery('.slide').removeClass('active');
                                jQuery('.slide_5').addClass('active');
                                break;
                            default:
                                break;
                        }
                    });
                    jQuery('.slide-status').click(function () {

                        switch (auto_play_status) {
                            case 1:
                                jQuery('.slide-status').removeClass('fa-pause').addClass('fa-play');
                                auto_play_status = 0;
                                console.log(auto_play_status);
                                break;
                            case 0:
                                jQuery('.slide-status').removeClass('fa-play').addClass('fa-pause');
                                auto_play_status = 1;
                                console.log(auto_play_status);
                                break;
                            default:
                                break;
                        }
                    });

                    // auto play
                    setInterval(function () {
                        if (auto_play_status == 1) {
                            interval = jQuery('.slide-next').trigger('click');
                        }
                    }, 7000);
                    break;
                default:
                    break;
            }
        });

        // trigger the animation when scrolldown
        // (we have to do like this because our web page don't have the scrollbar ;))
        jQuery(window).on('mousewheel', function (event) {
            if (event.deltaY < 0 && state <= 3) {
                jQuery('.btn-wrapper button').trigger('click');
            }
        });
    }
    jQuery('.project-carousel').show();
    jQuery('.project-carousel').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false
    });

});

jQuery(document).ready(function () {
    jQuery('#fullpage').fullpage({
        paddingTop: '10px'
    });
});
jQuery(window).load(function () {
    jQuery('.about_wrapper .background').show();

});