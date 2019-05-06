import React from 'react';

const postModal = props => (
  <div>
    <header>{props.title}</header>
    <section className="modal__content">
      {props.children}
    </section>
    <section className="modal__actions">
      {props.canPost && <button>Post</button>}
      {props.canCancel && <button>Cancel</button>}
    </section>

  </div>
);

export default postModal;