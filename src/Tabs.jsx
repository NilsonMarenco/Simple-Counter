import React, { useState } from 'react';

const Tabs = () => {
      const [activeTab, setActiveTab] = useState(0);

      const TabClick = (index) => {
            setActiveTab(index);
      };

      const tabContents = [
            'ANÁLISIS AÑO 2022 € 3.465.832',
            'MENSAJES Ingresos Estables Promedio Recomendado', 
            'CONTACTO: financial@fn.com +34644006625'];

      return (
            <>
                  <div className="tab-list">
                        <div
                              className={`tab ${activeTab === 0 && 'active'}`}
                              onClick={() => TabClick(0)}>📊</div>
                        <div
                              className={`tab ${activeTab === 1 && 'active'}`}
                              onClick={() => TabClick(1)}>📩</div>
                        <div
                              className={`tab ${activeTab === 2 && 'active'}`}
                              onClick={() => TabClick(2)}>📞</div>
                  </div>
                  <div className="tab-content">
                        {tabContents[activeTab]}
                  </div>
            </>
      );
};

export default Tabs;
