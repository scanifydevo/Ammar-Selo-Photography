import React, {Component} from 'react'
import ReactGallery from 'react-photo-gallery'


class Gallery extends Component {
  constructor(props){
    super(props);
    this.state = {
      photos: []
    }
  }
  componentDidMount() {
    let dataURL = 'http://198.58.109.189/wp-json/wp/v2/media/?per_page=100'
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          photos: res
        })
      })

    console.log(this.props.category)
  }
  render () {
    let IMAGES = []

    const filtered_images = this.state.photos.filter((photo) => {  
      {/* The category specified by filter link click */}
      let category = this.props.category
      return photo.acf.category === category
    })

    filtered_images.map((photo, index) => {
      IMAGES.push(
        {
          src: photo
                .media_details
                .sizes
                .medium
                .source_url,
          width: photo 
                  .media_details
                  .sizes
                  .medium
                  .width,
          height: photo
                    .media_details
                    .sizes
                    .medium
                    .height
        }
      )
    })

    const viewPortWidth = window.innerWidth;

    return (
      <div>
        <ReactGallery columns={viewPortWidth <= 400 ? 1 : 3} photos={IMAGES} />
      </div>
    )

  }
}

Gallery.defaultProps= {id: "yo"}

export default Gallery
