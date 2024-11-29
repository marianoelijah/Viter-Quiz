import {
    setIsConfirm,
    setIsDelete,
    setIsEdit,
  } from "@/components/store/storeAction";
  import { StoreContext } from "@/components/store/storeContext";
  import {
    Archive,
    ArchiveRestore,
    FilePenLine,
    Trash2,
  } from "lucide-react";
  import React from "react";
  import LoadMore from "../partials/LoadMore";
  import ModalConfirm from "../partials/modals/ModalConfirm";
  import ModalDelete from "../partials/modals/ModalDelete";
  import Pills from "../partials/Pills";

  
  const QuestionsTable = () => {
    const { store, dispatch } = React.useContext(StoreContext);
    
    let counter = 1;
  
    const handleEdit = () => {
      dispatch(setIsEdit(true));
    };
  
    const handleDelete = () => {
      dispatch(setIsDelete(true));
    };
  
    const handleRestore = () => {
      dispatch(setIsConfirm(true));
    };
  
    const handleArchive = () => {
      dispatch(setIsConfirm(true));
    };
  
    return (
      <>
        <div className="p-4 bg-secondary rounded-md mt-10 border border-line relative">
          {/* <SpinnerTable /> */}
          <div className="table-wrapper custom-scroll">
            {/* <TableLoader count={10} cols={4} /> */}
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Status</th>
                  <th>Questions</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                  <td colSpan={100}>
                    <IconNoData />
                  </td>
                </tr>
                <tr>
                  <td colSpan={100}>
                    <IconServerError />
                  </td>
                </tr> */}
               {Array.from(Array(6).keys()).map((i) => (
                 <tr key={i}>
                 <td>{counter++}.</td>
                 <td>
                   <Pills />
                 </td>
                 <td>xxxx</td>

                 <td>
                   <ul className="table-action">
                     {true ? (
                       <>
                         
                         <li>
                           <button
                             className="tooltip"
                             data-tooltip="Edit"
                             onClick={() => handleEdit()}
                           >
                             <FilePenLine />
                           </button>
                         </li>
                         <li>
                           <button
                             className="tooltip"
                             data-tooltip="Archive"
                             onClick={() => handleArchive()}
                           >
                             <Archive />
                           </button>
                         </li>
                       </>
                     ) : (
                       <>
                         <li>
                           <button
                             className="tooltip"
                             data-tooltip="Restore"
                             onClick={() => handleRestore()}
                           >
                             <ArchiveRestore />
                           </button>
                         </li>
                         <li>
                           <button
                             className="tool-tip"
                             data-tooltip="Delete"
                             onClick={handleDelete}
                           >
                             <Trash2 />
                           </button>
                         </li>
                       </>
                     )}
                   </ul>
                 </td>
               </tr>
               ))}
                 
               
              </tbody>
            </table>
  
       
          </div>
        </div>
  
        {store.isDelete && <ModalDelete />}
        {store.isConfirm && <ModalConfirm />}

      </>
    );
  };
  
  export default QuestionsTable;