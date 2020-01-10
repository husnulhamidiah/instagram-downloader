<script>
	import Form from './Form.svelte'
	import Media from './Media.svelte'

	import { getMediaByCode } from 'instagram-stories'

	let url, media

	const getMedia = async () => {
		const code = url
		const { graphql : { shortcode_media } } = await getMediaByCode(code)
		const nodes = await extractMedia(shortcode_media)

		media = Array.isArray(nodes) ? nodes : [ nodes ]
		url = ''
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

<main class="container">
	<blockquote>
		<p><em>v0.0.1-alpha</em></p>
	</blockquote>
	
  <Form bind:url={ url } on:click={ getMedia }></Form>
	<Media media={ media }></Media>
</main>