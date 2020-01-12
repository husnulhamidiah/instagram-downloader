<script>
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
</script>

<style>
  .badge.hero {
    background-color: #fad284;
  }
</style>

<main class="container">
  <div>
    <h3 class="padding-left"><span class="badge hero">avocadobar</span></h3>
  </div>

  {#if !mediaExist}
    <div class="row flex-spaces">
      <div class="alert alert-danger">Media not found</div>
    </div>
  {/if}
	
  <Form bind:url={ url } on:click={ getMedia }></Form>
	<Media media={ media }></Media>
</main>