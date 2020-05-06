<script>
  export let url = ''
</script>

<style>
  .form {
    display: flex;
  }
  .input-box {
    flex: 1;
  }
</style>

<form>
  <div>
    <div>
      <div class="form">
        <input class="input-box" type="text" placeholder="URL" id="url" bind:value={ url }>
        <input type="submit" value="Submit" on:click|preventDefault>
      </div>
      <p>
        Put url <span><em>https://www.instagram.com/p/B_kyX9tgn4W/</em></span> or just the code <span><em>B_kyX9tgn4W</em></span>
      </p>
    </div>
  </div>
</form>
