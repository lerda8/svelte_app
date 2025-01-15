<script>
  let count = 0;
  
  function increment() {
    count += 1;
  }
</script>

<main>
  <h1>Welcome to Svelte</h1>
  <button on:click={increment}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
  </button>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    font-size: 4em;
    font-weight: 100;
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
  }

  button:hover {
    border-color: #ff3e00;
  }
</style>
