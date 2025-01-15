<script>
  import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
  import '@skeletonlabs/skeleton/styles/skeleton.css';

  let formData = {
    name: '',
    email: '',
    message: ''
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Form submitted:', formData);
  }
</script>

<div class="app bg-surface-50-900-token">
  <main class="container mx-auto p-4 space-y-8">
    <h1 class="h1 text-center">Welcome to Svelte</h1>
    
    <form on:submit={handleSubmit} class="card p-4 max-w-2xl mx-auto">
      <div class="space-y-4">
        <label class="label">
          <span>Name</span>
          <input 
            class="input" 
            type="text" 
            placeholder="Enter your name" 
            bind:value={formData.name} 
            required
          />
        </label>

        <label class="label">
          <span>Email</span>
          <input 
            class="input" 
            type="email" 
            placeholder="Enter your email" 
            bind:value={formData.email} 
            required
          />
        </label>

        <label class="label">
          <span>Message</span>
          <textarea 
            class="textarea" 
            rows="4" 
            placeholder="Enter your message" 
            bind:value={formData.message} 
            required
          ></textarea>
        </label>

        <button type="submit" class="btn variant-filled-primary w-full">Submit</button>
      </div>
    </form>
  </main>
</div>

<style lang="postcss">
  /* Any custom styles can go here */
</style>
