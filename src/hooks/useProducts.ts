/* import { useState } from 'react';

import { useAppDispatch } from '@app/store';
import { colors } from '@constants/colors';
import { Product, ProductFormData } from '@interfaces/Product';
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from '@redux/thunks/productThunk';
import Swal from 'sweetalert2';

const useProducts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenToUpdate, setIsModalOpenToUpdate] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsModalOpenToUpdate(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsModalOpenToUpdate(false);
    setSelectedProduct(null);
  };

  const handleDeleteProduct = async (id: number) => {
    try {
      const result = await Swal.fire({
        title: 'Eliminar Producto',
        text: '¿Está seguro que desea eliminar el usuario seleccionado?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: `${colors.primary}`,
        cancelButtonColor: `${colors.error}`,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
      });

      if (result.isConfirmed) {
        await dispatch(deleteProduct(id));
        dispatch(getProducts());
        Swal.fire('¡Eliminado!', 'El producto ha sido eliminado.', 'success');
      }
    } catch (error) {
      Swal.fire('Error', (error as Error).message, 'error');
    }
  };

  const handleCreateProduct = async (productData: ProductFormData) => {
    dispatch(createProduct(productData));
  };

  const handleUpdateProduct = async (productData: Product) => {
    dispatch(updateProduct(productData));
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setSearchTerm(event.target.value);
  };

  return {
    isModalOpen,
    isModalOpenToUpdate,
    searchTerm,
    selectedProduct,
    handleOpenModal,
    handleCloseModal,
    handleDeleteProduct,
    handleUpdateProduct,
    handleCreateProduct,
    setIsModalOpenToUpdate,
    setSelectedProduct,
    handleInputChange,
  };
};

export default useProducts;
 */