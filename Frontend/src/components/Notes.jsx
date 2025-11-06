import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BiTime } from "react-icons/bi";

export default function Notes({ title, description, date, handleUpdate, handleDelete, noteId }) {
  return (
    <div className="note-card card border-0 h-100 shadow-sm hover-shadow">
      <div className="card-body p-4 d-flex flex-column">
        <div className="note-header mb-3">
          <h5 className="card-title text-capitalize mb-2 fw-semibold">
            {title}
          </h5>
          <div className="note-meta d-flex align-items-center gap-2">
            <BiTime className="text-muted" size={16} />
            <small className="text-muted">{date}</small>
          </div>
        </div>
        
        {description && (
          <div className="note-content flex-grow-1 mb-3">
            <p className="card-text mb-0" 
               style={{ 
                 minHeight: '60px',
                 maxHeight: '120px',
                 overflow: 'hidden',
                 display: '-webkit-box',
                 WebkitLineClamp: 4,
                 WebkitBoxOrient: 'vertical',
                 lineHeight: '1.5',
                 color: 'var(--secondary-text-color)'
               }}>
              {description}
            </p>
          </div>
        )}
        
        <div className="note-actions d-flex justify-content-end gap-2 mt-auto pt-2 border-top">
          <button 
            className="btn btn-light btn-sm p-2"
            onClick={() => handleUpdate({ _id: noteId, title, description })}
            data-bs-toggle="modal"
            data-bs-target="#eiditModal"
            title="Edit note"
          >
            <FaEdit size={16} className="text-primary" />
          </button>
          <button 
            className="btn btn-light btn-sm p-2"
            onClick={() => handleDelete(noteId)}
            data-bs-toggle="modal"
            data-bs-target="#deleteEmployeeModal"
            title="Delete note"
          >
            <MdDelete size={16} className="text-danger" />
          </button>
        </div>
      </div>
    </div>
  )
}
