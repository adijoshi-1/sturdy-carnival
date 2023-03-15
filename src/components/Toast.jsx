import Swal from 'sweetalert2'

export const Toast = (params = {}) => {
  return Swal.fire({
    title: params?.title || 'Unknown Message',
    icon: params?.icon || false,
    timer: params.timer || '5000',
    showConfirmButton: false,
    timerProgressBar: true,
    toast: true,
    position: params.position || 'top-right',
  })
}
