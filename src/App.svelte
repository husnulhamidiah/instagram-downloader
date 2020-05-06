<script>
  import '../node_modules/normalize.css/normalize.css'
  import '../node_modules/milligram/dist/milligram.css'
	import Form from './Form.svelte'
	import Media from './Media.svelte'

	import { getMediaByCode } from 'instagram-stories'

	let url, media
  let mediaExist = true

	const getMedia = async () => {
    try {
      const code = extractUrl(url)
      const { graphql : { shortcode_media } } = await getMediaByCode(code)
      const nodes = await extractMedia(shortcode_media)

      media = Array.isArray(nodes) ? nodes : [ nodes ]
      url = ''
      mediaExist = true
    } catch (error) {
      media = []
      url = ''
      mediaExist = false
    }
  }

  const extractUrl = (url) => {
    const regex = /p\/([_a-z0-9-]+)/gi
    const match = url.match(regex)

    return (match) ? match.shift().substring(2) : url
  }

	const extractMedia = async (json) => {
    switch (json.__typename) {
      case 'GraphImage':
        return {
          typename: json.__typename,
          src: json.display_resources.pop().src
        }
      case 'GraphVideo':
        return {
          typename: json.__typename,
          src: json.video_url
        }
        return 
        break
      case 'GraphSidecar':
        const extractMediaPromises = json.edge_sidecar_to_children.edges
          .map(item => extractMedia(item.node))        
        const media = await Promise.all(extractMediaPromises)
        return media
        break
      default:
        return {
          typename: json.__typename,
          src: json.display_url
        }
        break
    }
  }

  window.addEventListener('share', (e) => {
    url = e.detail
    getMedia()
  }, false);
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-width: 440px;
    margin: 0 auto;
  }
  .header {
    flex-shrink: 0;
    padding: 20px;
    padding-bottom: 10px;
  }
  .content {
    flex: 1;
    padding: 20px;
  }
  .footer {
    flex-shrink: 0;
    padding: 20px;
  }

</style>

<div class="container">
  <header class="header">
    <h1>Yet!</h1>
    <p>Another instagram downloader</p>
  </header>
  
  <div class="content">
    {#if !mediaExist}
      <blockquote>
        Media not found
      </blockquote>
    {/if}
    
    <Form bind:url={ url } on:click={ getMedia }></Form>
    <Media media={ media }></Media>
  </div>

  <footer class="footer">
    <hr>
    Made with ❤ by Husnul Anwari<br>
    <a href="https://github.com/husnulhamidiah/yet" target="_blank">Github</a>
  </footer>
</div>
