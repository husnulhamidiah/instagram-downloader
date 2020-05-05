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

{#each media as chunk, i}
  <div>
    {#each chunk as medium, j}
      {#if medium && medium.src && medium.typename}
        <div>
          <div>
            {#if medium.typename == 'GraphImage'}
              <img src={ medium.src } alt="media" width="400">
            {:else}
              <video class="media-video" bind:this={ video } width="400" controls>
                <source src={ medium.src } type="video/mp4" >
              </video>
            {/if}
          </div>
          <div>
            <a href={ medium.src } target="_blank"><caption>Download</caption></a>
          </div>
        </div>
      {/if}
    {/each}
  </div>
{/each}