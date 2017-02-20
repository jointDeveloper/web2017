window.addEventListener('load', init);

function init() {
  if (window.Notification.permission === 'granted') {
    createNotification();
  } else {
    window.Notification.requestPermission(permission => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        createNotification();
      }
    });
  }
}

function createNotification() {
  const notification = new window.Notification('Bienvenido', {
    body: 'jointDeveloper te da la Bienvenida',
    icon: 'img/icon.png'
  });
}
