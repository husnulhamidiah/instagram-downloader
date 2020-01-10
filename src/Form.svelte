<script>
  export let url = ''
</script>

<style>
  .url-box {
    width: 100%;
  }
</style>

<form>
    <div class="row">
      <div class="sm-6 col"><input type="text" placeholder="" id="url" class="url-box" bind:value={ url }></div>
      <div class="col"><button class="btn-small" on:click|preventDefault>Extract</button></div>
    </div>
</form>
