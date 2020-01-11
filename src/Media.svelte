<script>
  export let media = []
  let video

  $: (media && video) ? video.load() : null

  const onClickHandler = ({ target }) => {
    const src = target.getAttribute('data-source')
    if (src) window.open(src)
  }
</script>

<style>
  .no-padding {
    padding: 0;
  }
  .image-media {
    width: 250px;
    height: auto;
  }
  .video-media {
    width: 300px;
    height: auto;
  }
</style>

<!-- TODO: Add masonry style for media -->
<div class="row">
  {#each media as medium, i}
    {#if medium && medium.src && medium.typename}
      <div class="col no-padding">
        <div popover-bottom="Download" on:click={ onClickHandler } data-source={ medium.src }>
          {#if medium.typename == 'GraphImage'}
            <img src={ medium.src } alt="media" class="media image-media">
          {:else}
            <div class="border-3 border-primary" style="overflow: hidden;">
              <video bind:this={ video } class="media video-media" controls>
                <source src={ medium.src } type="video/mp4">
              </video>
            </div>
          {/if}
        </div>
      </div>
    {/if}
  {/each}
</div>
