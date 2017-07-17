exports.addScrollEventListener = (callback) => {
  console.log("added");
  window.addEventListener('scroll', callback);
}

exports.removeScrollEventListener = (callback) => {
  console.log("removed");
  window.removeEventListener('scroll', callback);
}
