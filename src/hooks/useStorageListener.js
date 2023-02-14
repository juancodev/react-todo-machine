import React from "react";

function useStorageListener(sincronize) {
  const [storageChange, setStorageChange] = React.useState(false);

  React.useEffect(() => {
    const onChange = (change) => {
      if (change.key === 'TODOS_V1') {
        console.log('Hubo cambios en Todos_V1')
        setStorageChange(true);
      };
    };
    window.addEventListener('storage', onChange);
    return () => {
      window.removeEventListener('storage', onChange);
    };
  }, []);

  const toggleShow = () => {
    sincronize();
    setStorageChange(false);
  }

  return {
    show: storageChange,
    toggleShow,
  };
}

export { useStorageListener };