import { Button, Select } from 'antd';

function FormStatus() {
  return (
    <div className="px-2 pt-2">
      <h4>Estado de escalamiento</h4>
      <p className="text-main_gray mb-2">#1245</p>
      <Select
        showSearch
        placeholder="Selecciona el estado del problema"
        options={[
          {
            value: 'Problema definido / Parche',
            label: 'Problema definido / Parche',
          },
          {
            value: 'Solución definida contramedida',
            label: 'Solución definida contramedida',
          },
          {
            value: 'Selección introducida seguimiento',
            label: 'Selección introducida seguimiento',
          },
          {
            value: 'Solución efectiva',
            label: 'Solución efectiva',
          },
        ]}
      />
      <div className="flex justify-end mt-2">
        <Button
          className="bg-[#1677ff]"
          htmlType="submit"
          type="primary"
          size="middle"
        >
          Guardar
        </Button>
      </div>
    </div>
  );
}

export default FormStatus;
