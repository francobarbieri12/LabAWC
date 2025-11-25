export function showAlert(message, type) {
  const alertContainer = document.querySelector(".alert-container");
  const alertId = "alert-" + Date.now();
  const alertHtml = `
        <div id="${alertId}" class="alert alert-${type} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;
  alertContainer.innerHTML = alertHtml;

  const alertElement = document.getElementById(alertId);
  if (alertElement && window.bootstrap) {
    const alert = new bootstrap.Alert(alertElement);
  }

  setTimeout(() => {
    const alert = document.getElementById(alertId);
    if (alert) {
      const bsAlert = bootstrap.Alert.getInstance(alert);
      if (bsAlert) bsAlert.close();
    }
  }, 3000);
}
