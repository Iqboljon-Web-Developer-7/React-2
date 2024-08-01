import React from "react";

const SubFooter = () => {
  return (
    <footer className="subFooter p-6 flex justify-between items-start md:items-center flex-col sm:flex-row gap-y-2">
      <div className="subFooter__item">
        <p>©Candleaf All Rights Reserved.</p>
      </div>
      <div className="subFooter__item">
        <p>Designed with ♥️ by uxbly</p>
      </div>
    </footer>
  );
};

export default SubFooter;
