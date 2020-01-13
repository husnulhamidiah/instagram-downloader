<script>
  export let media = []
  let video

  $: media = chunk(media, 3)
  $: (media && video) ? video.load() : null

  const chunk = (array, size) => Array(Math.ceil(array.length / size))
    .fill()
    .map((_, index) => index * size)
    .map(begin => array.slice(begin, begin + size))

  const onClickHandler = ({ target }) => {
    const src = target.getAttribute('data-source')
    if (src) window.open(src)
  }
</script>

<style>
  .media {
    margin: 3rem 0;
  }
  .media-video {
    max-width: 100%;
  }
</style>

{#each media as chunk, i}
  <div class="row">
    {#each chunk as medium, j}
      {#if medium && medium.src && medium.typename}
        <div class="column">
          <div popover-bottom="Download" class="media" on:click={ onClickHandler } data-source={ medium.src }>
            {#if medium.typename == 'GraphImage'}
              <img src={ medium.src } alt="media">
            {:else}
              <video class="media-video" bind:this={ video } controls>
                <source src={ medium.src } type="video/mp4">
              </video>
            {/if}
          </div>
        </div>
      {/if}
    {/each}
  </div>
{/each}

<!-- <div class="row row-wrap">
  {#each media as medium, i}
    {#if medium && medium.src && medium.typename}
      <div class="column column-33">
        <div class="media" on:click={ onClickHandler } data-source={ medium.src }>
          {#if medium.typename == 'GraphImage'}
            <img src={ medium.src } alt="media">
          {:else}
            <video bind:this={ video } controls>
              <source src={ medium.src } type="video/mp4">
            </video>
          {/if}
        </div>
      </div>
    {/if}
  {/each}
</div> -->
