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
    const regex = /p\/([_a-z0-9]+)/gi
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
  .header {
    margin-top: 5rem;
    max-width: 50%;
  }
  .footer {
    margin: 5rem auto;
  }
  .alert.danger {
    border-left: 0.3rem solid #e97979;
  }
</style>

<div class="container">
  <header class="header">
    <h1>Yet! Another instagram downloader.</h1>
  </header>

  <main>
    {#if !mediaExist}
      <blockquote class="alert danger">
        <p><em>Media not found.</em></p>
      </blockquote>
    {/if}
    
    <Form bind:url={ url } on:click={ getMedia }></Form>
    <Media media={ media }></Media>
  </main>

  <footer class="footer">
    Made with ❤ by Husnul Anwari <br>
    <a href="https://github.com/husnulhamidiah/instagram-downloader">Github</a>
  </footer>
</div>