// all hrefs are documented here
// in case of new page addition, put the additional href here
// based on document.title
switch (document.title) {
  case "/home/miracle3212":
    document.getElementById('hem').href = "mailto:zard7@yandex.com";
    document.getElementById('hdi').href =  "https://www.debian.org";
    document.getElementById('hdi2').href = "https://www.centos.org";
    document.getElementById('hdi3').href = "https://www.opensuse.org";
    document.getElementById('cdh1').href = "/bio.html";
    document.getElementById('cdh2').href = "/contact.html";
    document.getElementById('cdh3').href = "/projects.html";
    break;
  case "/home/miracle3212/bio":
    document.getElementById('cdb1').href = "javascript:window.location.reload();";
    document.getElementById('cdb2').href = "/index.html";
    break;
  case "/home/miracle3212/contact":
    document.getElementById('cdc1').href = "javascript:window.location.reload();";
    document.getElementById('cdc2').href = "/index.html";
    document.getElementById('cm').href = "mailto:zard7@yandex.com";
    document.getElementById('cg').href = "https://github.com/miracle3212";
    document.getElementById('cf').href = "https://0x12345.blogspot.com?view=sidebar";
    // document.getElementById('csc').href = "https://soundcloud.com/miracle3212";
    // document.getElementById('cs').href = "https://open.spotify.com/user/miracle3212";
    // document.getElementById('cso').href = "http://stackoverflow.com/users/4946732/miracle3212";
    // document.getElementById('ct').href = "https://twitter.com/miracle3212";
    break;
  case "/home/miracle3212/projects":
    document.getElementById('cdp1').href = "javascript:window.location.reload();";
    document.getElementById('cdp2').href = "/index.html";
    document.getElementById('pa').href = "https://github.com/miracle3212/xbot_remastered";
    document.getElementById('pm').href = "https://github.com/miracle3212/TrustTrees";
    document.getElementById('ps').href = "https://github.com/miracle3212/wifi-monitor";
    document.getElementById('tf').href = "https://0x12345.blogspot.com/2017/07/files-transfer-w-wormhole-cross-platform.html";
    break;
  default:
  console.error("inject.js : unknown document.title");
}
