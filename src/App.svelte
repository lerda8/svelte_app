<script>
  let count = 0;
  let formData = {
    name: '',
    email: '',
    message: ''
  };
  
  function increment() {
    count += 1;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Form submitted:', formData);
  }
</script>

<main>
  <h1>Welcome to Svelte</h1>
  
  <button on:click={increment}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
  </button>

  <form on:submit={handleSubmit}>
    <div class="form-group">
      <label for="name">Name:</label>
      <input 
        type="text" 
        id="name" 
        bind:value={formData.name} 
        required
      />
    </div>

    <div class="form-group">
      <label for="email">Email:</label>
      <input 
        type="email" 
        id="email" 
        bind:value={formData.email} 
        required
      />
    </div>

    <div class="form-group">
      <label for="message">Message:</label>
      <textarea 
        id="message" 
        bind:value={formData.message} 
        rows="4" 
        required
      ></textarea>
    </div>

    <button type="submit">Submit</button>
  </form>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    max-width: 600px;
  }

  h1 {
    color: #ff3e00;
    font-size: 4em;
    font-weight: 100;
    margin-bottom: 0.5em;
  }

  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #333;
    background-color: #f4f4f4;
    border-radius: 2em;
    border: 2px solid rgba(0, 0, 0, 0);
    cursor: pointer;
    transition: all 0.2s;
    margin: 0 0 2em 0;
  }

  button:hover {
    border-color: #ff3e00;
  }

  form {
    text-align: left;
    background: #f9f9f9;
    padding: 2em;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .form-group {
    margin-bottom: 1em;
  }

  label {
    display: block;
    margin-bottom: 0.5em;
    color: #333;
  }

  input, textarea {
    width: 100%;
    padding: 0.5em;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: inherit;
    font-family: inherit;
  }

  input:focus, textarea:focus {
    outline: none;
    border-color: #ff3e00;
    box-shadow: 0 0 0 2px rgba(255,62,0,0.1);
  }

  textarea {
    resize: vertical;
  }
</style>
