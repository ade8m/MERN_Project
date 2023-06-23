


export const showAlert = (message, type) => {
   
    const alertElement = document.getElementById('alert');
    alertElement.innerText = message;
  
    alertElement.classList.remove('alert-success', 'alert-danger');
    if (type === 'success') {
      alertElement.classList.add('alert-success');
    } else if (type === 'error') {
      alertElement.classList.add('alert-danger');
    }
  
    alertElement.style.display = 'block';
  
    
    setTimeout(() => {
      alertElement.style.display = 'none';
    }, 3000);
  };