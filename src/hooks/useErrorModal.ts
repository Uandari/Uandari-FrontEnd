import Swal from 'sweetalert2';

export default function useErrorModal(message: string | null) {
  function openErrorModal() {
    return Swal.fire({
      title: `Error`,
      text: message || 'Hubo un error',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#007F2D',
    });
  }

  return { openErrorModal };
}
