<script>
  export let media = []

  const onClickHandler = ({ target }) => {
    const src = target.getAttribute('data-source')
    if (src) window.open(src)
  }
</script>

<style>
  .no-padding {
    padding: 0;
  }
  .media {
    width: 250px;
    height: auto;
  }
</style>

<div class="row">
  {#each media as medium, i}
    {#if medium && medium.src && medium.typename}
    <div popover-bottom="Download" class="col no-padding" on:click={ onClickHandler } data-source={ medium.src }>
      {#if medium.typename == 'GraphImage'}
        <img src={ medium.src } alt="media image" class="media">
      {/if}
    </div>
    {/if}
  {/each}
</div>
