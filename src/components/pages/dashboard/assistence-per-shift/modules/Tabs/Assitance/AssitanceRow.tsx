import { useState } from 'react';

type AssitanceRowProps = {
  shift: string;
  mustPresent: number;
  isPresent: number;
  mustMissing: number;
  isMissing: number;
  mustBorrowed: number;
  isBorrowed: number;
  mustTraining: number;
  isTraining: number;
};

export default function AssitanceRow({
  shift,
  mustPresent,
  isPresent,
  mustMissing,
  isMissing,
  mustBorrowed,
  isBorrowed,
  mustTraining,
  isTraining,
}: AssitanceRowProps) {
  const [values, setValues] = useState({
    mustPresent,
    isPresent,
    mustMissing,
    isMissing,
    mustBorrowed,
    isBorrowed,
    mustTraining,
    isTraining,
  });

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    // Validar si el valor contiene "e" y eliminarlo
    if (value.includes('e')) {
      const sanitizedValue = value.replace(/e/gi, '');
      setValues((prevValues) => ({
        ...prevValues,
        [name]: sanitizedValue,
      }));
    } else {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Evitar que se presione la tecla "e"
    if (e.key === 'e') {
      e.preventDefault();
    }
  };

  return (
    <div className="grid grid-cols-5">
      <div className="w-full h-32 grid grid-cols-5 border-r">
        <div className="h-full flex justify-center items-center col-span-3 border-r font-medium">
          {shift}
        </div>
        <div className="grid grid-rows-2 h-full col-span-2">
          <div className="flex justify-center items-center border-b">Debe</div>
          <div className="flex justify-center items-center ">Es</div>
        </div>
      </div>
      {/* Presentes */}
      <div className="border-r grid grid-rows-2">
        <input
          type="number"
          min={0}
          name="mustPresent"
          className="border-b outline-none text-center"
          value={values.mustPresent}
          onChange={(e) => handleInputChange(e)}
          onKeyPress={(e) => handleKeyPress(e)}
        />
        <input
          type="number"
          min={0}
          name="isPresent"
          className="outline-none text-center"
          value={values.isPresent}
          onChange={(e) => handleInputChange(e)}
          onKeyPress={(e) => handleKeyPress(e)}
        />
      </div>
      {/* Ausentes */}
      <div className="border-r grid grid-rows-2">
        <input
          type="number"
          min={0}
          name="mustMissing"
          className="border-b outline-none text-center"
          value={values.mustMissing}
          onChange={(e) => handleInputChange(e)}
          onKeyPress={(e) => handleKeyPress(e)}
        />
        <input
          type="number"
          min={0}
          name="isMissing"
          className="outline-none text-center"
          value={values.isMissing}
          onChange={(e) => handleInputChange(e)}
          onKeyPress={(e) => handleKeyPress(e)}
        />
      </div>
      {/* Prestados */}
      <div className="border-r grid grid-rows-2">
        <input
          type="number"
          min={0}
          name="mustBorrowed"
          className="border-b outline-none text-center"
          value={values.mustBorrowed}
          onChange={(e) => handleInputChange(e)}
          onKeyPress={(e) => handleKeyPress(e)}
        />
        <input
          type="number"
          min={0}
          name="isBorrowed"
          className="outline-none text-center"
          value={values.isBorrowed}
          onChange={(e) => handleInputChange(e)}
          onKeyPress={(e) => handleKeyPress(e)}
        />
      </div>
      {/* Capacitación / Taller KVP */}
      <div className="border-r grid grid-rows-2">
        <input
          type="number"
          min={0}
          name="mustTraining"
          className="border-b outline-none text-center"
          value={values.mustTraining}
          onChange={(e) => handleInputChange(e)}
          onKeyPress={(e) => handleKeyPress(e)}
        />
        <input
          type="number"
          min={0}
          name="isTraining"
          className="outline-none text-center"
          value={values.isTraining}
          onChange={(e) => handleInputChange(e)}
          onKeyPress={(e) => handleKeyPress(e)}
        />
      </div>
      <div className="border-y py-3 col-span-5 flex justify-end pr-12">
        <button
          type="button"
          className="bg-main_blue_dark text-white px-6 py-2 font-medium rounded-lg"
        >
          Guardar registros del turno
        </button>
      </div>
    </div>
  );
}
