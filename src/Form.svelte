<script>
  export let url = ''
</script>

<style>
  .input-large, .button-large {
    height: 5rem;
  }
  .input-label {
    word-break: break-word;
    margin: 1rem 0 2.5rem 0;
    font-weight: normal;
  }
</style>

<form>
  <div class="row">
    <div class="column">
      <input class="input-large" type="text" placeholder="url" id="url" bind:value={ url }>
      <label for="url" class="input-label">
        Put url <span class="hero-detail"><em>www.instagram.com/p/B7JqW9uA1mP </em></span>or just the code <span class="hero-detail"><em>B7JqW9uA1mP</em></span>
      </label>
      <input class="button-primary button-large" type="submit" value="Submit" on:click|preventDefault>
    </div>
    <div class="column"></div>
  </div>
</form>
