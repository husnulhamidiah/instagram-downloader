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
    max-width: fit-content;
  }
  
  .media-video {
    max-width: 100%;
  }

  [popover-bottom] {
    position: relative
  }

  [popover-bottom]:hover::after {
    opacity: 1;
    transition: opacity .2s ease-out
  }

  [popover-bottom]::after {
    transition: opacity 235ms ease-in-out 0s;
    background: rgba(0, 0, 0, .7);
    color: #fff;
    font-size: .8em;
    left: 50%;
    min-width: 10rem;
    opacity: 0;
    padding: .4em 2em;
    position: absolute;
    text-align: center;
    top: -6px;
    -webkit-transform: translateX(-50%) translateY(-100%);
    transform: translateX(-50%) translateY(-100%)
  }

  [popover-bottom]::before {
    margin-top: 8px;
    top: 100%;
    -webkit-transform: translateX(-50%) translatey(-100%) rotate(-180deg);
    transform: translateX(-50%) translatey(-100%) rotate(-180deg)
  }

  [popover-bottom]::after {
    content: attr(popover-bottom);
    margin-top: 8px;
    top: 100%;
    -webkit-transform: translateX(-50%) translateY(0);
    transform: translateX(-50%) translateY(0)
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
