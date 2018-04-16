// all hrefs are documented here
// in case of new page addition, put the additional href here
// based on document.title
switch (document.title) {
  case "/home/zard777":
    document.getElementById('hem').href = "mailto:zard7@yandex.com";
    document.getElementById('hdi').href =  "https://www.debian.org";
    document.getElementById('hdi2').href = "https://www.centos.org";
    document.getElementById('hdi3').href = "https://www.opensuse.org";
    document.getElementById('cdh1').href = "/bio.html";
    document.getElementById('cdh2').href = "/contact.html";
    document.getElementById('cdh3').href = "/projects.html";
    break;
  case "/home/zard777/bio":
    document.getElementById('cdb1').href = "javascript:window.location.reload();";
    document.getElementById('cdb2').href = "/index.html";
    break;
  case "/home/zard777/contact":
    document.getElementById('cdc1').href = "javascript:window.location.reload();";
    document.getElementById('cdc2').href = "/index.html";
    document.getElementById('cm').href = "mailto:zard7@yandex.com";
    document.getElementById('cg').href = "https://github.com/zard777";
    document.getElementById('cf').href = "https://0x12345.blogspot.com?view=sidebar";
    // document.getElementById('csc').href = "https://soundcloud.com/zard777";
    // document.getElementById('cs').href = "https://open.spotify.com/user/zard777";
    // document.getElementById('cso').href = "http://stackoverflow.com/users/4946732/zard777";
    // document.getElementById('ct').href = "https://twitter.com/zard777";
    break;
  case "/home/zard777/projects":
    document.getElementById('cdp1').href = "javascript:window.location.reload();";
    document.getElementById('cdp2').href = "/index.html";
    document.getElementById('pa').href = "https://github.com/zard777/xbot_remastered";
    document.getElementById('tf').href = "https://0x12345.blogspot.com/2017/07/files-transfer-w-wormhole-cross-platform.html";
    document.getElementById('pm').href = "https://i.imgur.com/FWozzPX.png";
    document.getElementById('thv5').href = "https://github.com/zard777/ThreatHunting_v5";
    break;
  default:
  console.error("inject.js : unknown document.title");
}
