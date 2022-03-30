import React from 'react';

interface ITable {

    headers : string [] ,
    children : JSX.Element | JSX.Element[],
    headerStyle : Object
}

const AdminTable = ({headers  , children , headerStyle} : ITable):JSX.Element => {
    
    return (
              	<div className="table">
		<div className="table-header">
			
            {headers.length >0 ? headers.map(header =>{
                return <div style={headerStyle}  className="header__item ">{header}</div>
            }) : "no data"}

            
		
		</div>
		<div className="table-content">	

                {children}
       
	
      	
		
		
		</div>	
	</div>
    );
};

export default AdminTable;