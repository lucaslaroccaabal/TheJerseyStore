function showNotification(message) {
  Toastify({
    text: message,
    duration: 3000,
    gravity: "bottom",
    style: {
      background: "#fd6bb7",
      zindex: "100",
    },
  }).showToast();
}
