<script>
  export let url = ''
</script>

<style>
  .input-large, .button-large {
    height: 5rem;
  }
</style>

<form>
  <div class="row">
    <div class="column">
      <input class="input-large" type="text" placeholder="url" id="url" bind:value={ url }>
      <p style="word-break: break-word;">
        Put url <span class="hero-detail"><em>https://www.instagram.com/p/B7JqW9uA1mP/ </em></span>or just the code <span class="hero-detail"><em>B7JqW9uA1mP</em></span>
      </p>
    </div>
    <div class="column">
      <input class="button-primary button-large" type="submit" value="Submit" on:click|preventDefault>
    </div>
  </div>
</form>
