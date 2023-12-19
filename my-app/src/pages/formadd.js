import React from 'react';

function Formadd() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="name">Name:</label>
      </p>
      <input type="text" id="name" name="name" placeholder="Name" required />
      <p>
        <label htmlFor="ID">ID:</label>
      </p>
      <input type="text" id="name" name="name" placeholder="Your ID" required />
      <p>
        <label htmlFor="name">Name Of Your Item:</label>
      </p>
      <input type="text" id="name" name="name" placeholder="Name" required />

      <p>
        <label htmlFor="name">Description:</label>
      </p>
      <input type="text" id="name" name="name" placeholder="description" required />

      <p></p>

      

      <p>
        
        <label htmlFor="email">Email:</label>
      </p>
      <input type="email" id="email" name="email" placeholder="info@example.com" required />

      <p>
        <label htmlFor="message">Comment:</label>
      </p>
      <textarea id="message" name="message" placeholder="Your message" required></textarea>

      <button type="submit">Add To Menu</button>
    </form>
  );
}

export default Formadd;
