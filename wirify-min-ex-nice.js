var wf_wirify;
if (typeof jQuery == "undefined") {
  var jQ = document.createElement("script");
  jQ.type = "text/javascript";
  if (!wfIsIE()) {
    jQ.onload = wfInit;
  } else {
    jQ.onreadystatechange = function() {
      if (typeof wf_wirify == "undefined" && (this.readyState === "loaded" || this.readyState === "complete")) {
        wfInit();
      }
    };
  }
  jQ.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js";
  document.body.appendChild(jQ);
} else {
  wfInit();
}
function wfInit() {
  if (typeof wf_wirify == "undefined") {
    wf_wirify = wfClosure(typeof jQuery.noConflict == "undefined" ? jQuery : jQuery.noConflict());
  }
  wf_wirify();
}
function wfClosure(M) {
  function B() {
    n = M(window).width();
    y = M(window).height();
    E = false;
    g = 500;
    e = 0;
    V = 0;
    F = "";
    aa = 0;
  }
  function p() {
    try {
      i();
      var ai = {
        "http:" : "",
        "https:" : "",
        "file:" : ""
      };
      if (!(document.location.protocol in ai)) {
        alert("Please navigate to a web page you want to turn into a wireframe first, then click the Wirify bookmark again." + W);
        return;
      } else {
        if (M("frameset").length != 0) {
          alert("Sorry, pages with frames cannot be wirifed." + W);
          return;
        }
      }
      u();
      var af = M("#wirify");
      if (af.length != 0) {
        if (M("#wf-wireframe").hasClass("wf-greek")) {
          a();
          return;
        } else {
          if (!af.is(":visible") && E) {
            af.remove();
            B();
          } else {
            af.toggle();
            return;
          }
        }
      }
      if (M("#wf-stylesheet").length == 0) {
        B();
        t();
        if (document.location.protocol == "https:" && !S) {
          K = K.replace("http:", "https:");
          L = L.replace("http:", "https:");
        }
        if (M("body").css("position") == "relative") {
          M("body").css("position", "static");
        }
        M("head").append('<link id="wf-stylesheet" rel="stylesheet" href="' + K + "stylesheets/wirify-" + D + (S ? "" : ".min") + ".css" + (ac ? "?" + parseInt((new Date).getTime() / ac) : "") + '" type="text/css" media="all" />');
      }
      var aj = Z();
      M("body").append('<div id="wirify" class="wirify' + (S ? " wf-dev" : "") + '" style="width: 100%; height: ' + (M(document).height() + 100) + 'px;">\t<div id="wf-info" class="wirify" style="position: absolute; width: auto;">\t\t<a class="wf-nw" href="http://www.volkside.com/" title="Volkside - Interaction and Information Design, User Experience and Usability"><img alt="Volkside logo" src="' + K + 'images/volkside-logo.png" /></a>\t\t<h2>Wirifying, please wait...</h2>\t\t<p>\t\t\tWireframe created with\t\t\t<a class="wf-nw" href="http://www.wirify.com/" title="Wirify - The web as wireframes, from Volkside">Wirify</a> by\t\t\t<a class="wf-nw" href="http://www.volkside.com/" title="Volkside - Interaction and Information Design, User Experience and Usability">Volkside</a>\t\t\ton ' + 
      q() + '&nbsp;</p>\t\t<p class="wf-promo">' + j + '</p>\t\t<ul id="wf-menu">\t\t\t<li><a class="parent" href="#" title="Wirify' + (h ? " Pro" : "") + ' menu">&#9660; Wirify' + (h ? " Pro" : "") + "</a>\t\t\t\t<ul>\n" + aj + '</ul>\t\t\t</li>\t\t</ul>\t\t<p class="wf-copyright" title="Wirify &copy 2010-2011 Volkside. All rights reserved.">\t\t\t&nbsp;&copy;&nbsp; Page layout and structure are property of the\t\t\t<a class="wf-nw" href="' + location.href + '" title="Original page: ' + o + '">website owner</a></p>\t</div>\t<div id="wf-watermark" class="wirify" style="position: absolute;"><p>&nbsp;</p></div>\t<div id="wf-wireframe" class="wirify" style="position: absolute; width: ' + 
      M(document).width() + "px; height: " + (M(document).height() + 100) + 'px;">&nbsp;</div></div>');
      M("#wf-watermark").hide();
      M("#wirify").click(C);
      M("#wf-info").click(function(ak) {
        ak.stopPropagation();
      });
      M(window).resize(A);
      M("#wirify a.wf-nw").wfNewWindow();
      if (!S) {
        M('#wf-menu a[href="#export"]').addClass("wf-disabled");
      }
      M("#wf-menu a").click(r);
      M("#wf-menu").mouseover(function() {
        M("#wf-menu ul").show();
      });
      window.setTimeout(v, 100);
      if (typeof jQuery.ui == "undefined" || typeof jQuery.draggable == "undefined") {
        var ag = (document.location.protocol == "https:" ? "https:" : "http:") + "//ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.min.js";
        M.getScript(ag, f);
      } else {
        f();
      }
    } catch (ah) {
      alert("Wirifying this page was unsuccessful\n(" + ah + ")\n\n" + wf_troubleshoot + W);
      return;
    }
    l();
  }
  function Z() {
    var af = "";
    af += '<li><a href="#export" rel="" title="Export wireframe a downloadable document">Export wireframe <span class="wf-menu-arrow">&#9658;</span></a>\n<ul>\n';
    af += '<li><a href="#export" rel="graffle" title="Export wireframe as an OmniGraffle document">Export to OmniGraffle</a></li>\n<li><a href="#export" rel="bmml" title="Export wireframe as a Balsamiq Mockups document">Export to Balsamiq</a></li>\n<li><a href="#export" rel="vdx" title="Export wireframe as a Microsoft Visio document">Export to Visio</a></li>\n<li><a href="#export" rel="svg" title="Export wireframe as a Scalable Vector Graphics (SVG) document">Export as SVG</a></li>\n';
    af += '<li><a class="wf-nw" href="http://www.wirify.com/about/wirify-pro-and-wirify-credits/" title="Wirify Pro lets you export wireframes to OmniGraffle and Balsamiq, and more">Get Wirify Pro to export wireframes, and more</a></li>\n';
    af += "</ul>\n</li>\n";
    af += '<li><a href="#greek" title="Greek original page text with lorem ipsum">Greek original page</a></li>\n';
    af += '<li><a href="#" title="Wirify help and support">Support <span class="wf-menu-arrow">&#9658;</span></a>\n<ul>\n<li><a href="#about" title="View Wirify version and page processing details">About Wirify</a></li>\n';
    af += '<li><a class="wf-nw" href="http://www.wirify.com/support/user-guide/" title="Go to Wirify user guide">Wirify user guide</a></li>\n';
    af += '<li><a class="wf-nw" href="http://www.wirify.com/support/contact/" title="Leave feedback">Got feedback?</a></li>\n<li><a class="wf-nw" href="http://twitter.com/wirify" title="Follow Wirify on Twitter">Follow Wirify on Twitter</a></li>\n';
    af += '</ul>\n</li>\n<li><a href="#close" title="Close wireframe and return to original page">Close</a></li>\n';
    return af;
  }
  function ad() {
    M("#wf-menu ul a").not('a[href="#greek"],a[href="#about"],a[href="#close"],a[href="#"],a.wf-nw').addClass("wf-disabled");
  }
  function r() {
    if (M(this).hasClass("wf-disabled")) {
      return false;
    }
    M("#wf-menu ul").toggle();
    var ag = M(this).attr("href").substr(1);
    switch(ag) {
      case "greek":
        try {
          i();
          Q("Greeking, please wait...");
          if (typeof wfLoremipsumizer == "undefined") {
            M.getScript(K + "plugins/loremipsumizer" + (S ? "" : ".min") + ".js" + (ac ? "?" + parseInt((new Date).getTime() / ac) : ""), G);
          } else {
            window.setTimeout(G, 100);
          }
          M(this).addClass("wf-disabled");
        } catch (af) {
          Q();
          alert("Greeking this page was unsuccessful\n(" + af + ")\n\n" + wf_troubleshoot + W);
        }
        break;
      case "about":
        alert(d() + W);
        break;
      case "close":
        C();
        break;
    }
    return false;
  }
  function t() {
    M.fn.wfBlockify = ae;
    M.fn.wfRect = ab;
    M.fn.wfNewWindow = function() {
      return M(this).each(function() {
        M(this).attr("title", M(this).attr("title") + " - Opens in a new window");
        M(this).click(function() {
          window.open(this.href);
          return false;
        });
      });
    };
    M.expr[":"].noOverflow = function(af) {
      return M(af).css("overflow") === "hidden";
    };
    if (!P() && !wfIsIE()) {
      M.fn.wfWidth = function() {
        return M(this).width();
      };
      M.fn.wfHeight = function() {
        return M(this).height();
      };
      return;
    }
    M.fn.wfWidth = function() {
      var af = M(this).width();
      if (af == n) {
        af = parseInt(M(this).css("width"));
        if (isNaN(af) || af == 0) {
          af = M(this).innerWidth();
        }
      }
      return af;
    };
    M.fn.wfHeight = function() {
      var af = M(this).height();
      if (af == y) {
        af = parseInt(M(this).css("height"));
        if (isNaN(af) || af == 0) {
          af = M(this).innerHeight();
        }
      }
      return af;
    };
  }
  function f() {
    var ag = M(document).width();
    var ak = M(document).height();
    var af = M("#wf-info").wfWidth();
    var ah = M("#wf-info").wfHeight();
    var aj = parseInt(N * af);
    var al = [-aj + 12, 0, ag - (af - aj) - 12, ak - ah - 12];
    if (M("#wf-info").hasClass("ui-draggable")) {
      M("#wf-info").draggable("option", "containment", al);
    } else {
      try {
        M("#wf-info").draggable({
          containment : al
        });
      } catch (ai) {
      }
    }
  }
  function v() {
    var ag = new Array("table", "dl", "pre", "blockquote", "code", "span", "font", "a", "p ~ ol", "p ~ ul", "ol + p", "ul + p", "p", "thead", "img", "object", "embed", "iframe", "video", "canvas", "input", "select", "textarea", "h6", "h5", "h4", "h3", "h2", "h1");
    if (typeof Cufon != "undefined") {
      delete m.canvas;
      ag.splice(ag.indexOf("canvas"), 1);
    }
    M.each(ag, function(ak, al) {
      (al.indexOf("+") > 0 ? M(al).prev() : M(al)).filter(":visible").not("#wirify *").wfBlockify();
    });
    if (V < X) {
      var ah = null;
      var af;
      M("iframe").each(function() {
        if (ah == null || M(this).wfWidth() * M(this).wfHeight() > ah.wfWidth() * ah.wfHeight()) {
          ah = M(this);
        }
      });
      try {
        if (ah != null && (af = ah.contents().find("html body")).length) {
          M("#wf-wireframe").html("&nbsp;");
          V = 0;
          M.each(ag, function(ak, al) {
            (al.indexOf("+") > 0 ? af.find(al).prev() : af.find(al)).filter(":visible").not("#wirify *").wfBlockify();
          });
        }
      } catch (ai) {
      }
    }
    var aj = Q();
    M("#wf-watermark p").text(aj + " via wirify");
    M("#wf-watermark").show();
    window.setTimeout(R, 100);
  }
  function R() {
    M("#wf-info").css("width", M("#wf-info").wfWidth() + 0.5);
    M("#wf-info").css("left", M("#wf-info").offset().left);
    var af = M("#wf-watermark").wfWidth();
    var ag = Math.max(0, g) + Math.min(n, 1E3) - 50 - af;
    M("#wf-watermark").css("width", af + 10);
    M("#wf-watermark").css("left", ag);
    M("#wf-watermark").css("top", y - 50);
    if (M("#wf-info").hasClass("ui-draggable")) {
      f();
    }
    e = Y();
    if (V < X) {
      alert(wf_min_elements_warning);
    }
  }
  function C() {
    if (M("#wf-wireframe").hasClass("wf-greek")) {
      a();
      return;
    }
    u();
    if (S) {
      M("#wirify").remove();
    } else {
      M("#wirify").hide();
    }
  }
  function ae() {
    var ao;
    var ak;
    var ah;
    var al;
    var aj;
    var an;
    var am;
    var ai;
    var ag;
    var af = M().jquery.substr(0, 3) == "1.2";
    return M(this).each(function() {
      if (af && M(this).parents("#wirify").length == 1) {
        return;
      }
      ao = M(this).get(0).nodeName.toLowerCase();
      al = M(this).wfRect();
      if (!al.top && !al.left || (al.width < 5 || al.height < 5)) {
        return;
      }
      try {
        am = x > 0 ? M(this).parents(":noOverflow") : [];
        if (am.length > 0) {
          ai = am.filter(":last").wfRect();
          if (x == 2 && am.length > 2) {
            ag = am.filter(":eq(1)").wfRect();
            if (U(ai, ag)) {
              ai = I(ai, ag);
            }
          }
          if (U(al, ai)) {
            al = I(al, ai);
          } else {
            return;
          }
        }
      } catch (ap) {
      }
      if (al.width < 5 || al.height < 5) {
        return;
      }
      ak = ["wirify", " wf-" + ao];
      if (ao in H) {
        ak.push("wf-interactive");
      } else {
        if (ao in m) {
          ak.push("wf-placeholder");
          al.width -= 4;
          al.height -= 4;
        } else {
          if (ao in s) {
            ak.push("wf-formelem");
            al.width -= 6;
            al.height -= 6;
            if (ao == "input" && M(this).attr("type") in {
              submit : "",
              button : "",
              image : ""
            }) {
              ak.push("wf-button");
              al.width -= 2;
              al.height -= 2;
            }
          }
        }
      }
      ak = ak.join(" ");
      if (al.width < 1) {
        al.width = 1;
      }
      if (al.height < 1) {
        al.height = 1;
      }
      ah = "top: " + al.top + "px; left: " + al.left + "px; width: " + al.width + "px; height: " + al.height + "px;";
      aj = "&nbsp;";
      if (ao in m) {
        M("#wf-wireframe").append('<img class="' + ak + '" style="' + ah + '" title="' + ao + '" alt="Placeholder image" src="' + K + 'images/placeholder.png" />');
      } else {
        M("#wf-wireframe").append('<div class="' + ak + '" style="' + ah + '" title="' + ao + '">' + aj + "</div>");
      }
      g = Math.min(g, al.left);
      V++;
    });
  }
  function A() {
    M(window).unbind("resize", A);
    E = true;
  }
  function a() {
    Q("Reloading page...");
    document.location = document.location;
    return false;
  }
  function u() {
    if (typeof o == "undefined") {
      o = document.title;
    }
    if (document.title.indexOf(b) == 0) {
      document.title = o;
    } else {
      document.title = b + o;
    }
  }
  function Q(ah) {
    if (typeof ah != "undefined") {
      M("#wf-info h2").text(ah + "");
      return ah;
    }
    var ag;
    if (document.location.protocol == "file:" || (document.location.host == "" || document.location.host == "localhost")) {
      var af = (document.location + "").split("/");
      ag = af.pop();
      if (ag == "") {
        ag = af.pop();
      }
      ag = ag.split("?")[0];
    } else {
      ag = (document.location.host + "").replace(/^www\./, "");
    }
    M("#wf-info h2").text(ag);
    return ag;
  }
  function q() {
    var af = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
    var ag = new Date;
    return ag.getDate() + " " + af[ag.getMonth()] + " " + ag.getFullYear();
  }
  function d() {
    var ah = h ? "Wirify Pro" : "Wirify free";
    var ai = "";
    var af = "";
    var ag = M("#wf-wireframe").hasClass("wf-greek");
    if (h) {
      ai = "\n\nWirify Pro licensed to " + wf_bookmarklet.licensee;
    }
    af = typeof wf_bookmarklet == "object" ? wf_bookmarklet.ver : wf_bookmarklet;
    ah += " " + D + O + ", bookmarklet " + af + ", jQuery " + M.fn.jquery + "\n(" + w + ")" + ai + "\n\n" + (ag ? "Page greeked" : V + " page elements wirified") + " in " + e + "s";
    if (ag) {
      ah += "\nLorempsumizer (c) Choon Keat";
    }
    return ah;
  }
  function l(af) {
    var ai = z(af);
    var ah = "";
    var ag;
    for (ag in ai) {
      ah += ag + "=" + ai[ag] + "&";
    }
    M("#wf-watermark").css("background", 'white url("' + K + "usage/?" + ah + 'img=1") top right no-repeat');
  }
  function P() {
    return Object.prototype.toString.call(window.opera) == "[object Opera]";
  }
  function ab() {
    var af = {
      top : M(this).offset().top,
      left : M(this).offset().left,
      width : M(this).wfWidth(),
      height : M(this).wfHeight()
    };
    af.right = af.left + af.width;
    af.bottom = af.top + af.height;
    return af;
  }
  function I(ag, af) {
    var ah = {
      left : Math.max(ag.left, af.left),
      top : Math.max(ag.top, af.top),
      right : Math.min(ag.right, af.right),
      bottom : Math.min(ag.bottom, af.bottom)
    };
    ah.width = ah.right - ah.left;
    ah.height = ah.bottom - ah.top;
    return ah;
  }
  function U(ag, af) {
    return!(af.left > ag.right || (af.right < ag.left || (af.top > ag.bottom || af.bottom < ag.top)));
  }
  function i() {
    T = (new Date).getTime();
  }
  function Y() {
    return((new Date).getTime() - T) / 1E3;
  }
  function z(af) {
    var ah = {
      url : encodeURIComponent(location.href),
      title : encodeURIComponent(o),
      wf : D + O + (h ? "pro" : ""),
      bm : typeof wf_bookmarklet == "object" ? wf_bookmarklet.ver : wf_bookmarklet,
      t : parseInt((new Date).getTime())
    };
    if (typeof af != "undefined") {
      var ag;
      for (ag in af) {
        ah[ag] = af[ag];
      }
    }
    return ah;
  }
  function k(af) {
    M("#wirify").css("cursor", typeof af == "string" ? af : "pointer");
  }
  function G() {
    M("#wirify").css("background-color", "transparent");
    M("#wf-wireframe").html("&nbsp;");
    M("#wf-wireframe").addClass("wf-greek");
    M("#wf-info p.wf-promo").html('and <a class="wf-nw" href="http://blog.choonkeat.com/weblog/2010/09/loremipsumizer.html" title="Loremipsumizer by Choon Keat">Loremipsumizer</a> by <a class="wf-nw" href="http://www.choonkeat.com/" title="Choon Keat">Choon Keat</a>');
    M("#wf-info p.wf-promo a.wf-nw").wfNewWindow();
    var af = wfLoremipsumizer(M, K);
    af();
    Q();
    M("#wf-wireframe").click(C);
    e = Y();
    l({
      mode : "greek"
    });
  }
  var W = "\n\nWirify - The web as wireframes\nCopyright (c) 2010-2011 Volkside. All rights reserved.\nVisit www.wirify.com";
  var D = "1.7";
  var O = ".1";
  var w = "";
  var b = "Wirify wireframe - ";
  var N = 0.75;
  var J = false;
  var x = 2;
  var X = 5;
  var h;
  var j;
  var K;
  var L;
  var ac;
  var S;
  var H = {
    object : "",
    embed : "",
    iframe : "",
    video : ""
  };
  var m = {
    canvas : "",
    img : ""
  };
  var s = {
    input : "",
    select : "",
    textarea : ""
  };
  var c = {
    h1 : "",
    h2 : "",
    h3 : "",
    h4 : "",
    h5 : "",
    h6 : ""
  };
  h = false;
  j = '<a class="wf-nw" href="http://www.naviewapp.com/via/wirify" title="Naview - Create easier navigations through prototyping and testing, from Volkside">Check out Naview</a>, our IA prototyping and testing service';
  wf_troubleshoot = "- Make sure page is valid HTML\n- Make sure page has no prior JavaScript errors\n- Make sure page uses recent jQuery version\n- Try running Wirify again\n- Try a different browser";
  wf_min_elements_warning = "Wirifying completed but very few page elements detected - you will probably see just a blank page.\n\nThis usually happens when the page makes extensive use of Flash or iframes. These pages do not wirify well.";
  if (typeof "Fri Jul  8 17:16:49 2011" != "undefined") {
    w = "Fri Jul  8 17:16:49 2011 AEST";
  }
  K = "http://www.wirify.com/client/";
  L = "http://www.wirify.com/pro/";
  ac = 864E5;
  S = false;
  var n;
  var y;
  var E;
  var g;
  var T;
  var e;
  var V;
  var o;
  var F;
  var aa;
  return p;
}
function wfIsIE() {
  return/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent);
}
;
