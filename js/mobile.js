if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  switch (document.title) {
    case "/home/zard777":
      window.location.href = '/mobile/index-mob.html';
      break;
    case "/home/zard777/bio":
      window.location.href = '/mobile/bio-mob.html';
      break;
    case "/home/zard777/contact":
      window.location.href = '/mobile/contact-mob.html';
      break;
    case "/home/zard777/projects":
      window.location.href = '/mobile/projects-mob.html';
      break;
    default:
    console.error("inject.js : unknown document.title");
  }
}
