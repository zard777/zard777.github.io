if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  switch (document.title) {
    case "/home/miracle3212":
      window.location.href = '/mobile/index-mob.html';
      break;
    case "/home/miracle3212/bio":
      window.location.href = '/mobile/bio-mob.html';
      break;
    case "/home/miracle3212/contact":
      window.location.href = '/mobile/contact-mob.html';
      break;
    case "/home/miracle3212/projects":
      window.location.href = '/mobile/projects-mob.html';
      break;
    default:
    console.error("inject.js : unknown document.title");
  }
}
